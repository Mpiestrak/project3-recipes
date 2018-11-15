import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import UserPage from "./components/UserPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/users/:userId" component={UserPage} />
            <Route
              exact
              path="/users/:userId/recipes/:recipeId"
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
