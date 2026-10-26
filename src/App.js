import React from 'react'
import './App.css'
import { DAFTAR_LATIHAN } from './latihan'

function App() {
  return (
    <div className="app-wrapper">
      <main className="main-container">
        <div className="exercises-grid">
          {DAFTAR_LATIHAN.map(item => {
            const ExerciseComponent = item.component
            return (
              <section
                key={item.id}
                id={`sekat-latihan-${item.id}`}
                className="exercise-sekat"
              >
                <div className="sekat-header">
                  <div className="sekat-badge-title">
                    <span className="sekat-number">No. {item.id}</span>
                    <h2 className="sekat-title" title={item.topic}>
                      {item.topic}
                    </h2>
                  </div>
                  <span className="sekat-category">{item.category}</span>
                </div>

                <div className="sekat-body">
                  <ExerciseComponent />
                </div>
              </section>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App