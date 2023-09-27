import create from 'zustand';
import {ITag} from "./models/ITag.ts";
import {IEvent} from "./models/IEvent.ts";

const TEST_ARRAY_TAGS: Array<ITag> = [
    {
        id: 1,
        name: "Забегаловка"
    },
    {
        id: 2,
        name: "Хрючево"
    }
];

export const TEST_ARRAY_EVENTS: Array<IEvent> = [
    {
        id: 1,
        name: "Невкусно и запятая",
        description: "Описание нашей забегаловки",
        address: "Пушкина, дом Колотушкина",
        phoneNumber: "88005553535",
        rating: 4,
        photoLink: "/images/tobe.png",
        tags: [
            {
                id: 1,
                name: "Забегаловка"
            },
            {
                id: 2,
                name: "Хрючево"
            }
        ]
    },
    {
        id: 2,
        name: "Невкусно и запятая 2",
        description: "Описание нашей забегаловки",
        address: "Пушкина, дом Кукушкина",
        phoneNumber: "1232321321",
        rating: 3,
        photoLink: "/images/tobe.png",
        tags: [
            {
                id: 2,
                name: "Хрючево"
            }
        ]
    }
]

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