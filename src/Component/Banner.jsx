import React from 'react'
import alliance from '../assets/banner/alliance.png'
import manchester from '../assets/banner/manchester.png'
import morson from '../assets/banner/Morson.png'
import blackberry from '../assets/banner/Blackberry.png'
import foxDark from '../assets/banner/Fox-dark.png'

const Banner = () => {
  return (
    <>
        <div className="mt-8 mb-8 bg-gray-100">
        <img
        className=" inline w-[300px] h-[150px]" 
        src={alliance}
        alt="No Image"/>
        <img
        className="inline w-[300px] h-[150px]" 
        src={manchester}
        alt="No Image"/>
        <img
        className="inline w-[300px] h-[150px]" 
        src={morson}
        alt="No Image"/>
        <img
        className="inline w-[300px] h-[150px]" 
        src={blackberry}
        alt="No Image"/>
        <img
        className="inline w-[300px] h-[150px]" 
        src={foxDark}
        alt="No Image"/>
    </div>
    </>
    
    
  )
}

export default Banner