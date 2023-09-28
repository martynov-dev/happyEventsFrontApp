import React, { useEffect} from 'react';
import EventCard from '../EventCard/EventCard.tsx';
import PlaceService from '../../services/PlaceService';
import SearchComponent from "../SearchComponent/SearchComponent.tsx";
import {ITag} from "../../models/ITag.ts";
import {useStore} from "../../store.ts";

const EventList: React.FC = () => {
    const {loadedEvents, setEvents} = useStore();

    useEffect(() => {
        loadPlaces();
    }, []);

    const loadPlaces = async () => {
        try {
            console.log("load places")
            const response = await PlaceService.getPlaces();
            setEvents(response.data);
        } catch(e) {
            console.error(e);
        }
    };

    const handleSearch = async (selectedTags: Array<ITag>) => {
        const response = selectedTags.length > 0 ? await PlaceService.searchPlacesByTag(selectedTags.map(e => ({id: e.id}))) : await PlaceService.getPlaces();
        setEvents(response.data);
    };

    return (
        <div className="container mt-4">
            <SearchComponent onSearch={handleSearch} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
                {loadedEvents.map((place) => (
                    <div key={place.id} className="col mb-4">
                        <EventCard event={place} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;
