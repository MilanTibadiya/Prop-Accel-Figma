import React from 'react';

import facebook from "../asset/mdi_facebook.svg";
import yt from "../asset/uil_youtube.svg";
import insta from "../asset/basil_instagram-solid.svg"
import twitter from "../asset/uil_twitter.svg";
import './Hero.css';

const Footer = () => {
  return (
    <div className='footer bg-[pink] w-[1428px] h-[536px] shrink-0 flex flex-col text-center px-[175.5px]'
    style={{backgroundImage: ''}}>
      
      <div className='footer__top  mt-[68px] flex flex-col gap-[24px] text-center items-center'>
        <h1 className='font-[700] text-[32px] font-inter leading-normal not-italic'>We have what you’re looking for</h1>
        <p className='w-[596px] text-[#383896]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
      
        <button className='text-white mt-[64px] text-[20px] font-Poppins not-italic font-[700] leading-normal items-center
        rounded-[10px] px-[55px] pt-[19px] pb-[25.9px]
        ]'
        style={{ background: 'var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%))'}}
        >Get Started Now</button>
      </div>

      <div className='footer__bottom flex border-t-2 mt-[94px] pt-[20px] pb-[20px] justify-between'>
        <p className='pl-[60px] pr-[190px] text-white'>All Right Reserved @Copyright 2023</p>   

        <ul className='flex gap-[16px] text-white'>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Product</li>
        </ul>

        <div className='flex gap-[16px] pr-[60px]'>
          <img src={facebook} alt="fb"/>
          <img src={yt} alt="yt"/>
          <img src={insta} alt="insta"/>
          <img src={twitter} alt="twitter"/>
        </div>
      </div>

    </div>
  )
}

export default Footer
