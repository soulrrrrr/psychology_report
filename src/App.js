import logo from './logo.svg';
import './App.css';
import VR from './components/VR'
import RR from './components/RR'

function App() {
  let rand = Math.floor(Math.random());
  let first = (rand < 0.5) ? 1 : 2;
  let second = (first === 1) ? 2 : 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          遊玩步驟:<br />1. 先玩Machine {first}<br />2. 再玩Machine {second}<br />3. 填寫以下回饋表單!
        </p>
        <VR />
        <RR />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          表單連結
        </a>
      </header>
      
    </div>
  );
}

export default App;
