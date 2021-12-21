import logo from './logo.svg';
import './App.css';
import VR from './components/VR'
import RR from './components/RR'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          請試玩兩台機器若干次之後，填寫以下回饋表單!
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
