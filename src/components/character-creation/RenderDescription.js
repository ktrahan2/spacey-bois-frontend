import React from 'react'
import titleCase from '../utility/titleCase'

const RenderDescription = ({input}) => {
    
    if ( input ) {
        return (
            <section className="detail-sections"key={input.id}>
                <h2>{titleCase(input.name) || input.title}</h2>
                <p>{input.description}</p>
            </section>
        )
    } else {
        return (
            <div></div>
        )
    } 
}

export default RenderDescription
