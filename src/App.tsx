// css required
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// router stuff
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// fetching events function
import { getEvents } from "./components/events/eventUtils";

// components used
import { Events } from './components/events/Events';
import { MyNavbar } from './components/MyNavbar';
import { EventPage } from './components/events/EventPage';

function App() {
  // so App entry will really just serve as a way to redirect stuff
  // we have / to serve as the home page, displaying events, /event/:id for specific event

  return (
    <body className="App">
      <MyNavbar />
      <Router>
        <Switch>

          <Route path="/event/:id">
            <EventPage />
          </Route>

          {/* home path, display events */}
          <Route path="/">
            <Events fetchData={getEvents}/>
          </Route>

        </Switch>
      </Router>
    </body>
  );
}

export default App;