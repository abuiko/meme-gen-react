import './App.css'
import React from 'react'
import Img from './assets/meme.jpeg'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Meme Generator</h1>
      </header>
      <main className="img-container">
        <img className="img" src={Img} alt="random " />
      </main>
    </div>
  );
}

export default App;
