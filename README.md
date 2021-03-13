# hackthenorth-frontendapp
My Hack the North 2021 Frontend Developer Challenge

How to start:
Run
`npm install` or `yarn add`
`npm start` or `yarn start`

Go to http://localhost:3000.

## Write Up
1. Development Process:

I know that I didn't have too too much time making a great project, so I went with what I was comfortable, which is React Typescript. My process was to essentially try and modularize my code - split it up into chunks that can be easily scalable.
### Structure and Design:
I'm not all too familiar with all the best practices, but on a personal level, I like to split up my React project such that we have the main components under a components folder, the global types and necessary initializations (like firebase-init) directly under src. Then for each type of related components, I like to put them all under the same folder. For example, here we have events under the same folder, and if I were to extend this to say User Profiles, then it'd be under another folder called user/. 

I also put in a fetch.ts which acts as an interface for other calls so that I don't have to remember the graphql fetch request syntax. Inside the events folder as well, I have eventUtils which creates the functions that utilize fetch, as well as other helper functions like converting dates to strings. 

In terms of how the tsx is organized, I realize that I can probably improve on it. I'm at a point where there are similar components being used in both of them, but not enough that I can separate the similar components up. That's the problem with organizing - you have to have enough files so that each file can be relatively small, but not too many that it gets confusing about what depends on what.

### Tools Used:
So I really only choose React because of how comfortable I was with it. I had done previous frontend experience using it, so I was most comfortable with it. I also choose Firebase for the login because the hooks you can use make it really easy to handle the auth. I choose React Bootstrap (even if it's very bloaty) because it makes development really fast, and makes it look nice without me having to fiddle around with the css constantly.

### Problems Encountered:
This was the first time I used GraphQL, and so figuring out the fact that I don't get all the information at once and wondering why my program was wrong definitely created its setbacks. After I realized my mistakes, it was pretty much smooth sailing. I also wasn't the best at Typescript, and there are parts in my project where it is a little iffy (creating an emptyEvent, pretty sure there's another way to use the useState hook without doing what I did), but overall not too many problems.

### Solutions to Problems:
The way I debug frontend isn't necessarily the best, I realize there are unit tests, but the way I do it was simply to test it out using `yarn start`.

### Proud of:
To be honest, this was the first project where the CSS (although it's mainly copied from Fireship and React Bootstrap) turned out really well. It's also great that I could just simply write more comfortably in Typescript, and the autocompletion really makes it worth it. Figuring out as well proper error catching was great. All in all, I'm just proud to create a project that turned out so well when I didn't have too too much time to work on it.

2. Additional Time
For additional time, I think I would rework my structure a little bit, and make it easier for others to scale on it. There are some places, like the loading for example, that can be recreated as a wrapper component to not necessarily need three if statements before the main component that I want to show.

If I had more time, I would like to improve on the searching and filtering. As it is right now, I can filter for a single type of event (not multiple) and doesn't work with searching because of my frustrations with the navbar search bar.

I would also spend more time making it look nicer on other devices. I tested this in the phone browser (which you can simulate from inspect element), and it is quite frankly terrible on phones.

In terms of other functionality, I would want to look into how to persist the order of events across refreshes. As it is right now, I'm not familiar with how to do that, but I was thinking of either storing it as a cookie or simply in memory which does persist.

Also being able to create a good filter that gives a good UX (usually filters aren't that fun to use), would be great to have.

Something small but significant would also be rewriting the routes of the event ids to be hashed. This will stop people from spamming /event/1 /event/2 ... and just in general seems better.

## Daily Logs
Mar.9th-10th: Figured out how to properly use GraphQL + set up Typescript in my project. I want to make it nice for scaling by setting up types like PotentialData, so for future queries, just need to add onto the number of types + what we expect the response to look like. Tomorrow I'll start working on the actual parts of the project ie displaying events, filtering, searching, etc. I will be saving time by using React Bootstrap for the CSS.

Mar.11th: Working on displaying all events - Got the CSS for displaying events working

Mar.12th: Continuing on displaying events, working on sorting based on start_time, and working on hiding private events

Ended up deciding to use Firebase for login (although we don't require this step, it's actually easier) to use prebuilt Google libraries than managing the state myself using Redux (I could do it, but it's a lot of bloat that might not be needed for just managing login details across views).

From my experience, we could either store the login details using cookies and such in the browser, and check they exist or use state management. I decided to use a prebuilt stuff, using Firebase to lighten and speed up the process.

All changes today: Got displaying events working, got a nav bar, got it sorted based on time, and login with firebase works (and hiding private events). Next challenge will be searching, and filtering -- for filtering, maybe some sort of pop up that does it? Overall, this project is pretty good in terms of how it's going (best styling I've ever done).

Mar.13th: Working on part 4 of project + additional functionality
For 4, I am thinking of doing /event/:id -- for an actual product, I would like to somehow hash this (or rather yet, have the backend hash it)

Alright! So I got all four things done, I will be working on some extra functionality + cleaning up. I will allow for searching now for a specific event, based on a keyword in the title.

Encountered quite a few problems when trying to do searching. For some reason, when you search in the navbar, it'll remove the navbar because once the form submits it redirects to a new component that doesn't have the navbar, but simply placing the navbar in doesn't seem to do the trick. Ended up getting frustrated, and just made the button a link.