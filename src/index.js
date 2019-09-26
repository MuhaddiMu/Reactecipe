import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

//Action

export const Increment = () => {
  return {
    type: "INCREMENT"
  }
}
export const Decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const LoggedIn = () => {
  return {
    type: "LOGGEDIN"
  }
}

//Reducer
const Counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const Status = (state = false, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return !state
    default:
      return state
  }
}

//Combine Reducers
const AllReducers = combineReducers({
  Counter,
  Status
})

//Store
let store = createStore(AllReducers)

//Dispatch
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
