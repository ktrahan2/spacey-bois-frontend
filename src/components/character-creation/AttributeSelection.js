import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFetch, postFetch } from '../fetchCalls'
import { useSelector } from 'react-redux'
import titleCase from '../utility/titleCase'

const AttributeSelection = ({ setSelectAttributes }) => {

    const [ attributeList, setAttributeList] = useState([])
    const [ totalPoints, setTotalPoints ] = useState(5)

    useEffect( () => {
        getFetch('character_skills').then(attributes => setAttributeList(attributes)).catch(error => console.error(error))
    }, [])

    const decrementTotalPoints = () => {
        if ( totalPoints > 0 ) {
            setTotalPoints(totalPoints - 1)
        }
    }

    const incrementTotalPoints = () => {
        if ( totalPoints < 5 ) {
            setTotalPoints(totalPoints + 1)
        }
    }

    const renderAttributes = () => {
        if (attributeList.length > 0) {
            return attributeList.map(attribute => {
                return (
                    <div className="attribute-card">
                        <div className="attribute">
                            <div 
                                className={ totalPoints >= 5 ? "grey-out" : "change-score"}
                                onClick={() => incrementTotalPoints()}
                            >-
                            </div>
                            <h1 id={attribute.id}>{`${titleCase(attribute.name)}: 0`}</h1>
                            <div 
                                className={ totalPoints <= 0 ? "grey-out" : "change-score"}
                                onClick={() => decrementTotalPoints()}
                            >+
                            </div>
                        </div>
                    </div>
                )
            })
        } 
    }

    const character = useSelector(state => state.myCharacter)

    const createCharacter = () => {
        let body = {character: character}
        postFetch("characters", body).then(data => console.log(data))
    }

    return (
        <>
        <div id="attribute-adjustment">
            <h1 id="total-points">{`Total Points: ${totalPoints}`}</h1>
            {renderAttributes()}
        </div>
        <div className="button-section">
            <button 
                className="link" 
                onClick={ () => setSelectAttributes(false)}
            > Character Details
            </button>
            <Link 
                className="link" 
                // to="/enter-the-nautilus"
                onClick={ () => createCharacter()}
            > Start Game
            </Link>
        </div> 
        </>
    )
}

export default AttributeSelection
