import Posts from "../Pages/Posts";
import About from "../Pages/About";
import Login from "../Pages/Login";

export const privateRoutes = [
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/about", element: <About/>, exact: true},
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},

]