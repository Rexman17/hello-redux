import React, { Component } from "react";
import HelloWorld from "./HelloWorld"
// create the Redux store
import { createStore } from "redux"; // import from the Redux library
import reducer from './reducers'

const initialState = { tech: "React" };
const store = createStore(reducer, initialState); // store (vault) and reducer (cashier) are in sync
// the reducer is the only mandatory arg to createStore

class App extends Component {

  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
