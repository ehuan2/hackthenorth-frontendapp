// this module here is meant to display the home route, displays events in chronological order
import React, { useState, useEffect } from 'react'
import { PermissionTypeEnum, TEndpointResponse, TEvent, TSpeaker } from '../../types';
import { getDateString } from './eventUtils';
import "./EventCard.css"

// the login imports stuff
import { auth } from '../../firebase-init';
import { useAuthState } from 'react-firebase-hooks/auth'

// changes a single speaker to their profile picture tsx
export const SpeakerToProfileTsx = (speaker: TSpeaker, key: number) => {
    return (
        <div key={key}>
            <>
                <a className="author-avatar" href="/">
                    <img src={speaker.profile_pic ? speaker.profile_pic : "/logo192.png"} alt="Speaker" />
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
            </>
        </div>
    );
}

interface EventProps {
    event: TEvent
}

// the tsx for displaying a single card, time at top, event name + public link, hosts and link at bottom
export const EventCard = (props: EventProps) => {

    const { event } = props;
    const { speakers, private_url, public_url, permission } = event;

    // gets the logged in user
    const [user] = useAuthState(auth);

    // don't show the event if it is private and not logged in
    if (permission === PermissionTypeEnum.PRIVATE && !user) {
        return null;
    }

    // got the css from fireship :)
    return (
        <article className="card">

            <header className="card-header">
                <p>Start: {getDateString(event.start_time)}</p>
                <p>End: {getDateString(event.end_time)}</p>
                <a href={`/event/${event.id}`}><h2>{event.name}</h2></a>
            </header>

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

            {/* displaying the links to stuff */}
            <div className="tags">
                {user && (private_url) &&
                    // only display if logged in
                    <a href={private_url}>Private Link</a>
                }

                {public_url && <a href={public_url}>Public Link</a>}
            </div>

        </article>
    )
}

// so our Events tsx actually allows us to change what it fetches, through fetchData function
interface EventsProps {
    fetchData: Function
}

// for displaying all events, using the fetchData from props
export const Events = (props: EventsProps) => {

    const { fetchData } = props;

    // states for loading, and all the events
    const [events, setEvents]: [TEndpointResponse, any] = useState([]);
    const [loading, setLoading] = useState(true);

    // we will do it on load, so we'll use a useEffect hook -- we only want to do it once, when we first get the events
    useEffect(() => {

        // we need to fetch the events asynchronously
        async function asyncGet() {
            setLoading(true); // we set loading to true, which will display
            setEvents(await fetchData()); // actually, getEvents already sorts it based on time
            setLoading(false);
        }

        asyncGet();

    }, [])

    if (loading) {
        return <>...loading</>;
    }

    // maps every event to the necessary tsx
    return (
        <section className="card-list">
            {events &&
                events.map((event, key) => (<div key={key}><EventCard event={event} /></div>))
            }
        </section>
    )
}