import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import img from "./img/HomePageBG.jpg";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import LogInPage from "./components/LogInPage";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  background-image: url(${img});
  background-attachment: fixed;
  background-size: 'cover';
  };
  button {
    font-size: 15px;
    border-radius: 5px;
    background-color: whitesmoke;
    border: black 1px solid;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/users/:userId" component={UserPage} />
            <Route exact path="/recipes/:recipeId" component={RecipePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
