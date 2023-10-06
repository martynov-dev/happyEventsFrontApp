import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useStore} from "../../store.ts";
import AuthForm from "../AuthForm/AuthForm.tsx";
import AuthService from "../../services/AuthService.ts";
import {AxiosError} from 'axios';
import { Store } from 'react-notifications-component';


const LoginPage: React.FC = () => {
    const history = useNavigate();
    const { setLongedIn } = useStore();

    const handleLogin = async (formData: { username: string; password: string }) => {
        console.log("login Request");
        try {
            const request = await AuthService.login(formData.username, formData.password);
            setLongedIn(request);
            history('/');
        } catch (e) {
            if (e instanceof AxiosError) {
                Store.addNotification({
                    title: "Error",
                    message: e.response?.data || e.message,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                    }
                });
            }
            console.error(e);
        }

    };

    return <AuthForm title="Login" onSubmit={handleLogin} />;
};

export default LoginPage;
