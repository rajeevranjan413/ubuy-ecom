import React, { useState } from 'react'


const SmallSlide = (props) => {
  const handleClick = (index)=>{
    props.setClickedIndex(index)
}
  return (
    <div 
      onClick={()=>handleClick(props.ind)}
      className={`w-[100px] h-[100px] border border-slate-300 rounded-lg p-4 m-auto block ${props.clickedIndex===props.ind? "border border-yellow-500" : ""}`}
    >
        <img
          className=' w-full h-full object-contain' 
          src={props.url || "https://m.media-amazon.com/images/I/71pFJ3+HxkL._AC_SL1000_.jpg"} alt="img" 
          />
      
    </div>
  )
}

export default SmallSlide
