import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ButtonPage from './components/ButtonPage'
import Detailspage from './components/Detailspage'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ButtonPage />} />
        <Route path='/details' element={<Detailspage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App