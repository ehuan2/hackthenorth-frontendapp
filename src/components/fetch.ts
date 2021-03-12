import { TEndpointResponse, TEvent } from "../types";
// for extending more fetch requests, just simply add a type to PotentialData and write it out here

type JSONResponse = {
    data: PotentialData
    errors?: Array<{ message: string }>
}

export type PotentialData = TEventsResponse | TEventByIdResponse | undefined

// the expected json response
export type TEventsResponse = {
    events: TEndpointResponse
}

export type TEventByIdResponse = {
    event: TEvent
}

// abstract away the graphqlQuery part
export async function graphqlQuery(graphqlBody: string): Promise<PotentialData> {

    // change headers here
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', 'application/json');

    // change request options here
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphqlBody
    };

    const response = await fetch("https://api.hackthenorth.com/v3/graphql", requestOptions);
    const { data, errors }: JSONResponse = await response.json();

    if (!response.ok) {
        // then handle the errors
        const error = new Error(errors?.map(e => e.message).join("\n") ?? "unknown")
        console.log(error);
        return Promise.reject(error);
    }

    return data;

}