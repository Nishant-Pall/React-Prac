import React from 'react'

const Greet = props => {
    const { name, heroName } = props // destructuring props in functional component
    return (
        <div>
            <h1>Hello {name} my hero is {heroName}</h1>
        </div>
    )
}

export default Greet