// store.ts
import create from 'zustand';
import AuthService from "./services/AuthService.ts";

interface AppState {
    isLoggedIn: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
    // Add other state and actions here
}

export const useStore = create<AppState>((set) => ({
    isLoggedIn: false,
    login: async (username, password) => {
        console.log(username, password);
        const res = await AuthService.registration(username, password);
        console.log(res);
        set({ isLoggedIn: true });
    },
    logout: () => {
        // Implement logout logic here
        set({ isLoggedIn: false });
    },
}));
