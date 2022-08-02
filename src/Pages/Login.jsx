import React, {useContext} from 'react';
import {AuthContext} from "../context";
import {Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <Row justify="center" align="middle" className="login_form">
                <LoginForm/>
            </Row>
        </div>
    );
};

export default Login;