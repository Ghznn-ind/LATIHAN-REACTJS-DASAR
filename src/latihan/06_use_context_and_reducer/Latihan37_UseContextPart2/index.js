import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// 37. #59 – useContext Hook Part 2
function Latihan37_UseContextPart2() {
    return (
        <div>
            <h3>37. #59 – useContext Hook Part 2</h3>
            <UserContext.Provider value={'Ghozian'}>
                <ChannelContext.Provider value={'ghznnas'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Latihan37_UseContextPart2
