import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import MovieFilter from './components/MovieFilter'
import TodoApp from './components/TodoApp'
import WeatherApi from './components/WeatherApi'
import Navbar from './Navbar'


const App = () => {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/pageOne' element={<PageOne />} />
      <Route path='/pageTwo' element={<PageTwo />} />
      <Route path='/todoApp' element={<TodoApp />} />
      <Route path='/weatherApi' element={<WeatherApi />} />
      <Route path='/movieFilter' element={<MovieFilter />} />
     </Routes>
    </>
  )
}

export default App