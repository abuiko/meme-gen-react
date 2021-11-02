import './App.css'
import React, { Component } from 'react'
import Img from './assets/meme.jpeg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: ""
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Meme Generator</h1>
        </header>
        <main className="img-container">
          <img className="img" src={Img} alt="random " />
        </main>
        <form>
          <div className="form-container">
            <div className="range-input">
              <input type="range" />
              <input type="range" />
            </div>
            <input
              type="text"
              name="topText"
              value={this.state.topText}
              placeholder="Top Text"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              placeholder="Bottom Text"
              onChange={this.handleChange}
            />
            <button>Generate</button>
          </div>

        </form>
      </div>
    )
  }

}

export default App;
