import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/common/header/Header'
import React from 'react'
import { RouterSwitch } from './components/router-switch/RouterSwitch'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App sans-serif">
        <Header />
        <main className="flex flex-wrap center w-75 mb4">
          <RouterSwitch />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
