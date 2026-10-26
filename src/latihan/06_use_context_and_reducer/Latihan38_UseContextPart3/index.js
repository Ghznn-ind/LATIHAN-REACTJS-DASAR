import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// 38. #60 – useContext Hook Part 3
function Latihan38_UseContextPart3() {
    return (
        <div>
            <h3>38. #60 – useContext Hook Part 3</h3>
            <UserContext.Provider value={'Ghozian'}>
                <ChannelContext.Provider value={'ghznnas'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Latihan38_UseContextPart3
