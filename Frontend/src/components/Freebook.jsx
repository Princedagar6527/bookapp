import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../list.json'
import Slider from "react-slick"
import Cards from "./cards";


export default function Freebook() {
     const listdata = list.filter((data) => data.categories === "free");
      var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2xl container ml-11 mt-20 md:px-20 px-4 '>
        <div>
        <h1 className='text-xl font-bold my-2'>Free Offered Books</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit at omnis nihil reprehenderit, minima perspiciatis ipsum iusto in. Voluptates a aspernatur doloribus! Commodi velit ab at. Quisquam quidem in similique.</p>
        </div>
         <div className="slider-container">
      <Slider {...settings}>
       {listdata.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  );
}
