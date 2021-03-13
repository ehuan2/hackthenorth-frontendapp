import React from 'react'
import { useLocation } from "react-router-dom";
import { TEndpointResponse } from '../../types';
import { Events } from './Events';
import { getEvents } from './eventUtils';

// a hook to get the query
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

interface Props {
}

export const EventsSearch = (props: Props) => {

    let query = useQuery();

    const type_search = query.get("eventtype");
    const search = query.get("search");

    async function queriedSearch() {
        let events: TEndpointResponse = await getEvents();

        // if no queries, include everything
        if(!type_search && !search) {
            return events;
        }

        let finalEvents = [];

        // single pass for querying and searching
        for (const event of events) {
            const { event_type, name } = event;

            if(search && !(name.toLocaleLowerCase()).includes(search.toLocaleLowerCase())) continue;
            if(type_search && event_type !== type_search) continue;

            // if the search exists and search exists in name, same for event, then we can add
            finalEvents.push(event);

        }

        return finalEvents;

    }

    return (
        <Events fetchData={queriedSearch} />
    )
}
