import './App.css';
import { getEventById, getEvents } from "./components/events/eventFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <button onClick = {async () => await getEvents()}></button>
      <button onClick = {async () => await getEventById(1)}></button>
    </div>
  );
}

export default App;