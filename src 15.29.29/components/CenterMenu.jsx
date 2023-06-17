import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>ABOUT THE EAR MOVIE</li>
            <li className={liStyle}>PRELISTEN THE SONGS</li>
            <li className={liStyle}>RELEASE SHOP</li>
            <li className={liStyle}>MERCHANDISE</li>
        </ul>
    </div>
  )
}

export default CenterMenu