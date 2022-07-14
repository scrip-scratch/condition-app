import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Enter from './pages/Enter'
import Main from './pages/Main'
import Reg from './pages/Reg'


function AppRouter() {
  return (
    <Routes>
        <Route exact path='/main' element={<Main/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/enter' element={<Enter />} />
        <Route exact path='/reg' element={<Reg />} />
        <Route exact path='*' element={<Main/>} />
    </Routes>
  )
}

export default AppRouter