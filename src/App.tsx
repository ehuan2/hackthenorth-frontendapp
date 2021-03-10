import './App.css';
import { getEvent } from "./components/fetch";

function App() {
  return (
    <div className="App">
      <button onClick={() => getEvent(1)}></button>
    </div>
  );
}

export default App;