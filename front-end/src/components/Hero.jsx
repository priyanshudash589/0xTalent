import React from 'react'
import Herobg from '../assets/hero3.svg'

const Hero = () => {
  return (
    <div className='overflow-hidden'>
      <img src={Herobg} className='relative bottom-[7rem] w-[150rem]  h-[155rem] bg-slate-200' alt="" />
    </div>
  )
}

export default Hero