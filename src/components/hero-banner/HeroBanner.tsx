import React from 'react'
import './hero-banner.css';
import Search from '../search/Search';
export default function HeroBanner() {
  return (
    <div className='hero-banner py-8 px-5 sm:px-0'>
      <Search />
      <h1 className='text-3xl sm:text-4xl font-semibold text-primary py-5'>Find your dream gig, <br />drop job leads, and help out friends and fellow professionals.</h1>
      <p className='text-2xl sm:text-3xl sm:px-[19rem] text-secondary pb-5'>Unlock your next remote opportunity and connect with driven professionals on our collaborative discussion board.</p>
      <button className='hero-banner-button primary-btn'>Register</button>
    </div>
  )
}
