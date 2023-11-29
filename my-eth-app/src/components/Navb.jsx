import React from 'react'
import Logo from '../assets/pdlogo.jpg'
import { GrLanguage } from "react-icons/gr";
const Navb = () => {
    const navItems = [
        {link: "Option1" , path: "option1"},
        {link: "Option2" , path: "option2"},
        {link: "Option3" , path: "option3"},
        {link: "Option4" , path: "option4"},
        {link: "Option5" , path: "option5"}
    ]
  return (
    <>
    <nav className='mt-3'>
        <div className='flex flex-row space-x-[12rem]'>
            <div className='flex flex-row space-x-7 mt-4'>
                <a className='flex flex-row items-center space-x-4' href=""><img src={ Logo } className='block h-[4rem] w-[4rem]' /> <span className='text-3xl font-bold'>Logo</span></a>
            <ul className='mt-5'>
                <li className='flex flex-row space-x-[9rem] ml-[10rem]'>
                    {
                            navItems.map(({link, path}) => <a key={link} href={path} className='text-xl font-semibold'>{link}</a> )
                    }
                </li>
            </ul>
            
            </div>

            <div className='flex flex-row space-x-2 mt-3'>
                    <GrLanguage className='h-[2.5rem] w-[2.5rem] mt-3'>
                    </GrLanguage>
                    <div className='flex flex-row space-x-5 mt-1'>
                    <button className='h-[3.5rem] w-[9rem] text-red-800 text-xl rounded-xl bg-red-400'>Language</button>
                        <button className='h-[3.5rem] w-[9rem] text-red-800 text-xl rounded-xl bg-red-400'>Login</button></div>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navb