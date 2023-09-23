import React from 'react';
import {Route, Routes } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage.tsx";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
    );
};

export default AppRouter;
