import React from 'react'
import Image from '../Images/banner.avif'

const Home = () => {
  return (
    <main>
      <img src={Image} alt="" className='absolute  w-full h-full ' />
      <section className='relative flex justify-center max-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug'>Hello, I'm Anees..!</h1>
      </section>
    </main>
  )
}

export default Home
