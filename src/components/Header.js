import React from 'react'

const Header = () => {
  return (
    <div className='inline-flex h-[91px] py-0 px-[175px] justify-center  items-center gap-[684px] shrink-0 bg-[#b36ad3] text-white'>
        <div>
            <p className='text-[16px] font-sans not-italic font-[700] leading-normal'>Logo</p>
        </div>

        <div>
            <ul className='flex items-start gap-[107px]'>
                <li className='text-[16px] font-sans not-italic font-[400] leading-normal'>About</li>
                <li className='text-[16px] font-sans not-italic font-[400] leading-normal'>Pricing</li>
                <li className='text-[16px] font-sans not-italic font-[400] leading-normal'>Review</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header;
