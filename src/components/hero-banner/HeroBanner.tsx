import React from 'react'
import './hero-banner.css';
import Search from '../search/Search';
import { button } from '../common/CommonComponents';

export default function HeroBanner() {
  return (
    <div className='hero-banner'>
      <Search />
      <h1>Find your dream gig, <br />drop job leads, and help out friends and fellow professionals.</h1>
      <h4>Unlock your next remote opportunity and connect with driven professionals on our collaborative discussion board.</h4>
      <div>
      <button className='btn-primary'>Register</button>
      <button className='btn-primary'>Sign In</button>
      </div>
    </div>
  )
}
