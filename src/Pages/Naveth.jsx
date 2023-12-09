import React from 'react'
import { Link } from 'react-router-dom'
import MainLogo from '../assets/logo.svg'
import Slogan from '../assets/slogantext.svg'


const Naveth = () => {

  return (
    <>
      <nav className='flex bg-white opacity-70 flex-row w-full h-[6rem] z-50 fixed'>
        {/* Logo */}
        <div className='w-[26rem] flex justify-center items-center content-center'>
          <img src={MainLogo} className='w-[8rem]' alt="" />
        </div>
        {/* slogan-text */}
        <div className='w-[70rem]  flex justify-center items-center content-center '>
          <img src={Slogan} className='w-[28rem]' alt="" />
        </div>
        {/* signup and login buttons */}
        <div className='w-[24rem] flex flex-row gap-5 items-center justify-center'>
          <Link to="/login">
            <button className='border-solid border-2 border-black text-xl font-semibold w-[11rem] rounded-full h-[4rem] text-black'>Log In</button>
          </Link>
          <Link to="/register">
            <button className='bg-black w-[11rem] rounded-full h-[4rem] text-white text-xl'>Register</button>
          </Link>
        </div>
      </nav>


    </>
  )
}

export default Naveth