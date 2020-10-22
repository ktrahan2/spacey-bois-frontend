import React, { Component } from 'react'

export default class EnterTheNautilus extends Component {
    
    componentDidMount() {
        setTimeout(() => {
          this.props.history.push('/hud')
        }, 4000) 
        }
    
        render() {
        return <img id="nautilus-loading-screen"src="https://i.imgur.com/xvewX93.jpg"/>
    
        }
    
}
