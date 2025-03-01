import React from 'react'
import Book from '../assets/Book.jpg'

const Banner = () => {
    return (
        <div className='w-full px-5 mt-16 md:mt-16 md:px-12 flex items-center flex-col md:gap-4 md:flex-row justify-center '>
            <div className='w-full md:w-1/2 order-2 md:order-1 pr-4'>
                <h1 className='font-sans font-bold text-3xl md:text-5xl'>
                    Hello, welcomes here to learn something
                    <span className='text-pink-400'> new everyday!!!</span>
                </h1>
                <p className=' font-semibold text-md md:text-lg mt-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse nobis volupt ates necessitatibus quasi quod optio reprehenderit ea repudiandae distinctio! Natus tenetur facere dolores voluptatum
                </p>
                <div className='mt-8 md:mt-12'>

                
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                </div>
                <button className="btn mt-6 btn-secondary">Secondary</button>
            </div>
            <div className='w-full md:w-1/2 flex justify-center order-1 items-centerm-0'>
                <img src={Book} alt="book" className='w-[90%] h-[85%] mt-4' />
            </div>
        </div>
    )
}

export default Banner