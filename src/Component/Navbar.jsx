import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import cancel from '../assets/banner/cancel_icon.png'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showBurger, setBurger] = useState(true);
  const [showCancel, setCancel] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    setBurger(!showBurger);
    setCancel(!showCancel);
    console.log("hallo");
  }
  return (
    <>

      <nav className="bg-white shadow-md h-24">
        <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4 items-center justify-center mt-6">
                  <Link to="/" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-bold mr-80" >Shape.</Link>
                  <Link to="/work" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Work</Link>
                  <Link to="/services" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Services</Link>
                  <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                  <Link to="/method" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Method</Link>
                  <Link to="/blog" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                  <Link to="/contactUs" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 mt-6">
              <button type="button"
                className="relative transition ease-in-out duration-300 rounded-full border-2 px-4 py-3 
              border-cyan-400 bg-white p-1 text-cyan-400 hover:text-white hover:bg-cyan-400 
                focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-400 hidden lg:ml-6 lg:block">
                <p className="">Start a Project</p>
              </button>
            </div>
          </div>
        </div>


        <div className={`relative z-10 ${showMenu ? 'bg-black ' : ''}`}>
          <div className={`lg:hidden flex flex-col items-center w-full h-full m-auto justify-center mt-[-70px] `}>
            {showCancel ? <button type="button" className="flex flex-col justify-center items-center z-10 ml-[630px] w-20 h-10 mt-[20px]" onClick={handleClick}>
              <img
                src={cancel}
                className=""
              />
            </button> : ''}
            {showBurger ? <button type="button" className="flex flex-col justify-center items-center z-10 ml-[630px] w-20 h-10 mt-[20px]" onClick={handleClick}>
              <div className="w-[25px] h-[2px] bg-black my-[2px] mx-0"></div>
              <div className="w-[25px] h-[3px] bg-black my-[2px] mx-0"></div>
              <div className="w-[25px] h-[2px] bg-black my-[2px] mx-0"></div>
            </button> : ''}
            <div className="mt-[-35px] mb-[100px] mr-[230px] z-10">
              <Link to="/" className={`text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-bold mr-80 ${showMenu ? 'text-white' : ''}`} >Shape.</Link>
            </div>
            {showMenu ?
              <div className="px-2 pb-3 pt-2 mr-[500px] z-10 w-[fullpx]">
                <Link to="/work" className="text-white text-2xl text-left block rounded-md py-2 font-bold" aria-current="page">Work</Link>
                <Link to="/services" className="text-white text-2xl text-left block rounded-md py-2 font-bold">Services</Link>
                <Link to="/about" className="text-white text-2xl text-left block rounded-md py-2 font-bold">About</Link>
                <Link to="/method" className="text-white text-2xl text-left block rounded-md py-2 font-bold">Method</Link>
                <Link to="/blog" className="text-white text-2xl text-left block rounded-md py-2 font-bold">Blog</Link>
                <Link to="/contactUs" className="text-white text-2xl text-left block rounded-md py-2 font-bold">Contact Us</Link>
                <button type="button"
                  className="relative mt-[50px] transition ease-in-out duration-300 rounded-full border-2 px-4 py-3 
              border-cyan-400 p-1 text-cyan-400 hover:text-white hover:bg-cyan-400 focus:outline-none focus:ring-1 
                focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-400 mb-[100px]">
                  <p className="">Start a Project</p>
                </button>
              </div> : null}
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar