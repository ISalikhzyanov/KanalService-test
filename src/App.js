import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/UI/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import MobileNavbar from "./components/UI/MobileNavbar";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(()=>{
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <MobileNavbar/>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;