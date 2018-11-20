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
    user: {}
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

  handleChange = event => {
      console.log(event.target.name)
      console.log(event.target.value)
    const updatedNewUser = { ...this.state.user };
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ user: updatedNewUser });
  };

  update = () => {
    const userId = this.props.match.params.userId;
    const updatedUser = this.state.user
    axios.patch(`/api/users/${userId}`, updatedUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        <h3>Update User Information</h3>
        <form onSubmit={this.update}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.username}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.password}
              type="password"
              name="password"
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.user.name}
              type="text"
              name="name"
            />
          </div>
          <SubmitButton type='submit'>Update User Information</SubmitButton>
        </form>
      </div>
    );
  }
}

export default UserUpdate;
