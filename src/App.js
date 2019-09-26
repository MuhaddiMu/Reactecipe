import React from "react"
import "./App.css"
import Form from "./components/Form"
import Recipes from "./components/Recipes"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const API_KEY = "d60a27adb9f4294b0d3044ec07285a5e"

class App extends React.Component {
  state = {
    Recipes: []
  }

  getRecipe = async Event => {
    Event.preventDefault()

    const RecipeName = Event.target.elements.RecipeName.value

    const API_CALL = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${RecipeName}`
    )

    const DATA = await API_CALL.json()

    this.setState({ Recipes: DATA.recipes })
    console.log(this.state.Recipes)
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Search</h1>
          </header>
          <Form getRecipe={this.getRecipe} />
          <Recipes Recipe={this.state.Recipes} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
