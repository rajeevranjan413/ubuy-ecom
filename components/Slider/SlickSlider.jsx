"use client"
import React, { useState, useEffect, useRef } from "react";


import Slider from "react-slick";
import BigSlide from "./BigSlide";
import SmallSlide from "./SmallSlide";
import VideoSlide from "./VideoSlide"

import { IoIosArrowDropright,IoIosArrowDropleft } from "react-icons/io";
import { FaHeart, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let video=[{
    thumbUrl: "https://m.media-amazon.com/images/I/51eJbFQWe4L._AC_SL1000_.jpg",
    videoUrl : "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e1f07826-22ab-444d-b7b5-9458b28e8b5b/default.jobtemplate.mp4.480.mp4"
}]

let url=["https://m.media-amazon.com/images/I/515B5CoDdWL._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/51eJbFQWe4L._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61IDhrk0deL._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61BEhzZ8l8L._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61piD8VG03L._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/71pFJ3+HxkL._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/51eJbFQWe4L._AC_SL1000_.jpg", ...video]


function SlickSlider() {
    const [clickedIndex,setClickedIndex] = useState(null)

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    

    
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);


    const ArrowLeft = (props) => (
        <button style={{position:"absolute", right:"-5px", bottom:"40%", fontSize:"20px", backgroundColor:"white", color:"slategray", borderRadius:"20px", padding:'2px'}}  onClick={props.onClick}>
          <IoIosArrowDropright />

        </button>
    );
      
    
    const ArrowRight = (props) => (
        <button style={{position:"absolute", left:"-3px", bottom:"40%", fontSize:"20px", backgroundColor:"white", zIndex:"10", color:"slategray", borderRadius:"20px", padding:'2px'}}  onClick={props.onClick}>
          <IoIosArrowDropleft />

        </button>
    );
    
    return (
        <div className="slider-container w-[500px] h-[1000px] mt-5">
            
            <div className=" border rounded-lg border-slate-300 p-6 w-[450px] h-[526px] m-auto">

                <div className="product-wishlist">
                    <div className="logo flex justify-end ">
                        <a className="flex justify-center items-center rounded-full text-white text-sm w-8 h-8 bg-gray-200 hover:bg-yellow-500" href="#">
                            <FaHeart />
                        </a>
                    </div>
                </div>

                <div className="big-slide-item">
                    <Slider asNavFor={nav2} 
                    ref={slider => (sliderRef1 = slider)} 
                    arrows={false} 
                    className=""
                    >
                        {
                            url.map((url,index)=> typeof(url) === "string"?<BigSlide key={index} ind={index} url={url}/>:<VideoSlide url={url.videoUrl} ind={index}/>
                                )
                        }
                    </Slider>
                </div>

                <div className="flex justify-center items-center gap-8 text-xl relative mt-4">
                    <div className="w-[60px] h-[60px] absolute left-0 -top-3">
                        <img src="https://d2ati23fc66y9j.cloudfront.net/ubuycom-v1/images/ubuy-seal-authentic.png.webp" alt="" />
                    </div>
                   
                        <span className=" text-blue-500">
                            <FaFacebookF/>
                        </span>
                        <span>
                            <FaXTwitter/>
                        </span>
                    
                </div> 

            </div>

            <div className="small-slide-item mt-4">

                <Slider
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className="w-[94%] m-auto"
                    
                    nextArrow={<ArrowLeft />} 
                    prevArrow= {<ArrowRight />}
                    >
                    {
                        url.map((url,index)=> typeof(url)=== "string"?
                    
                                <SmallSlide ind={index} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex} url={url}/>:<SmallSlide ind={index} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex} url={url.thumbUrl}/>
                           
                            )
                        }
                </Slider>
            </div>  
        </div>
    );
}

export default SlickSlider;
