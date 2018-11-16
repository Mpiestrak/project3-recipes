import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 75px;
font-family: Garamond;
`

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 5vw;
`



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
                <Title>
                    Meal Helper
                </Title>
                <Content>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vero at laudantium odio quidem quaerat, incidunt non quasi officiis sed. Exercitationem, nisi similique. Esse vel aperiam, animi vero aut placeat?</p>
                </Content>
            </div>
        );
    }
}

export default HomePage;