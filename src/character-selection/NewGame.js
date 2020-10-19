import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Classes from "./config.json"

export default class NewGame extends Component {

    state = {
        inventory: [],
        selectedClass: "",
        playername: "",
    }

    setPlayerName = (event) => {
        this.setState({
            playername: event.target.value
        })
    }

    renderClassDescription = () => {
        return Classes.classes.map(character => {
            if (character.classTitle === this.state.selectedClass) {
                {return (
                <section key={character.id}>
                    <div>
                        <h2>{character.classTitle}</h2>
                        <p>{character.description}</p>
                        {/* <div className="special-abilites">
                            <h3>Special Abilities</h3>
                            <h4>{Object.keys(character.specialAbilities[0])}</h4>
                            <p>{Object.values(character.specialAbilities[0])}</p>
                            <h4>{Object.keys(character.specialAbilities[1])}</h4>
                            <p>{Object.values(character.specialAbilities[1])}</p>
                            <h4>{Object.keys(character.specialAbilities[2])}</h4>
                            <p>{Object.values(character.specialAbilities[2])}</p>
                        </div> */}
                        <h3>Starting Equipment</h3>
                        <ul>
                            <li>blaster</li>
                            <li>tricksy shit</li>
                            <li>other stuff</li>
                        </ul> 
                    </div>
                </section>)}
                
            }
        })
    }

    handleSubmit = (event) => {
        console.log(event.target)
        event.preventDefault()
        //send this to the first component questionaire
    }

    selectedClass = (event) => {
        this.setState({
            selectedClass: event.target.value
        })
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/">Home Menu</Link>
                </header>
                <main>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.setPlayerName} name="playername" value={this.state.playername}></input>
                        <select onChange={this.selectedClass} value={this.state.class}>
                            <option value="Mystic">Msytic</option>
                            <option value="Pilot">Pilot</option>
                            <option value="Scoundrel">Scoundrel</option>
                            <option value="Mechanic">Mechanic</option>
                            <option value="Muscle">Muscle</option>
                            <option value="Speaker">Speaker</option>
                            <option value="Stitch">Stitch</option>
                        </select>
                        <input type="submit" value="Start Game"></input>
                    </form>
                    <div>
                        {this.renderClassDescription()}
                    </div>
                </main>
            </div>
        )
    }
}
