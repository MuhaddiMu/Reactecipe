import React from "react"
import "./App.css"
import Form from "./components/Form"
import Recipes from "./components/Recipes"

const API_KEY = "c4f5fd7eb6daa62deece925aa42c0a29" //Taken From GitHub

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
  componentDidMount = () => {
    if (localStorage.getItem("Recipes") !== null) {
      const RecipesLocalStorage = localStorage.getItem("Recipes")
      const Recipes = JSON.parse(RecipesLocalStorage)

      this.setState({ Recipes: Recipes })
    }
  }

  componentDidUpdate = () => {
    const Recipes = JSON.stringify(this.state.Recipes)
    localStorage.setItem("Recipes", Recipes)
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
