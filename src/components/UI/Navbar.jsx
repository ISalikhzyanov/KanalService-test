import React, {useContext} from 'react';
import logo2 from "./logo2.svg"
import Group from "./Group.svg"
import mobLogo from "./mobLogo.svg"
import {AuthContext} from "../../context";
const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const userName = localStorage.getItem('username')

    const logout = ()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        isAuth
        ?<div className="navbar">
            <img className="mob_logo"  src={mobLogo} alt="mobile-logo"/>
                <img className="logo_two"  src={logo2} alt="logo2"/>
                <div className="group">
                    <strong>{userName}</strong>
                    <img style={{cursor: "pointer"}} onClick={logout} src={Group} alt="group-img"/>
                </div>
            </div>
        :<div className="navbar">
                <img className="logo_two" src={logo2} alt="logo2"/>
            </div>

    );
};

export default Navbar;