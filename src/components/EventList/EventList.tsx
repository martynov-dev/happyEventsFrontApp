import React from 'react';
import EventCard from "../EventCard/EventCard.tsx";
import {IEvent} from "../../models/IEvent.ts";

interface EventListProps {
    events?: IEvent[];
}
const TestEvents: IEvent[] = [
    {
        id: 1,
        name: 'Event 1',
        description: 'Description of Event 1',
        address: '123 Main St',
        phoneNumber: '555-1234',
        rating: 4,
        photoLink: 'https://example.com/event1.jpg',
        tags: [
            { id: 1, name: 'Tag1' },
            { id: 2, name: 'Tag2' },
        ],
    },
    // Add more event objects here as needed
];


const EventList: React.FC<EventListProps> = ({ events =  TestEvents}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {events.map((event) => (
                <div key={event.id} className="col mb-4">
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    );
};

export default EventList;
