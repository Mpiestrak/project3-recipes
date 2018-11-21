import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserUpdate from "./UserUpdate";
import "../css/UserPage.css";

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: black 2px solid;
  border-radius: 5px;
  font-size: 15px;
`;

const SubmitButton = styled.button`
  background: blue;
  color: white;
  border-radius: 5px;
  font-size: 15px;
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
        <div className="userbody">
          <h1 className="usersTitle">{this.state.user.name}'s Recipes:</h1>
          {this.state.user.myRecipes.map(recipe => (
            <div key={recipe._id}>
              <Link className="linkstyle" to={`/recipes/${recipe._id}`}>
                {recipe.name}
              </Link>
            </div>
          ))}

          <div className='recipesContainer'>
            <div>
              <UserUpdate {...this.props} />
            </div>
            <div className>
              <h3>Create new Recipe</h3>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <label className='labels' htmlFor="name">Name: </label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newRecipe.name}
                      type="text"
                      name="name"
                    />
                  </div>
                  <div>
                    <label className='labels' htmlFor="mainIngredient">Main Ingredient: </label>
                    <select
                      onChange={this.handleChange}
                      value={this.state.newRecipe.mainIngredient}
                      name="mainIngredient"
                    >
                      <option value="" />
                      <option value="Chicken">Chicken</option>
                      <option value="Beef">Beef</option>
                      <option value="Seafood">Seafood</option>
                      <option value="Pork">Pork</option>
                    </select>
                  </div>
                  <div>
                    <label className='labels' htmlFor="ingredients">Ingredients: </label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newRecipe.ingredients}
                      type="list"
                      name="ingredients"
                    />
                  </div>
                  {/* <div>
          <label className='labels' htmlFor="image">Image URL: </label>
          <input
          onChange={this.handleChange}
          value={this.state.newRecipe.img}
          type="href"
          name="img"
          />
          </div> */}
                  <div>
                    <label className='labels' htmlFor="timeNeeded">Total Time Needed: </label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newRecipe.timeNeeded}
                      type="text"
                      name="timeNeeded"
                    />
                  </div>
                  <div>
                    <label className='labels' htmlFor="preparation">Preparation: </label>
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
            </div>
          </div>
          <div>
            <DeleteButton onClick={() => this.delete()}>
              Delete User
            </DeleteButton>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
