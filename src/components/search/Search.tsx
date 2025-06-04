import React from 'react'
import './search.css';

export default function Search() {
  return (
    <div className='bg-[#E3F2F9] max-w-2xl mx-auto flex justify-center items-center text-center h-16 border-1 border-primary'>
      <input
      type='text'
      className='search-input bg-transparent border-none focus:outline-none focus-visible:outline-none'
      placeholder='explore...'
      />
    </div>
  )
}
