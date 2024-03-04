import React from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  idle: false,
  dragToClose: false,
  contentClick: () =>
    window.matchMedia('(max-width: 578px), (max-height: 578px)').matches
      ? 'toggleMax'
      : 'toggleCover',

  animated: false,
  showClass: false,
  hideClass: false,

  Hash: false,
  Thumbs: false,

  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },

  Carousel: {
    transition: 'fadeFast',
    preload: 3,
  },

  Images: {
    zoom:true,
    Panzoom: {
      maxScale: 2,
    },
  },
});




const BigSlide = (props) => {
  console.log(props.key)
  return (
 
    <div className='w-[400px] h-[400px] m-auto '>
      <a href={props.url} data-fancybox="gallery">
        <img className='w-full h-full object-contain' src={props.url } />
      </a>
    </div>
   
  )
}

export default BigSlide
