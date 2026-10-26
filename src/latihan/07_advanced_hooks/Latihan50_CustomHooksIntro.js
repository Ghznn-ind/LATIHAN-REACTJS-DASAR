import React from 'react'

// 50. #73 – Custom Hooks
function Latihan50_CustomHooksIntro() {
    return (
        <div>
            <h3>50. #73 – Custom Hooks</h3>
            <p>
                Custom Hook adalah fungsi JavaScript yang namanya diawali dengan <code>use</code> (misal: <code>useInput</code>, <code>useDocumentTitle</code>) dan dapat memanggil Hook lain di dalamnya.
            </p>
            <p>
                Tujuan utama Custom Hook adalah untuk mengekstrak logika stateful (stateful logic) dari komponen sehingga dapat digunakan kembali oleh banyak komponen lain tanpa duplikasi kode.
            </p>
        </div>
    )
}

export default Latihan50_CustomHooksIntro
