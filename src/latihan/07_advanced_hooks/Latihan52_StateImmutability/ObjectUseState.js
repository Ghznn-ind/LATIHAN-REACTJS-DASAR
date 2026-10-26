import React, { useState } from 'react'

const initState = {
    fname: 'Ghozian',
    lname: 'achmad'
}

export const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fname = 'achmad'
        // person.lname = 'suyanto'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname = 'achmad'
        newPerson.lname = 'suyanto'
        setPerson(newPerson)

    }

    console.log('ObjectUseState Render')

    return (
        <div>
            <h4>Object State Immutability</h4>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}

export default ObjectUseState
