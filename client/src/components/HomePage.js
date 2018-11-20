import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import img from "../img/HomePageBG.jpg";
import "../css/HomePage.css";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  font-family: Garamond;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0vw;
  border-radius: 10px;
`;

class HomePage extends Component {
  // state = {
  //     user: {},
  //     recipes: []
  // }

  //     componentDidMount() {
  //         const userId = this.props.match.params.userId
  //         axios.get(`/api/users/${userId}/recipes`).then(res => {
  //             this.setState({user: res.data, recipes: res.data.recipes})
  //         })
  //     }

  render() {
    return (
      <div>
        <Title>Recipe Box</Title>
        <div className='body'>
          <h3 className='subtitle'>Recipe's from the box:</h3>
          <Content>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              vero at laudantium odio quidem quaerat, incidunt non quasi
              officiis sed. Exercitationem, nisi similique. Esse vel aperiam,
              animi vero aut placeat?
            </p>
          </Content>
        </div>
      </div>
    );
  }
}

export default HomePage;
