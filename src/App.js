import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Navigation from "./Components/Navigation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route to="/" exact component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
