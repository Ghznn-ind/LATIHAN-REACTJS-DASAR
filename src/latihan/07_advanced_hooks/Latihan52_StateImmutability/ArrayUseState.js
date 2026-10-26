import React, { useState } from 'react'

const initState = ['Ghozi', 'Ans']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('Yanto')
        // persons.push('Kun')
        // setPersons(persons)
        
        const newPersons = [...persons]
        newPersons.push('Yanto')
        newPersons.push('Kun')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render')

    return (
        <div>
            <h4>Array State Immutability</h4>
            <button onClick={handleClick}>Add Name</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ArrayUseState
