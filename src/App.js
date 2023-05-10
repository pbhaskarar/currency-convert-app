import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'


const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/pageOne' element={<PageOne />} />
      <Route path='/pageTwo' element={<PageTwo />} />
     </Routes>
    </>
  )
}

export default App