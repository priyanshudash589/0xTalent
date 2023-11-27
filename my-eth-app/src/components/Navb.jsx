import React from 'react'
import Logo from '../assets/pdlogo.jpg'
import LanguageIcon from '';

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
    <nav className=' mt-3'>
        <div>
            <div className='flex flex-row space-x-7'><a className='flex flex-row items-center space-x-4' href=""><img src={ Logo } className='block h-[4rem] w-[4rem]' /> <span className='text-3xl font-bold'>Logo</span></a>
            <ul className='mt-5'>
                <li className='flex flex-row space-x-[9rem] ml-[10rem]'>
                    {
                            navItems.map(({link, path}) => <a key={link} href={path} className='text-xl font-semibold'>{link}</a> )
                    }
                </li>
            </ul>
            <div>
                    <img src={ LanguageIcon } alt="" />
            </div>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navb