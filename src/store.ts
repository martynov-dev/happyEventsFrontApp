import create from 'zustand';
import {ITag} from "./models/ITag.ts";
import {IEvent} from "./models/IEvent.ts";

const TEST_ARRAY_TAGS: Array<ITag> = [];

export const TEST_ARRAY_EVENTS: Array<IEvent> = []

interface AppState {
    isLoggedIn: boolean;
    loadedEvents: Array<IEvent>
    tags: Array<ITag>;
    setEvents: (events: Array<IEvent>) => void;
    setTags: (tags: Array<ITag>) => void;
    setLongedIn: (isLoggedIn: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
    isLoggedIn: false,
    tags: TEST_ARRAY_TAGS,
    loadedEvents: TEST_ARRAY_EVENTS,
    setEvents: async (loadedEvents) => {
        set({loadedEvents});
    },
    setLongedIn: async (isLoggedIn) => {
        set({ isLoggedIn });
    },
    setTags: async (tags) => {
        set({tags})
    }
}));