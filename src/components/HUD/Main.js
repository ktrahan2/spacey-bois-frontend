import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Inventory from './Inventory'
import PlayerInformation from './PlayerInformation'
import Prompt from './Prompt'
import roll6SidedDie from '../utility/roll6sideddie'

const Main = () =>{

    const dispatch = useDispatch()
    const playerName = useSelector( state => state.playerName)
    const playerClass = useSelector( state => state.playerClass)
    const diceResult = useSelector( state => state.diceResult)
    const startingEquipment = useSelector( state => state.startingEquipment)

    const [ promptNumber, setPromptNumber ] = useState(1)
    const [ score, setScore ] = useState(0)
    const [ optionType, setOptionType ] = useState("")
    const [ currentHarm, setCurrentHarm ] = useState({
        levelOne: 0,
        levelTwo: 0
    })

    const sendHighScore = () => {
        fetch('http://localhost:7000/addscores', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                    username: playerName,
                    score: score
            })
        }).then(response => response.json())
        .catch(error => console.error(error))
    }
    
    const determineHarmTaken = () => {
        let roll = roll6SidedDie()
        dispatch({ type: "DICEROLL", payload: roll})

        if (roll === 6) {
        } else if (roll === 5 || roll === 4) {
            setCurrentHarm({currentHarm: {
                    ...currentHarm,  
                    levelOne: currentHarm.levelOne + 1, 
                }
            })
        } else {
            setCurrentHarm(
                {currentHarm: {
                    ...currentHarm,  
                    levelTwo: currentHarm.levelTwo + 1, 
                }}
            )
        }
        setOptionType("")
    }

    const resetDiceResult = () => {
        dispatch({type: "DICERESULT", payload: ""})
    }
        
    return (
        <div className="hud">
            <main className="player-hud">
                <div className="hud-body">
                    <section className="player">
                        <PlayerInformation
                            playerName={playerName}
                            playerClass={playerClass}
                            currentHarm={currentHarm}
                        />
                    </section>
                    <section className="prompt">
                        <Prompt 
                            promptNumber={promptNumber}
                            setPromptNumber={setPromptNumber}
                            currentScore={score}
                            setOptionType={setOptionType}
                            resetDiceResult={resetDiceResult}
                            sendHighScore={sendHighScore}
                        />
                    </section>
                    <section className="inventory">
                        <Inventory
                            startingEquipment={startingEquipment}
                        />
                    </section>
                </div>
            </main>
        </div>
    )
}
  
export default Main
