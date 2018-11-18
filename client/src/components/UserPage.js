import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

class UserPage extends Component {
  state = {
    user: {},
    newRecipe: {
      name: "",
      img: "",
      mainIngredient: "",
      ingredients: [],
      preparation: "",
      timeNeeded: ""
    }
  };

  componentDidMount() {
    this.getUser();
  }

  consoled = () => {
      console.log(this.state)
  }

  getUser = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
      console.log(this.state)
    });
  };

  deleteUser = (userId) => {
      axios.delete(`/api/users/${userId}`).then(() => {

      })
  }

  handleChange = event => {
    const brandNewRecipe = { ...this.state.newRecipe };
    brandNewRecipe[event.target.name] = event.target.value;
    this.setState({ newRecipe: brandNewRecipe });
  };

  handleSubmit = event => {
      console.log(this.state)
      const userId = this.props.match.params.userId;
    event.preventDefault();
    axios.post(`/api/users/${userId}/recipes`, this.state.newRecipe).then(res => {
      this.props.history.push(`/users/${userId}/recipes/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        {/* <h1>{this.state.user.name}'s Recipes</h1>
        {this.state.user.myRecipes.map(recipe => (
          <div key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
          </div>
        ))} */}

        <h3>Create new Recipe</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="image">Image URL: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newRecipe.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="preparation">Preparation: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newRecipe.preparation}
              type="text"
              name="preparation"
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newRecipe.name}
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="timeNeeded">Total Time Needed: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newRecipe.timeNeeded}
              type="text"
              name="timeNeeded"
            />
          </div>
          <div>
            <label htmlFor="mainIngredient">Main Ingredient: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newRecipe.mainIngredient}
              type="text"
              name="mainIngredient"
            />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients List: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newRecipe.ingredients}
              type="array"
              name="ingredients"
            />
          </div>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    );
  }
}

export default UserPage;
