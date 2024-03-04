import React from 'react'

const SmallSlide = (props) => {
  return (
    <div className='w-[100px] h-[100px] border border-black rounded-lg m-auto bg-white p-3'>
      <img className=' w-full h-full object-contain' src={props.url || "https://m.media-amazon.com/images/I/71pFJ3+HxkL._AC_SL1000_.jpg"} alt="img" />
    </div>
  )
}

export default SmallSlide
