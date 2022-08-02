import React, {useContext, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {AuthContext} from "../context";
import axios from "axios";

const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {isAuth,setIsAuth}= useContext(AuthContext);
    const submit= async () => {
        const response = await axios.get('./users.json');
        const mockUsers = response.data.find(user=>user.username=== username && user.password === password)
        if(mockUsers){
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUsers.username)
            setIsAuth(true)
        }
        else {alert("Пользователь не найден!")}
    }
    return (
        <Form onFinish={submit} className="form" >
            <h1 style={{color: "#27569C", marginBottom: 10}}>Authorization</h1>
            <Form.Item
                label="Login"
                name="username"
                rules={[rules.required(`Пожалуйста, введите имя пользователя`)]}
            >
                <Input  value={username} onChange={e=>setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="Password"
                rules={[rules.required("Пожалуйста, введите пароль")]}

            >
                <Input  type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Sign In
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;