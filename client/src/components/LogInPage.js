import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class LogInPage extends Component {
  state = {
    users: [],
    newUser: {
      username: '',
      password: '',
      name: '',
      myRecipes: []
    }
  }

  handleChange = (event) => {
    const updatedNewUser = {...this.state.newUser}
    updatedNewUser[event.target.name] = event.target.value
    this.setState({newUser: updatedNewUser})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users', this.state.newUser).then(res => {
      this.props.history.push(`/users/${res.data._id}`)
    })
    
  }

  getAllUsers = () => {
    axios.get('/api/users').then((res) => {
      this.setState({users: res.data})
    })
  }

  componentDidMount(){
    this.getAllUsers()
  }

  render() {
    return (
      <div>
        <h1>Log-In To See Your Recipes</h1>
        <h3>All Users: </h3>
        { this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.name}</Link>
          </div>
        )) }

        <h3>Sign-Up</h3>
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
    );
  }
}

export default LogInPage;