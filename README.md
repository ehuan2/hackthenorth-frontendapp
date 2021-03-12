# hackthenorth-frontendapp
My Hack the North 2021 Frontend Developer Challenge

## Task
You've been tasked to build a tool to display events for both hackers and the general public. Attendees would have to log in to access the full list of events as hackers!

## Part 1 Project
An endpoint for event information is available at https://api.hackthenorth.com/v3/graphql. You can choose to either hit the endpoint using a GraphQL Client or HTTP methods.

This is the information given to us by the query:
query {
  events {
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
}

## Write up
Mar.9th-10th: Figured out how to properly use GraphQL + set up Typescript in my project. I want to make it nice for scaling by setting up types like PotentialData, so for future queries, just need to add onto the number of types + what we expect the response to look like. Tomorrow I'll start working on the actual parts of the project ie displaying events, filtering, searching, etc. I will be saving time by using React Bootstrap for the CSS.

Mar.11th: Working on displaying all events