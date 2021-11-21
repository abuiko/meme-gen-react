import './css/App.css'
import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes as Switch } from "react-router-dom"
import FindMeme from "./components/FindMeme"
import MemeGenerator from "./components/MemeGenerator"

function App() {


  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/meme_generator"><h1>Meme Generator</h1></Link>
          <Link to="/find_meme"><button className="header-btn">Find</button></Link>
        </header>
        <Switch>
          <Route path="/find_meme" element={<FindMeme />} />
          <Route path="/meme_generator" element={<MemeGenerator />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
