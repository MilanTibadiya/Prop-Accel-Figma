import React from 'react'

const Plan = () => {
  return (
    <div className='bg-[fff] w-[1428px] h-[691px] items-center shrink-0 flex flex-col px-[175.5px]'>

      <div className='plan__top text-center pt-[76px]'>

      <div className='flex flex-col shrink-0'>
        <h1 className='text-[32px] font-sans not-italic 
        font-[700] leading-normal'>Choose your plan</h1>
        </div>
        
        <div className='flex w-[367px] flex-col shrink-0 my-[24px]'>
        <p className='text-[14px] font-sans not-italic font-[400] leading-normal '>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>

        <div className='flex justify-center' 
        >
          <div className='rounded-[10px]  w-[150px] flex justify-around' style={{ boxShadow: '0px 10px 30px 0px rgba(154, 148, 148, 0.25)', padding: '6px 16px 6px 6px'}}>
          <button className=' rounded-[10px]  bg-[#E1A6FF66] px-[9px] py-[3px]
          '>monthly</button>
          <button>yearly</button>
          </div>
        </div>

      </div>

{/* 2nd sec */}
      <div className='plan__botton flex gap-[90px]'>

        <div className='border flex flex-col gap-[24px] border-[#7A3199] px-[27px] py-[30px] rounded-[10px] m-2 h-[357px] w-[303px] '>
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal'>Basic Plan</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <h2 className='flex gap-[19px] items-center'> <span className='font-[700] text-[32px] text-ellipsis text-[#7A3199]'> $54</span>/month</h2>

          <ul className='text-[12px] font-[700]'>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>

          <div>
        <button className='text-[#7A3199] border border-[#7A3199]
        text-[12px] 
        font-[400]
        bg-whilt
        font-Poppins not-italic leading-normal items-center
        rounded-[4px] px-[32px] py-[12px]
        '
        >Start Free Trial</button>
        </div>
        </div>

        <div className='border flex flex-col gap-[24px] border-[#7A3199] px-[27px] py-[30px] rounded-[10px] m-2 h-[357px] w-[303px]'
        //  hover:bg-[#7A3199] hover:text-white hover:'
         >
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal'>Basic Plan</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <h2 className='flex gap-[19px] items-center'> <span className='font-[700] text-[32px] text-ellipsis text-[#7A3199]'> $54</span>/month</h2>

          <ul className='text-[12px] font-[700]'>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>

          <div>
        <button className='text-[#7A3199] border border-[#7A3199]
        text-[12px] 
        font-[400]
        bg-whilte
        font-Poppins not-italic leading-normal items-center
        rounded-[4px] px-[32px] py-[12px]
        '
        >Start Free Trial</button>
        </div>
        </div>

        <div className='border flex flex-col gap-[24px] border-[#7A3199] px-[27px] py-[30px] rounded-[10px] m-2 h-[357px] w-[303px] '>
          <h3 className='text-[20px] font-Poppins not-italic font-[700] leading-normal'>Basic Plan</h3>
          <p className='text-[12px] font-Poppins not-italic font-[400] leading-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <h2 className='flex gap-[19px] items-center'> <span className='font-[700] text-[32px] text-ellipsis text-[#7A3199]'> $54</span>/month</h2>

          <ul className='text-[12px] font-[700]'>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>

          <div>
        <button className='text-[#7A3199] border border-[#7A3199]
        text-[12px] 
        font-[400]
        bg-whilte
        font-Poppins not-italic leading-normal items-center
        rounded-[4px] px-[32px] py-[12px]
        '
        >Start Free Trial</button>
        </div>
        </div>
     
      </div>
      
    </div>
  )
}

export default Plan
