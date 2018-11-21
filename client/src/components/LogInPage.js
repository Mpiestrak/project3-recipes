import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../css/LoginPage.css";

const SubmitButton = styled.button`
  background: blue;
  color: white;
  border-radius: 5px;
  font-size: 15px;
`;

class LogInPage extends Component {
  state = {
    users: [],
    newUser: {
      username: "",
      password: "",
      name: "",
      myRecipes: []
    }
  };

  handleChange = event => {
    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/users", this.state.newUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`);
    });
  };

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
    });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div className="loginbody">
        <h1 className='loginTitle'>Log-In To See Your Recipes</h1>

        <div className='usersContainer'>
          <div className="users">
            <h2>All Users: </h2>
            <div>
              {this.state.users.map(user => (
                <div key={user._id}>
                  <Link className="linkstyle" to={`/users/${user._id}`}>
                    {user.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="signup">
            <h2>Sign-Up:</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label className="labels" htmlFor="username">
                  User Name:{" "}
                </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.username}
                  type="text"
                  name="username"
                />
              </div>
              <div>
                <label className="labels" htmlFor="password">
                  Password:{" "}
                </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.newUser.password}
                  type="password"
                  name="password"
                />
                <div>
                  <label className="labels" htmlFor="name">
                    Name:{" "}
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.newUser.name}
                    type="text"
                    name="name"
                  />
                </div>
              </div>
              <SubmitButton type="submit">Create User</SubmitButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInPage;
