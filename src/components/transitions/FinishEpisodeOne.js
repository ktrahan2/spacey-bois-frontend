import React, { Component } from 'react'

export default class FinishEpisodeOne extends Component {
    
    componentDidMount() {
        setTimeout(() => {
          this.props.history.push('/')
        }, 6500) 
        }
    
    render() {
    return (
        <div className="credits">
            <h1>Exit The Nautilus</h1>
            <h2>If you enjoyed this game, checkout Scum and Villainy by Evil Productions.</h2>
        </div>
    )

    }
}
