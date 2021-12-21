import { useState } from 'react'

const VR = () => {

  const clickVR = (e) => {
    //e.preventDefault();
    let rand = Math.random();
    if (rand < 0.4) {
      alert('你中獎了!');
    }
    else {
      alert('再接再厲!');
    }
  }

  return (
    <div className="container">
      <button onClick={clickVR}>
        Machine 2
      </button>
    </div>
  )
}

export default VR;