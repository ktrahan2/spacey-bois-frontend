import React, { Component } from 'react'

export default class Warp extends Component {

    componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/newgame')
      }, 3000) 
    }

    render() {
      return <img id="warp-transition"src="https://media1.tenor.com/images/ee8a70f6675d434d94396b174ba057a3/tenor.gif"alt="gif that looks like hyperspace"/>
    }
}

