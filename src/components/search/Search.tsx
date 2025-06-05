import React from 'react'
import './search.css';

export default function Search() {
  return (
    <div className='flex justify-center items-center text-center'>
      <input
      type='text'
      className='search-input'
      placeholder='explore...'
      />
    </div>
  )
}
