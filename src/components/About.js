import React from 'react'

const About = () => {
  return (
    <div className='w-[1428px] h-[525px] items-center shrink-0 flex px-[175.5px]'>

      <div className='about__left flex flex-wrap w-[60%]'>

        <div className='border border-[#7A3199] px-[30px] py-[30px] rounded-[10px] m-2 border-l-[0px] h-[160px] w-[268px] '>
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal mb-[16px]'>Interactive Features</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        </div>

        <div className='border mt-10 border-[#7A3199] px-[30px] py-[30px] rounded-[10px] m-2 border-l-[0px] h-[160px] w-[268px] '>
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal mb-[16px]'>Interactive Features</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        </div>

        <div className='border mt-[-10px] border-[#7A3199] px-[30px] py-[30px] rounded-[10px] m-2 border-l-[0px] h-[160px] w-[268px] '>
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal mb-[16px]'>Interactive Features</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        </div>

        <div className='border border-[#7A3199] px-[30px] py-[30px] rounded-[10px] m-2 border-l-[0px] h-[160px] w-[268px] '>
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal mb-[16px]'>Interactive Features</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        </div>

      </div>
      
      <div className='about__right'>

      <div className='flex w-[416px] flex-col shrink-0'>
        <h1 className='text-[48px] font-sans not-italic font-[700] leading-normal'>About the Course</h1>
        </div>
        
        <div className='flex w-[367px] flex-col shrink-0 '>
        <p className='text-[14px] font-sans not-italic font-[400] leading-normal '>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
        </div>

        <div>
        <button className='text-white mt-[48px] text-[20px] font-Poppins not-italic font-[700] leading-normal items-center
        rounded-[10px] px-[55px] pt-[19px] pb-[25.9px]
        ]'
        style={{ background: 'var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%))'}}
        >Explore Now</button>
        </div>

      </div>
    </div>
  )
}

export default About
