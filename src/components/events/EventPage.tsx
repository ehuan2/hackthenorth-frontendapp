// this here will display /event/:id
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase-init';

import { EventTypeEnum, PermissionTypeEnum, TEndpointResponse, TEvent } from '../../types';
import { Events, SpeakerToProfileTsx } from './Events';
import { getDateString, getEventById } from './eventUtils';

// an empty event so useState will work
const emptyEvent: TEvent = {
    id: -1,
    name: "",
    event_type: EventTypeEnum.ACTIVITY,
    start_time: -1,
    end_time: -1,
    speakers: [],
    private_url: "",
    related_events: []
}

interface Props {
}

// the page to display each separate event
export const EventPage = (props: Props) => {

    // this is the id from /event/:id
    let { id }: any | null = useParams();

    const [event, setEvent]: [TEvent, any] = useState(emptyEvent);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [user] = useAuthState(auth);

    // on load, get the event
    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            setEvent(await getEventById(id).catch(() => setError(true)));
            setLoading(false);
        }

        fetchData();

    }, [])

    if (loading) {
        return <>...loading</>;
    }

    // so if it did load, but event doesn't exist redirect to start
    if (error) {
        return <>Event not found</>;
    }

    const { speakers, private_url, permission, public_url, related_events } = event;

    // if it's private and not loggedin, prevent people from seeing it
    if (permission === PermissionTypeEnum.PRIVATE && !user) {
        return <>Private Event</>;
    }

    // it'll get all the related events -- meant to pass into Events component
    async function getRelatedEvents() {
        let events: TEndpointResponse = [];

        for (let i = 0; i < related_events.length; i++) {
            const element = related_events[i];
            let nxt = await getEventById(element);
            events.push(nxt);
        }

        events.sort((a, b) => (a.start_time - b.start_time));
        return events;
    }

    if (event === emptyEvent) {
        // shouldn't get here
        return <>Something went wrong...</>;
    }

    return (
        <>
            {/* actual event */}
            <section className="card-list">
                <article id="eventpage">
                    <header className="card-header">
                        <p>Start: {getDateString(event.start_time)}</p>
                        <p>End: {getDateString(event.end_time)}</p>
                        <h2>{event.name}</h2>
                    </header>

                    {event.description && <div>{event.description}</div>}

                    {speakers &&
                        // displaying the hosts -- I realize that it's a lil inefficient to iterate twice over --
                        <div className="card-author">
                            {speakers.map((speaker, key) => SpeakerToProfileTsx(speaker, key))}
                            <div className="author-name">
                                <div className="author-name-prefix">Hosts:</div>
                                {speakers.map((speaker, key) => <div key={key}>{speaker.name}</div>)}
                            </div>
                        </div>
                    }

                    <div className="tags">
                        {user && (private_url) &&
                            // displaying the private url
                            <a href={private_url}>Private Link</a>
                        }
                        {public_url && <a href={public_url}>Public Link</a>}
                    </div>

                </article>
            </section>

            {/* related events */}
            <Events fetchData={getRelatedEvents} />
        </>

    )
}
