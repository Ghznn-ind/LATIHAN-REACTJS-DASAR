import React from 'react'

// 17. #38 – Context Part 1
const UserContext = React.createContext('Ghznnas')
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

function Latihan17_ContextPart1() {
    return (
        <div>
            <h3>17. #38 – Context Part 1</h3>
            <p>
                Context menyediakan cara untuk membagikan nilai (state) seperti tema, pengguna terautentikasi, atau bahasa
                ke seluruh pohon komponen tanpa harus meneruskan props secara manual di setiap level (menghindari prop drilling).
            </p>
            <p><strong>Langkah 1:</strong> Buat Context menggunakan <code>React.createContext(defaultValue)</code>.</p>
            <p><strong>Langkah 2:</strong> Berikan Context Provider di level atas dengan <code>&lt;UserProvider value=...&gt;</code>.</p>
            <p><strong>Langkah 3:</strong> Konsumsi nilai di komponen tujuan menggunakan <code>&lt;UserConsumer&gt;</code>.</p>
            <div>
                <strong>Default Context Value:</strong>
                <UserConsumer>
                    {username => <div>Nilai default context: {username}</div>}
                </UserConsumer>
            </div>
        </div>
    )
}

export { UserContext, UserProvider, UserConsumer }
export default Latihan17_ContextPart1
