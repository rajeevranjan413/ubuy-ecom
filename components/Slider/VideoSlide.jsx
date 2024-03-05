import React from 'react'

const VideoSlide = (props) => {
  return (
    <div className='w-[400px] h-[400px] m-auto '>
      <a data-slug={`a${props.ind}`} href={props.url} data-fancybox="gallery">
    
          <video className='w-full h-full object-contain' src={props.url } controls />
    
      </a>
    </div>
  )
}

export default VideoSlide
