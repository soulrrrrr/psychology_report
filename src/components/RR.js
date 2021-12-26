import { useState } from 'react'
import '../index.css'

const VR = () => {
  const [playR, setPlayR] = useState(10);

  const clickVR = () => {
    
    if (playR === 0) {
      alert('你的 Machine 2 額度已經用完了');
      return;
    }
    setPlayR(playR-1);
    let rand = Math.random();
    if (rand < 0.4) {
      alert('Machine 2: 你中獎了!新年快樂!');
    }
    else {
      alert('Machine 2: QQ');
    }
  }

  return (
    <div className="container">
      <button className="buttonR" onClick={clickVR}>
        Machine 2
      </button>
    </div>
  )
}

export default VR;