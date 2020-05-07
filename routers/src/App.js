//@Router install --> npm install react-router-dom;

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import post from "./Components/post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* Here component has small "c"  && use exact for exact path matching
           @switch allow to match only on route if it found then it doesn't go next 
          */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* route parameter  means which i variable like /ayush, /chauhan */}
            <Route path="/:post_id" component={post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
