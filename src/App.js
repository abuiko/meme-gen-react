import './css/App.css'
import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allImgs: []
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        this.setState({
          allImgs: memes
        })
      })
  }

  handleClick = (e) => {
    e.preventDefault()
    const randomNum = Math.floor(Math.random() * this.state.allImgs.length)
    const random = this.state.allImgs[randomNum].url
    this.setState({
      randomImg: random
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Meme Generator</h1>
        </header>
        <main className="img-container">
          <img className="img" src={this.state.randomImg} alt="random " />
          <p className="topText">{this.state.topText}</p>
          <p className="bottomText">{this.state.bottomText}</p>
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
            <button onClick={this.handleClick}>Generate</button>
          </div>

        </form>
      </div>
    )
  }

}

export default App;
