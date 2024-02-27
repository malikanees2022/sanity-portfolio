import React from 'react'
import { NavLink } from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
 const Navbar = ()=>{
    return(
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between py-2'>
                <nav className='flex items-center justify-center '>
        <NavLink to={"/"} className='inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-green-800 font-bold text-4xl  cursive tracking-widest' activeClassName='text-white'>Sanity</NavLink>
        <NavLink to={"/posts"} className='inline-flex  items-center py-3 mt-2 px-3 mr-6 text-red-200 rounded hover:text-green-800' activeClassName='text-red-100 bg-white'>Blog Posts</NavLink>
        <NavLink to={"/projects"} className='inline-flex items-center py-3 mt-2 px-3 mr-6 text-red-200 rounded hover:text-green-800'>Projects</NavLink>
        <NavLink to={"about"} className='inline-flex items-center py-3 mt-2 px-3 mr-6 text-red-200 rounded hover:text-green-800'>About Me!</NavLink>
                </nav>
                <div className='inline-flex  py-3 px-3'>
                    <SocialIcon url='https://twitter.com' className='mr-4 mt-1' target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
                    <SocialIcon url='https://youtube.com' className='mr-4 mt-1' target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
                    <SocialIcon url='https://facebook.com' className='mr-4 mt-1' target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
 }
 export default Navbar