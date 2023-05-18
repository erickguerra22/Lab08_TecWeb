/* eslint-disable import/no-unresolved */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Page />
      </Router>
    </div>
  )
}

export default App
