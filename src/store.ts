// store.ts
import create from 'zustand';

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
        set({ isLoggedIn: true });
    },
    logout: () => {
        // Implement logout logic here
        set({ isLoggedIn: false });
    },
}));
