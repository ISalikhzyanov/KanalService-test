import React, {useContext} from 'react';
import logo2 from "./logo2.svg"
import Group from "./Group.svg"
import mobLogo from "./mobLogo.svg"
import {AuthContext} from "../../context";
const MobileNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);


    const logout = ()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        isAuth
            ?<div className="mobile_navbar">
                <img className="mob_logo"  src={mobLogo} alt="mobile-logo"/>

                <div>
                    <img style={{cursor: "pointer"}} onClick={logout} src={Group} alt="group-img"/>
                </div>
            </div>
            :<div className="mobile_navbar">
                <img className="mob_logo"  src={mobLogo} alt="mobile-logo"/>
            </div>

    );
};

export default MobileNavbar;