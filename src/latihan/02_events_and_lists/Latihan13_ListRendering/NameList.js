import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Ghozi',
            age: 17,
            skill: 'Laravel'
        },
        {
            id: 2,
            name: 'Zilong',
            age: 19,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Hilda',
            age: 18,
            skill: 'PHP'
        },
    ]

    // 13. #17 – List Rendering
    const personList = persons.map(person => <Person person={person} />)

    return (
        <div>
            <div>{personList}</div>
        </div>
    ) 
}

export default NameList
