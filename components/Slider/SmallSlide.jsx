import React, { useState } from 'react'

const SmallSlide = (props) => {
    const [clickedIndex,setClickedIndex] = useState(null)

    const handleClick = (index)=>{
        setClickedIndex(index)
    }
  return (
    <div 
      onClick={()=> handleClick(props.ind)} 
      className={`${clickedIndex===props.ind? "border border-yellow-500" : "" } w-[100px] h-[100px] border border-slate-300 rounded-lg m-auto bg-white p-3`}
    >
        <img 
          className=' w-full h-full object-contain' 
          src={props.url || "https://m.media-amazon.com/images/I/71pFJ3+HxkL._AC_SL1000_.jpg"} alt="img" 
        />
    </div>
  )
}

export default SmallSlide
