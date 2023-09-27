import React, { useEffect } from 'react';
import AppRouter from './router';
import { useStore } from './store';
import Header from "./components/Header/Header.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from "./services/AuthService.ts";

const App: React.FC = () => {
    const { isLoggedIn, setLongedIn} = useStore();

    useEffect(() => {
        console.log("check is auth user")
        AuthService.checkAuth().then(result => {
            setLongedIn(result.data);
        }).catch(e => console.error(e));
    }, [])

    return (
        <div>
            <Header />
            <div>{isLoggedIn ? "user is authorized" : "user is no authorized"}</div>
            <AppRouter />
        </div>
    );
};

export default App;
