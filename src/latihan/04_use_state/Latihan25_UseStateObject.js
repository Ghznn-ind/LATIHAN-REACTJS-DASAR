import React, { useState } from 'react'

// 25. #47 – useState with object
function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input 
                type='text'
                placeholder='First Name'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input 
                type='text'
                placeholder='Last Name'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

function Latihan25_UseStateObject() {
    return (
        <div>
            <h3>25. #47 – useState with object</h3>
            <HookCounterThree />
        </div>
    )
}

export default Latihan25_UseStateObject
