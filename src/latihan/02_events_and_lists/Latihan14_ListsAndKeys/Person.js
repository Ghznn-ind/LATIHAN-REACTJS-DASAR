import React from 'react'

// 14. #18 – Lists and Keys
// function Person({person, key}) {
//     return (
//         <div>
//             <h2>
//                 {key} I am {person.name}, I am {person.age} years old. I know {person.skill}
//             </h2>
//         </div>
//     )
// }

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}, I am {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person
