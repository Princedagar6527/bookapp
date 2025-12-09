import React from 'react'

export default function Cards({item}) {
  return (
    <>
    <div className='p-3 my-4 mx-2'>
    <div className="card bg-base-100 w-90 my-3 p-3 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:border dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title }
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <div className="badge  badge-outline bg-slate-300">${item.price}</div>
      <div className="badge badge-outline bg-slate-300  hover:bg-pink-300">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
