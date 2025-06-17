'use client'
// compare push
import React, { useState } from 'react'
import './job-listing.css'

export default function JobListing() {
   const [numberOfListing] = useState<number[]>([1, 2, 3, 4, 5, 6, ]); 
  return (
    numberOfListing && numberOfListing.map((_, index: number) => {
        return (
            <div className='job-listing' key={index}>
                <div className='job-listing-brand-logo'>logo</div>
                <div className=''>
                    <h3>Sr. Software Engineer</h3>
                    <p>10+ years of  experience React.js, Angular, Node.js</p>
                    <div className='more-options'>
                        <p className='list-id'>#127654</p>
                        <p>...</p>
                    </div>
                </div>
            </div>
        );        
    })
    
  )
}
