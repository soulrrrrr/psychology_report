import { useEffect, useState } from 'react'
import '../index.css'

const VR = () => {
  const [toWin, setToWin] = useState(0);
  const [playV, setPlayV] = useState(10);

  useEffect(() => {
    let rand = Math.floor(Math.random() * 4) + 1;
    setToWin(rand);
  }, []);

  const clickVR = () => {
    if (playV === 0) {
      alert('你的 Machine 1 額度已經用完了');
      return;
    }
    
    setPlayV(playV-1);
    if (toWin === 1) {
      setToWin(Math.floor(Math.random() * 4) + 1);
      alert('Machine 1: 你中獎了!新年快樂!');
    }
    else {
      setToWin(toWin-1);
      alert('Machine 1: QQ');
    }
  }

  return (
    <div className="container">
      <button className="buttonV" onClick={clickVR}>
        Machine 1
      </button>
    </div>
  )
}

export default VR;