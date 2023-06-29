import React from 'react';
import people from "../asset/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png";
import people2 from "../asset/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import ellipse from '../asset/Ellipse 27.svg';
import group from '../asset/Group.svg';
import vector from '../asset/Vector (1).svg';
import './Hero.css';

const Hero = () => {
  return (
    <div className='w-[1428px] h-[652px] items-center shrink-0 bg-[#e1c8ec] flex'>
      
      <div className='left pl-[175px] text-white'>

        <div className='flex w-[580px] h-[127.703px] flex-col shrink-0'>
        <h1 className='text-[48px] font-sans not-italic font-[700] leading-normal'>Learn how to launch a successful podcast</h1>
        </div>
        
        <div className='flex w-[433px] h-[62.751px] flex-col shrink-0 mt-20 mb-20'>
        <p className='text-[16px] font-sans not-italic font-[400] leading-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div>
        <button className='text-[20px] font-Poppins not-italic font-[700] leading-normal items-center
        rounded-[10px] px-[55px] pt-[19px] pb-[25.9px]
        ]'
        style={{ background: 'var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%))'}}
        >Sign up Now</button>
        </div>
        
        
      </div>

      <div className='right'> 
      {/* pr-[175px] w-[491px] h-[281px] shrink-0 rounded-[10px]  */}
      <img className='img1' src={people2} alt="people-group"/>
      <img className='img2' src={people} alt="people-group"/>
      <div className='icon h-[10px]'>
      <img src={ellipse}/>
      <img src={ellipse}/>
      <img src={ellipse}/>
      <img src={ellipse}/>
      <img src={ellipse}/>
      <img src={ellipse}/>
      <img src={ellipse}/>
      <img className='h-[46.429px] w-[35.714px]' src={group}/>

      </div>
      </div>
      
    </div>
  )
}

export default Hero;

// border-radius: 10px;
// background: var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%));