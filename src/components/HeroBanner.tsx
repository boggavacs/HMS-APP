import React from 'react'

export default function HeroBanner() {
  return (
    <div className='min-h-80 text-center' style={{
            // height: "30vh",
            // backgroundColor: "#219EBC",
            
        }}>
             <h1 className="text-6xl font-bold  text-white">Remote job & discussion board</h1>
            <input  type="text" placeholder="search..." style={{ width: "50%", padding: "1rem", fontSize: "2xl" }} />
        </div>
  )
}
