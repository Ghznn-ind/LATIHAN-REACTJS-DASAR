import React from "react";

// 4. #08 – JSX
const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Bang Ghozi</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'Hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Bang Ghozi')
    )
}

function Latihan04_JSX() {
    return (
        <div>
            <h3>4. #08 – JSX</h3>
            <Hello />
        </div>
    )
}

export default Latihan04_JSX
