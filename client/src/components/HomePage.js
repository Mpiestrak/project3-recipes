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
  margin: 0 5vw;
  border: 3px black solid;
`;
const Body = styled.div`
  background-image: url(${img});
  background-attachment: fixed;
  background-size: "cover";
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
      <Body>
        <div>
          <Title>Recipe Box</Title>
          <h3>Recipe's from the box:</h3>
          <Content>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              vero at laudantium odio quidem quaerat, incidunt non quasi
              officiis sed. Exercitationem, nisi similique. Esse vel aperiam,
              animi vero aut placeat?
            </p>
          </Content>
        </div>
      </Body>
    );
  }
}

export default HomePage;
