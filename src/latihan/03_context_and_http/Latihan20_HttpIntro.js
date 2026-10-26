import React from 'react'

// 20. #41 – HTTP and React
function Latihan20_HttpIntro() {
    return (
        <div>
            <h3>20. #41 – HTTP and React</h3>
            <p>
                React adalah library UI dan tidak memiliki modul HTTP bawaan.
                Untuk berinteraksi dengan API eksternal (backend / REST API), kita dapat menggunakan library pihak ketiga seperti <strong>Axios</strong> atau Fetch API native browser.
            </p>
            <ul>
                <li><strong>GET Request:</strong> Mengambil data dari server (misal: JSONPlaceholder).</li>
                <li><strong>POST Request:</strong> Mengirim data baru ke server.</li>
                <li>Biasanya pemanggilan HTTP GET pada Class Component diletakkan di dalam lifecycle <code>componentDidMount()</code>.</li>
            </ul>
        </div>
    )
}

export default Latihan20_HttpIntro
