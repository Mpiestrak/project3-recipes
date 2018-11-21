import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const SubmitButton = styled.button`
  background: blue;
  color: white;
  border-radius: 5px;
  font-size: 15px;
`;

class RecipeUpdate extends Component {
  state = {
    recipe: {
      name: "",
      img: "",
      mainIngredient: "",
      ingredients: [],
      preparation: "",
      timeNeeded: ""
    }
  };

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = () => {
    const recipeId = this.props.match.params.recipeId;
    axios.get(`/api/recipes/${recipeId}`).then(res => {
      this.setState({ recipe: res.data });
      console.log(this.state);
    });
  };

  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    const updatedNewRecipe = { ...this.state.recipe };
    updatedNewRecipe[event.target.name] = event.target.value;
    this.setState({ recipe: updatedNewRecipe });
  };

  update = () => {
    const recipeId = this.props.match.params.recipeId;
    const updatedRecipe = this.state.recipe;
    axios.patch(`/api/recipes/${recipeId}`, updatedRecipe).then(res => {
      this.props.history.push(`/recipes/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.update}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                onChange={this.handleChange}
                value={this.state.recipe.name}
                type="text"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="mainIngredient">Main Ingredient: </label>
              <select
                onChange={this.handleChange}
                value={this.state.recipe.mainIngredient}
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
              <label htmlFor="timeNeeded">Total Time Needed: </label>
              <input
                onChange={this.handleChange}
                value={this.state.recipe.timeNeeded}
                type="text"
                name="timeNeeded"
              />
            </div>
            <div>
              <label htmlFor="ingredients">Ingredients: </label>
              <input
                onChange={this.handleChange}
                value={this.state.recipe.ingredients}
                type="list"
                name="ingredients"
              />
            </div>
            {/* <div>
        <label htmlFor="image">Image URL: </label>
        <input
        onChange={this.handleChange}
        value={this.state.recipe.img}
        type="href"
        name="img"
        />
        </div> */}
            <div>
              <label htmlFor="preparation">Preparation: </label>
              <input
                onChange={this.handleChange}
                value={this.state.recipe.preparation}
                type="text"
                name="preparation"
              />
            </div>
            <SubmitButton type="submit">Update Recipe</SubmitButton>
          </form>
        </div>
      </div>
    );
  }
}

export default RecipeUpdate;
