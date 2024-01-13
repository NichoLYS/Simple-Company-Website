import React from 'react'
import hero from '../assets/banner/banner.png'

const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full h-full bg-gray-100 mb-40">
      <div className="w-full h-[600px] ml-20">
        <img
          src={hero}
          className="lg:w-[600px] sm:w-[500px] h-full object-contain"
        />
      </div>
      <div className="mx-auto my-auto">
        <h1 className="font-semibold xl:text-6xl xl:mr-[100px] mb-2 sm:text-3xl sm:mr-[200px] md:mr-[100px]">Let&apos;s make something</h1>
        <h1 className="font-semibold xl:text-6xl xl:mr-[290px] mb-10 sm:text-3xl sm:mr-[295px] md:mr-[195px]">great together.</h1>
        <p className="font-medium xl:text-2xl xl:mr-[225px] mb-10 sm:text-xl sm:mr-[100px] md:mr-[5px]">Whether it&apos;s a new venture or existing brand.</p>
        <button className="px-5 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 mr-[20px] hover:bg-cyan-400 hover:text-white">Start a Project</button>
        <button className="uLine2 text-cyan-400 xl:mr-[430px] sm:mr-[250px] md:mr-[140px] mb-20">Get in touch</button>
      </div>
    </div>
  )
}

export default HeroSection