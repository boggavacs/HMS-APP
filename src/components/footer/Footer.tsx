'use client';

import React from 'react'
import "./footer.css";
import { Copyright } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='hms-footer'>
      <p><Copyright  /> hms.ro</p>
      <span>|</span> 
      <p>Terms </p>
      <span>|</span> 
      <p>Privacy</p>
      <span>|</span> 
      <p>Policy</p>
    </div>
  )
}
