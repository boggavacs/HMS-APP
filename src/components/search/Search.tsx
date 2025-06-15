import React from 'react'
import './search.css';
import {input} from '../common/CommonComponents';
// import { Button } from '@heroui/react';
// import { Input } from '@heroui/input';

export default function Search() {
  return (
    <div className=''>
      <input
      type='text'
      className='search-input'
      placeholder='explore...'
      />
    </div>
  )
}
