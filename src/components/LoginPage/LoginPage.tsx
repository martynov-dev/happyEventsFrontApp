import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useStore} from "../../store.ts";
import AuthForm from "../AuthForm/AuthForm.tsx";
import AuthService from "../../services/AuthService.ts";


const LoginPage: React.FC = () => {
    const history = useNavigate();
    const { setLongedIn } = useStore();

    const handleLogin = async (formData: { username: string; password: string }) => {
        console.log("login Request");
        try {
            const request = await AuthService.login(formData.username, formData.password);
            if (request.status === 200) {
                setLongedIn(true);
            }
            history('/');
        } catch (e) {
            console.error(e);
        }

    };

    return <AuthForm title="Login" onSubmit={handleLogin} />;
};

export default LoginPage;
