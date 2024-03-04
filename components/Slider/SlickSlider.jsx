"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import { IoIosArrowForward, IoIosArrowBack, IoMdSkipBackward } from "react-icons/io";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import BigSlide from "./BigSlide";
import SmallSlide from "./SmallSlide";


let url=["https://m.media-amazon.com/images/I/515B5CoDdWL._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/51eJbFQWe4L._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61IDhrk0deL._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61BEhzZ8l8L._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61piD8VG03L._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/71pFJ3+HxkL._AC_SL1000_.jpg"]


function SlickSlider() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container w-[500px] m-auto">
            
            <div className=" border rounded-lg border-black p-6 w-[450px] h-[526px] m-auto">

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
                            url.map((url,index)=>(
                                <BigSlide key={index} url={url}/>
                                ))
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
                    >
                    {
                        url.map((url,index)=>(
                            <SmallSlide key={index} url={url}/>
                            ))
                        }
                </Slider>
            </div>  
        </div>
    );
}

export default SlickSlider;
