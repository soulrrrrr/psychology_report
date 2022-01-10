import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import VR from './components/VR'
import RR from './components/RR'

function App() {
  let rand = Math.random();
  let first = (rand < 0.5) ? 1 : 2;
  let second = (first === 1) ? 2 : 1;

  useEffect(() => {
    document.title="心理學實驗"
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Machine 1 和 Machine 2 是兩台簡單的抽獎遊戲機<br /><br />遊玩步驟:<br />1. 先玩Machine {first} 到額度用完<br />2. 再玩Machine {second} 到額度用完<br />3. 填寫以下回饋表單！<br />謝謝您的參與！
        </p>
	<VR />
	<RR />
        <a
          className="App-link"
          href="https://forms.gle/YNzDhGxfFrJoWgG28"
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
