import React from 'react'
import Home from './home/Home.jsx'
import Course from './course/Course.jsx'
import{ Routes,Route } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import  { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
    </Routes>
    <Toaster />
    </div>
  
    </>
  )
}