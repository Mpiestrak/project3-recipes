import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubmitButton = styled.button`
  background: blue;
  color: white;
  border-radius: 5px;
  font-size: 3vw;
`;

class UserUpdate extends Component {
  state = {
    users: {},
    updatedUser: {
      username: "",
      password: "",
      name: "",
      myRecipes: []
    }
  };

  handleChange = event => {
    const updatedNewUser = { ...this.state.updatedUser };
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ updatedUser: updatedNewUser });
  };

//   handleSubmit = event => {
//     event.preventDefault();
//     axios.post("/api/users", this.state.updatedUser).then(res => {
//       this.props.history.push(`/users/${res.data._id}`);
//     });
//   };

  update = (event) => {
    const userId = this.props.match.params.recipeId;
    axios.patch(`/api/users/${userId}`, this.state.updatedUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        <h3>Update User Information</h3>
        <form>
          <div>
            <label htmlFor="username">User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.updatedUser.username}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={this.handleChange}
              value={this.state.updatedUser.password}
              type="password"
              name="password"
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.updatedUser.name}
              type="text"
              name="name"
            />
          </div>
          <SubmitButton onClick={() => this.update()}>Update User Information</SubmitButton>
        </form>
      </div>
    );
  }
}

export default UserUpdate;
