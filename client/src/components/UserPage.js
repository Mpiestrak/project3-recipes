import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserUpdate from "./UserUpdate";

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: black 2px solid;
  border-radius: 5px;
  font-size: 3vw;
`;

const SubmitButton = styled.button`
  background: blue;
  color: white;
  border-radius: 5px;
  font-size: 3vw;
`;

class UserPage extends Component {
  state = {
    user: {
      myRecipes: []
    },
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

  getUser = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
      console.log(this.state);
    });
  };

  deleteUser = userId => {
    axios.delete(`/api/users/${userId}`).then(() => {});
  };

  handleChange = event => {
    const brandNewRecipe = { ...this.state.newRecipe };
    brandNewRecipe[event.target.name] = event.target.value;
    this.setState({ newRecipe: brandNewRecipe });
  };

  handleSubmit = event => {
    console.log(this.state);
    const userId = this.props.match.params.userId;
    // event.preventDefault();
    axios.post(`/api/users/${userId}/recipes`, this.state.newRecipe);
  };

  delete = () => {
    const userId = this.props.match.params.userId;
    axios.delete(`/api/users/${userId}`).then(() => {
      this.props.history.push(`/users`);
      this.props.history.push(`/login`);
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.user.name}'s Recipes</h1>
        {this.state.user.myRecipes.map(recipe => (
          <div key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
          </div>
        ))}

        <h3>Create new Recipe</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
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
              <label htmlFor="mainIngredient">Main Ingredient: </label>
              <select name="mainIngredient">
                <option value="chicken">Chicken</option>
                <option value="beef">Beef</option>
                <option value="seafood">Seafood</option>
                <option value="pork">Pork</option>
              </select>
            </div>
            <div>
              <label htmlFor="ingredients">Ingredients: </label>
              <input
                onChange={this.handleChange}
                value={this.state.newRecipe.ingredients}
                type="list"
                name="ingredients"
              />
            </div>
            {/* <div>
        <label htmlFor="image">Image URL: </label>
        <input
        onChange={this.handleChange}
        value={this.state.newRecipe.img}
        type="href"
        name="img"
        />
        </div> */}
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
              <label htmlFor="preparation">Preparation: </label>
              <input
                onChange={this.handleChange}
                value={this.state.newRecipe.preparation}
                type="text"
                name="preparation"
              />
            </div>
            <SubmitButton type="submit">Create Recipe</SubmitButton>
          </form>
        </div>
        <div>
          <UserUpdate {...this.props}/>
        </div>
        <div>
          <DeleteButton onClick={() => this.delete()}>Delete User</DeleteButton>
        </div>
      </div>
    );
  }
}

export default UserPage;
