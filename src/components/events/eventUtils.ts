// imports important abstractions
import { TEventByIdResponse, TEventsResponse, graphqlQuery } from "../fetch";
import { TEndpointResponse, TEvent } from "../../types";

// from fetching at the graphql, converts to a time string
export function getDateString(time: number) {
    const timeConst = new Date(time);
    return `${timeConst.toDateString()} ${timeConst.toLocaleTimeString()}`;
}

// gets all the events and the necessary information to display them all
export async function getEvents(): Promise<TEndpointResponse> {

    // what our query looks like -- edit fields for other information
    var graphql = JSON.stringify({
        query: `query getEvents {
            events {
                id
                name
                event_type
                permission
                start_time
                end_time
                speakers {
                    name
                    profile_pic
                }
                public_url
                private_url
            }
        }`,
        variables: {}
    })

    const data: TEventsResponse = await graphqlQuery(graphql) as TEventsResponse;

    // request went through, time to parse data
    let event: TEndpointResponse | undefined = data?.events;

    if (event) {
        // we want to sort it based on time right from the get go -- sort takes in a comparator function
        event = event.sort((a, b) => (a.start_time - b.start_time));
        return event;
    }

    // if the events for some reason don't exist, throw an error
    return Promise.reject(new Error("Events not found"));

}


// gets the event by its id number, 1 to 15 for this specific api
export async function getEventById(id: number): Promise<TEvent> {

    var graphql = JSON.stringify({
        query: `query getEventById {
            event(id: ${id}) {
                id
                name
                event_type
                permission
                start_time
                end_time
                description
                speakers {
                    name
                    profile_pic
                }
                public_url
                private_url
                related_events
            }
        }`,
        variables: { id }
    })

    const data: TEventByIdResponse = await graphqlQuery(graphql) as TEventByIdResponse;

    // request went through, time to parse data
    const event: TEvent | undefined = data?.event;

    if (event) {
        return event;
    }

    return Promise.reject(new Error("Event not found"));

}