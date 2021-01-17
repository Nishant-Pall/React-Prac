import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h2>{person.name}, I am {person.age} years old, and my skill is {person.skill}</h2>
        </div>
    )
}

export default Person
