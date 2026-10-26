import React from 'react'

// 15. #19 – Index as Key Anti-pattern
function Latihan15_IndexAsKey() {
    const names = ['Ghozi', 'Zilong', 'Hilda', 'Akai']

    // 15. #19 – Index as Key Anti-pattern
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return (
        <div>
            <h3>15. #19 – Index as Key Anti-pattern</h3>
            <div>{nameList}</div>
        </div>
    ) 
}

export default Latihan15_IndexAsKey
