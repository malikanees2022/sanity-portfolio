import React,{useState,useEffect} from 'react'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder= imageUrlBuilder(sanityClient)
function urlFor(source){
  return builder.image(source)
}

const About = () => {
  const [author,setAuthor]=useState(null)
  useEffect(()=>{
    sanityClient.fetch(`*[_type=="author"]{
      name,
      bio,
      "authorImage":image.asset->url
    }`).then((data)=>setAuthor(data[0]))
    .catch(console.error)
  },[])
  if(!author) return <div>Loading...</div>
  return (
    <main className='relative'>
      <img src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='absolute w-full'/>
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img src={urlFor(author.authorImage).url()} alt="" className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'/>
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='text-6xl text-green-300  mb-4'>
              Hey there. I'm{" "}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='text-white'>
              <BlockContent blocks={author.bio} projectId={"sn5pw9li"} dataset={"production"}/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
