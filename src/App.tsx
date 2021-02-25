import React from 'react'
import './styles/style.css'

function App() {
  var numPegs : number = 6
  var pegWidth : number = window.innerWidth > 500 ? 150 : window.innerWidth / (numPegs + 2)
  const pegStyle: React.CSSProperties = {padding: pegWidth/2}
  return (
    <div className="App">
      <body>
      <button className="pegLi" style={pegStyle}></button>
      </body>
    </div>
  );
}

export default App;
