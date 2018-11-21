import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RecipeUpdate from "./RecipeUpdate";
import "../css/RecipePage.css";

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: black 2px solid;
  border-radius: 5px;
  font-size: 15px;
`;

class RecipePage extends Component {
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

  delete = () => {
    const recipeId = this.props.match.params.recipeId;
    axios.delete(`/api/recipes/${recipeId}`).then(() => {
      this.props.history.push(`/login`);
    });
  };

  render() {
    return (
      <div>
        <div className="recipebody">
              <h2>{this.state.recipe.name}</h2>
          <div className='recipeContainer'>
            <div className='directions'>
              <div>
                <h3>Main Ingredient:</h3> {this.state.recipe.mainIngredient}
              </div>
              <div>
                <h3>Total Time Needed:</h3> {this.state.recipe.timeNeeded}
              </div>
              <div>
                <h3>Ingredients:</h3>{" "}
                {this.state.recipe.ingredients.map(ingredient => (
                  <div key={ingredient}>
                    <ul>
                      <li>{ingredient}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                <h3>Directions:</h3> {this.state.recipe.preparation}
              </div>
              <div>
                <DeleteButton onClick={() => this.delete()}>
                  Delete Recipe
                </DeleteButton>
              </div>
            </div>

            <div>
              <RecipeUpdate {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipePage;
