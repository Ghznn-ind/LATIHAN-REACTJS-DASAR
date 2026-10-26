import React from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

// 19. #40 – Context Part 3
function Latihan19_ContextPart3() {
    return (
        <div>
            <h3>19. #40 – Context Part 3</h3>
            <UserProvider value="Ghozian">
                <ComponentC />
            </UserProvider>
        </div>
    )
}

export default Latihan19_ContextPart3
