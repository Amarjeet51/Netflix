import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute flex justify-between items-center w-full z-50 p-4'>
        <Link to ='/'>
            <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>netflix</h1>
        </Link>

        <Link to = '/login'>
           <button className='captilize pr-4'>login</button>
        </Link>

        <Link to = '/signup'>
           <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>signup</button>
        </Link>
    </div>
  )
}

export default Navbar