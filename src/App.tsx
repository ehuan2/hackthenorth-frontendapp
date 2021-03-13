import './App.css';
import { getEventById, getEvents } from "./components/events/eventUtils";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Events } from './components/events/Events';
import { MyNavbar } from './components/MyNavbar';
import { EventPage } from './components/events/EventPage';

function App() {
  // so App entry will really just serve as a way to redirect stuff
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