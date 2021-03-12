import React from 'react'
import { TEvent, TSpeaker } from '../../types';
import "./EventCard.css";

interface Props {
    event: TEvent
}

// changes a single speaker to tsx
const SpeakerToTsx = (speaker: TSpeaker, key: number) => {
    return (
        <div key = {key}>
            {speaker.profile_pic &&
                <>
                    <a className="author-avatar" href="/">
                        <img src="" alt="speakers" />
                    </a>
                    <svg className="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                </>
            }
            {speaker.name}
        </div>
    );
}

export const EventCard = (props: Props) => {
    const { event } = props;

    // got the css from fireship :)
    return (
        <article className="card">
            <header className="card-header">
                <p>{event.start_time} - {event.end_time}</p>
                <h2>{event.name}</h2>
            </header>

            <div className="card-author">

                <div className="author-name">
                    <div className="author-name-prefix">Hosts:</div>
                    {event.speakers?.map((speaker, key) => SpeakerToTsx(speaker, key))}
                </div>
            </div>
            <div className="tags">
                <a href="/">html</a>
                <a href="/">css</a>
            </div>
        </article>
    )
}
