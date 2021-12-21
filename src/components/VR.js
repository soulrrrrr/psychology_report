import { useEffect, useState } from 'react'

const VR = () => {
  const [toWin, setToWin] = useState(0);


  useEffect(() => {
    let rand = Math.floor(Math.random() * 4) + 1;
    setToWin(rand);
  }, []);

  const clickVR = () => {
    if (toWin === 1) {
      setToWin(Math.floor(Math.random() * 4) + 1);
      alert('你中獎了!');
    }
    else {
      setToWin(toWin-1);
      alert('再接再厲!');
    }
  }

  return (
    <div className="container">
      <button onClick={clickVR}>
        Machine 1
      </button>
    </div>
  )
}

export default VR;