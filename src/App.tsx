import { useState } from 'react'
import Home from './pages/Home'
import { Routes } from './routes'

import { GlobalStyle } from './styles/globalStyle'

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
