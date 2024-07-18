import React from 'react';
import List from '../../public/list.json'
import Cards from '../Components/Cards';

const Courses = () => {
  return (
    <div className='px-3 md:px-12 text-center'>
        <div>
            <h1 className='text-2xl pt-24 md:text-3xl font-semibold'>We're delighted to have you <span className='text-pink-500'>Here! ")</span> </h1>
            <p className='mt-8 md:mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deleniti suscipit mollitia esse, voluptas eaque quos modi placeat tenetur inventore assumenda vitae id commodi ducimus explicabo ipsa debitis tempore voluptatibus quia dolorum, autem eos ab quae! Totam architecto neque, quas, dolor deserunt rem reprehenderit facilis aliquam, modi veniam laborum? Fugiat excepturi sed exercitationem unde eius consectetur cumque vitae dolore eaque?   
            </p>
            <button className='bg-secondary px-4 py-2 rounded-full text-xl text-white font-semibold mt-8' >Back</button>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
            {
                List.map((item)=> <Cards item={item} key={item.id} /> )
            }
        </div>
    </div>
  )
}

export default Courses