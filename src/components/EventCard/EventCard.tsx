import React from 'react';
import Card from 'react-bootstrap/Card';
import {IEvent} from "../../models/IEvent.ts";

interface EventCardProps {
    event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={event.photoLink} alt={event.name} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Address: {event.address}</Card.Text>
                <Card.Text>Phone Number: {event.phoneNumber}</Card.Text>
                <Card.Text>Rating: {event.rating}</Card.Text>
                <Card.Text>
                    Tags:{' '}
                    {event.tags.map((tag) => (
                        <span key={tag.id} className="badge badge-secondary mx-1">
              {tag.name}
            </span>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};


export default EventCard;
