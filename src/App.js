import logo from './logo.svg';
import './App.css';
import Keypad from './Components/keypad.js';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
            <Keypad/>
        </div>
      </div>
    </div>
  );
}

export default App;
