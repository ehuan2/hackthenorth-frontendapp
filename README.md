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

## Daily write up
Mar.9th-10th: Figured out how to properly use GraphQL + set up Typescript in my project. I want to make it nice for scaling by setting up types like PotentialData, so for future queries, just need to add onto the number of types + what we expect the response to look like. Tomorrow I'll start working on the actual parts of the project ie displaying events, filtering, searching, etc. I will be saving time by using React Bootstrap for the CSS.

Mar.11th: Working on displaying all events - Got the CSS for displaying events working
Mar.12th: Continuing on displaying events, working on sorting based on start_time, and working on hiding private events

Ended up deciding to use Firebase for login (although we don't require this step, it's actually easier) to use prebuilt Google libraries than managing the state myself using Redux (I could do it, but it's a lot of bloat that might not be needed for just managing login details across views).

From my experience, we could either store the login details using cookies and such in the browser, and check they exist or use state management. I decided to use a prebuilt stuff, using Firebase to lighten and speed up the process.

All changes today: Got displaying events working, got a nav bar, got it sorted based on time, and login with firebase works (and hiding private events). Next challenge will be searching, and filtering -- for filtering, maybe some sort of pop up that does it? Overall, this project is pretty good in terms of how it's going (best styling I've ever done).

Mar.13th: Working on part 4 of project + additional functionality
For 4, I am thinking of doing /event/:id -- for an actual product, I would like to somehow hash this (or rather yet, have the backend hash it)