import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar"
import LogInPage from "./components/LogInPage"
import './css/MainPage.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/users/:userId" component={UserPage} />
            <Route
              exact
              path="/recipes/:recipeId"
              component={RecipePage}
            />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
