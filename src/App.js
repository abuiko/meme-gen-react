import './css/App.css'
import React, { Component } from 'react'
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import FindMeme from "./components/FindMeme"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allImgs: []
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

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
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
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/findmeme" component={FindMeme} />
            <Route path="/start" component={MemeGenerator} />
          </Switch>
          <MemeGenerator
            topText={this.state.topText}
            bottomText={this.state.bottomText}
            randomImg={this.state.randomImg}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>
      </Router>
    )
  }

}

export default App;
