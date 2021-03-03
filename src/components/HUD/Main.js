import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Inventory from './Inventory'
import PlayerInformation from './PlayerInformation'
import Prompt from './Prompt'
import roll6SidedDie from '../utility/roll6sideddie'
import { getOneFetch } from '../fetchCalls';

const Main = () =>{

    const dispatch = useDispatch()
    const playerName = useSelector( state => state.playerName )
    const playerClass = useSelector( state => state.playerClass )
    const startingEquipment = useSelector( state => state.startingEquipment )

    const [ currentPrompt, setCurrentPrompt ] = useState({})
    //promptNumber will load from character
    const [ promptNumber, setPromptNumber ] = useState(1)
    const [ currentHarm, setCurrentHarm ] = useState({
        levelOne: 0,
        levelTwo: 0
    })
    const history = useHistory()
    const character = useSelector(state => state.myCharacter)
    
    useEffect( () => {
        if ( promptNumber <= 20 ) {
            getOneFetch("prompts", promptNumber)
            .then( prompt => setCurrentPrompt( prompt ) )
            .catch( error => console.error(error) )
        } else {
            history.push('/credits')
        }
    }, [ promptNumber ])

    // this will be for when i can add dice rolls to certain types of options, i.e attacks
    // useEffect( () => {
    //     if ( currentPrompt.optionType === "attack" ) {
    //         determineHarmTaken()
    //     }
    // }, [ currentPrompt.optionType ])
    
    const determineHarmTaken = () => {
        let roll = roll6SidedDie()
        dispatch({ type: "DICERESULT", payload: roll})

        if ( roll === 6 ) {
        } else if ( roll === 5 || roll === 4 ) {
            setCurrentHarm({ currentHarm: {
                    ...currentHarm,  
                    levelOne: currentHarm.levelOne + 1, 
                }
            })
        } else {
            setCurrentHarm(
                { currentHarm: {
                    ...currentHarm,  
                    levelTwo: currentHarm.levelTwo + 1, 
                }}
            )
        }
        setCurrentPrompt({ optionType: "" })
    }

    const resetDiceResult = () => {
        dispatch({ type: "DICERESULT", payload: "" })
    }
        
    return (
        <div className="hud">
            <main className="player-hud">
                <div className="hud-body">
                    <section className="player">
                        <PlayerInformation
                            playerName={ playerName }
                            playerClass={ playerClass }
                            currentHarm={ currentHarm }
                        />
                    </section>
                    <section className="prompt">
                        <Prompt 
                            playerName={ playerName }
                            currentPrompt={ currentPrompt } 
                            setPromptNumber={ setPromptNumber }
                            resetDiceResult={ resetDiceResult }
                        />
                    </section>
                    <section className="inventory">
                        <Inventory
                            startingEquipment={ startingEquipment }
                        />
                    </section>
                </div>
            </main>
        </div>
    )
}
  
export default Main
