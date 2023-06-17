import React from 'react'
import dings1 from "../img/amazon1.png"
import dings2 from "../img/bc1.png"

function DownloadAds() {
  const downloadImgStyle='border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]';
  return (
    <div className='download'>
        <div className='download_images flex' >
            <img src={require("../img/amazon1.png")} alt="" className={dings1+ ` mr-[1rem]`} />
            <img src={require("../img/bc1.png")} alt="" className={dings2 + ``} />
        </div>
    </div>
  )
}

export default DownloadAds