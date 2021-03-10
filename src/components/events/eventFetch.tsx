
import { TEventByIdResponse, TEventsResponse, graphqlQuery } from "../fetch";
import { TEndpointResponse, TEvent } from "../../types";

export async function getEvents(): Promise<TEndpointResponse> {

    var graphql = JSON.stringify({
        query: `query getEvents {
            events {
                id
                name
            }
        }`,
        variables: {}
    })

    const data: TEventsResponse = await graphqlQuery(graphql) as TEventsResponse;

    // request went through, time to parse data
    const event: TEndpointResponse | undefined = data?.events;
    console.log(JSON.stringify(event));

    if (event) {
        return event;
    }

    return Promise.reject(new Error("Events not found"));

}

export async function getEventById(id: number): Promise<TEvent> {

    var graphql = JSON.stringify({
        query: `query getEventById {
            event(id: ${id}) {
                id
                name
            }
        }`,
        variables: { id }
    })

    const data: TEventByIdResponse = await graphqlQuery(graphql) as TEventByIdResponse;

    // request went through, time to parse data
    const event: TEvent | undefined = data?.event;
    console.log(JSON.stringify(event));

    if (event) {
        return event;
    }

    return Promise.reject(new Error("Event not found"));

}