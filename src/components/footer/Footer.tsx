'use client';

import React from 'react'
import './footer.css'
import { Copyright } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='hms-footer'>
      <p><Copyright  /> hms.ro</p>
      <span className='transform rotate-[210deg]'>|</span> 
      <p>Terms </p>
      <span className='transform rotate-[210deg]'>|</span> 
      <p>Privacy</p>
      <span className='transform rotate-[210deg]'>|</span> 
      <p>Policy</p>
    </div>
  )
}
