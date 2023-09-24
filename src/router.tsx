import React from 'react';
import {Route, Routes } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage.tsx";
import EventList from "./components/EventList/EventList.tsx";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/" element={<EventList />} />
        </Routes>
    );
};

export default AppRouter;
