// App.tsx
import React from 'react';
import AppRouter from './router';
import { useStore } from './store';
import Header from "./components/Header/Header.tsx";

const App: React.FC = () => {
    const { isLoggedIn } = useStore();

    return (
        <div>
            <Header />
            <div>{isLoggedIn ? "user is authorized" : "user is no authorized"}</div>
            <AppRouter />
        </div>
    );
};

export default App;
