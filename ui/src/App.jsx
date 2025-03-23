import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Hero from './pages/Hero';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
<Route  path='/' element={<Hero/>}/>
<Route  path='/login' element={<Login/>}/>
<Route  path='/register' element={<Register/>}/>
</Routes>
     
    </>
  )
}

export default App
