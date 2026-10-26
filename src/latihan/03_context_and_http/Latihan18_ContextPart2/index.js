import React from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

// 18. #39 – Context Part 2
function Latihan18_ContextPart2() {
    return (
        <div>
            <h3>18. #39 – Context Part 2</h3>
            <UserProvider value="Ghozian">
                <ComponentC />
            </UserProvider>
        </div>
    )
}

export default Latihan18_ContextPart2
