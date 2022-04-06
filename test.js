import React, { useState } from "react"

function SomeComponent() {
  const [seconds, setSeconds] = useState(0)

  function startStopwatch() {
    let updatedSeconds = seconds;
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
      setSeconds(updatedSeconds);
    }, 1000);
  }

return (
  <div>
    {seconds}
    <button onClick={startStopwatch} >Start</button>
  </div>
)
}