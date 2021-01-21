import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    // Keys give elements a stable identity, we should include
    // keys when creating lists of elements
    // Keys help React identify which items have changed, are added, or removed,
    // This improves efficiency
    const personList = persons.map(person =>
        <Person key={person.id} person={person} />
    )
    // map has two arguments, name and index.
    // index can be used as key if we don't have any unique properties in names array
    // although keys can cause UI issues and react might no render data correctly
    // We should use index as key when:
    // Items in list do not have a unique id
    // List is static and wont change
    // List is never reordered or filtered
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
