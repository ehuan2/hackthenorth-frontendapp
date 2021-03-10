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