import React, {useEffect, useState} from "react";
import "../App.css";
import PostService from "../API/PostService";
import PostList from "../components/PostList";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [names, setName] = useState([]);
    const [photos, setPhoto] = useState([])
    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        const posts = await PostService.getAll();
        const users = await PostService.getName();
        const photo = await PostService.getPhoto();
        setPosts(posts);
        setPhoto(photo);
        setName(users)
    }
    const mergeByProperty = (arrays, property = "id") => {
        const arr = arrays.flatMap((item) => item); //делаем из всех массивов - один

        const obj = arr.reduce((acc, item) => {
            return { // делаем из массива - объект, чтобы повторения перезаписывались
                ...acc,
                [item[property]]: { ...acc[item[property]], ...item }
            };
        }, {});

        return Object.values(obj); //обратно преобразуем из объекта в массив
    };


    const results = mergeByProperty([posts, names, photos]);
    console.log(results)
    console.log(posts)

    return (
        <div className="App">
            <PostList results={results}/>
        </div>
    );
}

export default Posts;
