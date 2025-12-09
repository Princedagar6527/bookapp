import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import list from '../list.json'
import Cards from '../components/cards.jsx'
import { Link } from 'react-router-dom'
export default function Books() {
   const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl '
      >We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
      <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, error. Non delectus fugit inventore quod ab, odit iste voluptate libero, cupiditate accusantium vel ipsum eaque maiores soluta odio voluptas illo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, assumenda doloremque praesentium sint ab quidem aliquid delectus facere doloribus beatae nisi molestiae ipsa dolores accusamus dolorum odit pariatur quod ut.</p>
      <Link to="/">
      <button className='btn rounded-sm px-4 py-2 mt-5 bg-pink-600 hover:bg-pink-400 duration-300 text-white'>Back</button>
      </Link>
      
    </div>
    <div className='grid grid-col-1 md:grid-cols-4  '>
    {book.map((item) => {
  return <Cards item={item} key={item.id} />;
})}
    </div>
   </div>
   </>
  )
}

