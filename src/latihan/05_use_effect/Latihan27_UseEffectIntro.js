import React from 'react'

// 27. #49 – useEffect Hook
function Latihan27_UseEffectIntro() {
    return (
        <div>
            <h3>27. #49 – useEffect Hook</h3>
            <p>
                Effect Hook (<code>useEffect</code>) memungkinkan kita melakukan efek samping (side effects) di functional component.
            </p>
            <p>
                Side effects meliputi: memuat data dari API (fetching data), berlangganan event listener, memanipulasi DOM secara langsung, timer/interval, dan logging.
            </p>
            <p>
                <code>useEffect</code> menggantikan kombinasi lifecycle Class Component:
                <code>componentDidMount</code>, <code>componentDidUpdate</code>, dan <code>componentWillUnmount</code>.
            </p>
        </div>
    )
}

export default Latihan27_UseEffectIntro
