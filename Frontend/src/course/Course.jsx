import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Books from '../components/books.jsx'
export default function Course() {
  return (
   <>
      <Navbar/>
  <div className='min-h-screen'>
    <Books/>
  </div>
   <Footer/>
 
   </>
  )
}
