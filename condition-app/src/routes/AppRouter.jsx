import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Main from '../pages/Main'
import Auth from '../pages/Auth'
// import { Context } from '../index'
// import { useContext } from 'react'

function AppRouter() {

  return (
    <Routes>
        <Route exact path='/main' element={<Main/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/registration' element={<Auth />} />
        <Route exact path='/login' element={<Auth />} />
        <Route exact path='*' element={<Main/>} />
    </Routes>
  )
}

export default AppRouter