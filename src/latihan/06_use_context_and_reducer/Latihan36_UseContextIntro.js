import React from 'react'

// 36. #58 – useContext Hook Part 1
function Latihan36_UseContextIntro() {
    return (
        <div>
            <h3>36. #58 – useContext Hook Part 1</h3>
            <p>
                Pada React versi Class Component, mengonsumsi beberapa Context bertingkat (nested context) membutuhkan penulisan JSX yang rumit dengan Consumer chaining (render props pattern).
            </p>
            <p>
                Hook <code>useContext</code> menyederhanakan proses ini pada functional component sehingga kita bisa langsung membaca nilai context hanya dengan:
            </p>
            <pre>
                <code>const value = useContext(MyContext)</code>
            </pre>
        </div>
    )
}

export default Latihan36_UseContextIntro
