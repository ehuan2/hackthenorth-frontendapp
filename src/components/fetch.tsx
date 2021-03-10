interface HackEvent {

}

export function getEvent(id: number) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', 'application/json');

    var graphql = JSON.stringify({
        query: `query getEvents {
        event(id: 1) {
          name
        }
    }`,
        variables: {}
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql
    };

    const json = fetch("https://api.hackthenorth.com/v3/graphql", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    console.log(JSON.stringify(json));

}