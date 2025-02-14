import React from 'react'

const Cards = ({ item }) => {
    return (
        <div className='mt-4 mb-5 p-3'>
            <div className="card bg-base-100 w-full md:w-92 shadow-lg dark:bg-slate-600 dark:text-white dark:border hover:scale-105 transform-gpu duration-200 ">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">$ {item.price}</div>
                        <div className="cursor-pointer px-2 py-1 border-[2px] rounded-full hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards