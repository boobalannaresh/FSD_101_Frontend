import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

      <Route path="/" element={ <SignUp /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />


    </Routes>
    </>
  )
}

export default App
