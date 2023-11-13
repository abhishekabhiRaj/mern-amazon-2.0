import React, { useEffect } from 'react'
import Register from './pages/Register'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector((state)=>state.user.value);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user == null){
      // go login
      navigate('/login')
    }else{
      navigate('/')
    }
  },[user])
  return (
    <Routes>
        {
          user == null ?
          <>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          </>
          : <Route path='/' element={<Home/>}/>
        }
       
    </Routes>
  )
}

export default App