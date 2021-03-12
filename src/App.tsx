import './App.css';
import { getEventById, getEvents } from "./components/events/eventFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Events } from './components/events/Events';

function App() {
  // so App entry will really just serve as a way to redirect stuff
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* home path, display events */}
          <Route path="/">
            <Events />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;