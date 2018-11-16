import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

class UserPage extends Component {
  state = {
      user:{},
    recipes: []
  };

  handleChange = (event) => {
    const brandNewRecipe = {...this.state.newRecipe}
    brandNewRecipe[event.target.name] = event.target.value
    this.setState({newRecipe: brandNewRecipe})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users/userId/recipes', this.state.newUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`)
    })
  }

  getAllRecipes = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data, recipes: res.data.recipes });
    });
  };

  componentDidMount() {
    this.getAllRecipes()
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
        <div>
        <h3>Create New Recipe</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password"/>
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} value={this.state.newUser.name} type="text" name="name"/>
          </div>
          <button type="submit">Create User</button>
        </form>
        </div>
        
      </div>
    );
  }
}

export default UserPage;
