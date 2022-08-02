import axios from "axios";

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const lim = getRandomInRange(5,10)
export default class PostService {
    static async getAll(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${lim}`)
return response.data
    }
    static async getName(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/users?_limit=${lim}`)
        return response.data
    }
    static async getPhoto(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/photos?_limit=${lim}`)
        return response.data
    }

    static async getMockUsers (){
        const response = await axios.get('./users.json')
    }



}