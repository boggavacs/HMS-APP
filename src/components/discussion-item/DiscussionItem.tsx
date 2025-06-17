'use client'

import React from 'react'
import { FiberNew, Visibility } from '@mui/icons-material';
import './discussionitem.css';


export default function DiscussionItem() {

  // Placeholder - replace with business logic  
  const [items] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    items && items.map((item, index) =>
      <div key={index}>
        <div className='discussion-item'>
          <FiberNew className='fiber-new-icon' />
          <p>Lorem ipsum dolor sit, amet cons adipisicing elit. </p>
        </div>
        <div className='discussion-options'>
          <Visibility className='discussion-item-views-icon' />100k
          <span className='discussion-item-date'>12/12/2023</span>
          <span className='discussion-item-author'>...</span>
        </div>
      </div>
    )
  )
}
