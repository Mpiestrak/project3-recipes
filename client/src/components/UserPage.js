import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

class UserPage extends Component {
  state = {
    recipes: []
  };

  getAllRecipes = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}/recipes`).then(res => {
      console.log(res);
      this.setState({ recipes: res.data });
    });
  };

  componentDidMount() {
    this.getAllRecipes();
  }

  render() {
    return (
      <div>
        <h1>Hello from UserPage</h1>
        <div>
          <h3>My Recipes:</h3>
          {this.state.recipes.map(recipe => (
            <div key={recipe._id}>
              <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}

export default UserPage;
