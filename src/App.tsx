import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/common/header/header'
import React from 'react'
import { RouterSwitch } from './components/router-switch/router-switch'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App sans-serif">
        <Header />
        <main className="flex flex-wrap center w-75 mb4 mt5 pt4">
          <RouterSwitch />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
