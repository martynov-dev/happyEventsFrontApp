import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/AuthService.ts";
import {useStore} from "../../store.ts";
import AuthForm from "../AuthForm/AuthForm.tsx";

const RegistrationPage: React.FC = () => {
    const history = useNavigate();
    const { setLongedIn } = useStore();

    const handleRegistration = async (formData: { username: string; password: string }) => {
        try {
            console.log("registration Request");
            const request = await AuthService.registration(formData.username, formData.password);
            if (request.status === 200) {
                console.log("login Request");
                const res = await AuthService.login(formData.username, formData.password);
                setLongedIn(res);
            }
            history('/');
        } catch (error) {
            console.error(error);
        }
    };

    return <AuthForm title="Registration" onSubmit={handleRegistration} />;
};

export default RegistrationPage;
