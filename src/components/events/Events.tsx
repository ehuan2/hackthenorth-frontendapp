import React, { useState, useEffect } from 'react'
import { TEndpointResponse } from '../../types';
import { EventCard } from './EventCard';
import { getEvents } from './eventFetch';
import "./EventCard.css"

interface Props {

}

export const Events = (props: Props) => {

    const [events, setEvents]: [TEndpointResponse, any] = useState([]);
    const [loading, setLoading] = useState(true);

    // we will do it on load, so we'll use a useEffect hook -- we only want to do it once, when we first get the events
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setEvents(await getEvents());
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <section className="card-list">
            {!loading && events &&
                events.map((event, key) => (<span key={key}><EventCard event={event} /></span>))
            }
        </section>
    )
}
