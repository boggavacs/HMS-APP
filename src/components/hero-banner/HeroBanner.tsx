import React from 'react'
import './hero-banner.css';
import Search from '../search/Search';
export default function HeroBanner() {
  return (
    <div className='hero-banner'>
      <Search />
      <h1>Find your dream gig, <br />drop job leads, and help out friends and fellow professionals.</h1>
      <p>Unlock your next remote opportunity and connect with driven professionals on our collaborative discussion board.</p>
      <button className=''>Register</button> 
      {/* <h1 className='text-3xl sm:text-4xl max-w-1xl font-semibold '>Find your dream gig, <br />drop job leads, and help out friends and fellow professionals.</h1>
      <p className='text-2xl sm:text-3xl max-w-2xl '>Unlock your next remote opportunity and connect with driven professionals on our collaborative discussion board.</p>
      <button className='hero-banner-button primary-btn'>Register</button>  */}
    </div>
  )
}
