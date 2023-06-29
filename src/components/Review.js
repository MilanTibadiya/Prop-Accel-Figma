import React from 'react';

import user from "../asset/Lolla.png";
import star from "../asset/fluent-emoji-flat_star.svg";

const Review = () => {
  return (
    <div className='bg-[#fff] w-[1428px] h-[512px] shrink-0 flex flex-col px-[175.5px]'>
      
      <div  className='about__top mt-[57px] flex flex-col gap-[24px]'>
        <h1 className='text-[40px] font-sans not-italic 
        font-[700] leading-normal'>Review from customers</h1>
        <p className='w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </div>

      <div className='about__bottom flex mt-[32px]'>

      <div className='border flex flex-col gap-[24px] px-[48px] py-[36px] rounded-[10px] h-[238px] mr-[24px] w-[465px] '
      style={{boxShadow: ' 0px 16px 40px 0px rgba(154, 148, 148, 0.25)', border: '0.5px solid var(--light, rgba(225, 166, 255, 0.40))'}}>

        <div className='flex gap-[24px]'>
          <img src={user} alt="user-review"/>
          <div className='flex flex-col'>
          <h3>Lolla Smith</h3>
          <h1>Microsoft</h1>
          <div className='flex mt-1'>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          </div>
          
          </div>
          
        </div>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>

        </div>

        <div className='border flex flex-col gap-[24px] px-[48px] py-[36px] rounded-[10px] mr-[24px] h-[238px] w-[465px] '
      style={{boxShadow: ' 0px 16px 40px 0px rgba(154, 148, 148, 0.25)', border: '0.5px solid var(--light, rgba(225, 166, 255, 0.40))'}}>

        <div className='flex gap-[24px]'>
          <img src={user} alt="user-review"/>
          <div className='flex flex-col'>
          <h3>Lolla Smith</h3>
          <h1>Microsoft</h1>
          <div className='flex mt-1'>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          <img className='h-5' src={star} alt="star"/>
          </div>
          
          </div>
          
        </div>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>

        </div>

        

      </div>
      <p className=' text-center border mt-3'>vector section</p>
    </div>
  )
}

export default Review
