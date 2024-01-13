import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import gary from '../assets/work/gary.png';
import studio25 from '../assets/work/studio25.png';
import natterJack from '../assets/work/natterjack.png';
import skincare from '../assets/work/mysaSkincare.png';
import releve from '../assets/work/releve.png'; 
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import HeroSection from '../Component/HeroSection';

const Work = () => {
  const [isAnchorHovered1, setIsAnchorHovered1] = useState(false);
  const [isAnchorHovered2, setIsAnchorHovered2] = useState(false);
  const [isAnchorHovered3, setIsAnchorHovered3] = useState(false);
  const [isAnchorHovered4, setIsAnchorHovered4] = useState(false);
  const [isAnchorHovered5, setIsAnchorHovered5] = useState(false);
  return (
    <div className="">
        <Navbar />
        <header className="my-20">
            <h1 className="text-6xl flex flex-wrap font-bold ml-28">
              Good design
            </h1>
            <h1 className="text-6xl flex flex-wrap font-bold ml-28">
              makes life better
            </h1>
        </header>
        <div className="xl:grid xl:grid-cols-2 flex flex-col bg-gray-100 w-full mx-auto mt-10 h-full py-6 m-80 ">
          <div className="relative mx-auto mt-32 mb-40 w-[550px] h-[550px]">
            <img  
              className={`w-full h-full object-contain transition-transform duration-500 ease-in-out mb-4 
              ${isAnchorHovered1 ? 'scale-110' : ''} `} 
              src={gary} 
              />    
            <a 
              href={gary} 
              className="font-bold text-2xl hover:bg-slate-800 hover:text-white hover:rounded-md mr-[410px] py-2" 
              onMouseEnter={() => setIsAnchorHovered1(true)}
              onMouseLeave={() => setIsAnchorHovered1(false)}>Gary Neville</a>
            <p className="mt-2 mr-[500px] whitespace-nowrap text-xl text-gray-500">Refreshing Gary Neville&apos;s digital presence</p>
          </div>
          <div className="flex flex-col relative w-96 h-52 xl:mt-[200px] xl:mx-0 xl:mb-0 md:mx-auto md:mb-28 sm:mx-auto sm:mb-28 font-serif">
            <p className="text-[28px] mr-[40px]">&quot;Your company shows great</p>
            <p className="text-[28px]">design which is important for </p>
            <p className="text-[28px] mr-[210px] mb-10">us at Apple&quot;</p>
            <p className="mr-[200px]">Daniel Morrison, <p className="inline-block text-gray-500">Apple</p></p>
          </div>
          <div className="relative mx-auto mb-40 w-[550px] h-[550px]">
              <img
                className={`w-full h-full object-contain transition-transform duration-500 ease-in-out mb-4
                ${isAnchorHovered2 ? 'scale-110' : ''}`} 
                src={natterJack}
                />
                <a 
                  href={natterJack}
                  className="font-bold text-2xl hover:bg-slate-800 hover:text-white hover:rounded-md mr-[500px] py-2"
                  onMouseEnter={() => setIsAnchorHovered2(true)}
                  onMouseLeave={() => setIsAnchorHovered2(false)}
                >NatterJack</a>
                <p className="text-xl text-gray-500 whitespace-nowrap mt-2 mr-[500px]">Overhauling a people-first marketing agency</p>
          </div>
          <div className="relative w-[550px] h-[400px] xl:mt-[-300px] xl:mx-0 xl:mb-0 md:mx-auto md:mb-32 sm:mx-auto sm:mb-32">
              <img
                className={`w-full h-full transition-transform duration-500 ease-in-out mb-4
                ${isAnchorHovered3 ? 'scale-110' : ''}`} 
                src={studio25}
                />
                <a 
                  href={studio25}
                  className="font-bold text-2xl hover:bg-slate-800 hover:text-white hover:rounded-md mr-[440px] py-2"
                  onMouseEnter={() => setIsAnchorHovered3(true)}
                  onMouseLeave={() => setIsAnchorHovered3(false)}
                >Studio 25</a>
                <p className="text-gray-500 mr-[500px] text-xl whitespace-nowrap mt-2">Rebranding Luxury dance facilities </p>

          </div>
          <div className="relative mx-auto mb-40 w-[550px] h-[550px]">
              <img
                className={`w-full h-full object-contain transition-transform duration-500 ease-in-out mb-4
                ${isAnchorHovered4 ? 'scale-110' : ''}`} 
                src={skincare}
                />
                <div className="mr-[430px] mt-[-20px]">
                <a 
                  href={skincare}
                  className="font-bold whitespace-nowrap text-2xl hover:bg-slate-800 hover:text-white hover:rounded-md py-2 "
                  onMouseEnter={() => setIsAnchorHovered4(true)}
                  onMouseLeave={() => setIsAnchorHovered4(false)}
                > Mysa Skincare</a>
                <p className="mt-2 text-gray-500 text-xl whitespace-nowrap">Website & Content Creation for a UK skincare brand</p>
                </div>
          </div>
          <div className="relative w-[550px] h-[550px] xl:mt-[-300px] xl:ml-[-40px] md:mx-auto md:mb-24 sm:mx-auto sm:mb-24">
              <img
                className={`w-full h-full object-contain transition-transform duration-500 ease-in-out mb-3
                ${isAnchorHovered5 ? 'scale-110' : ''}`} 
                src={releve}
                />
                <a 
                  href={releve}
                  className="font-bold text-2xl hover:bg-slate-800 hover:text-white hover:rounded-md whitespace-nowrap py-2 mr-[265px]"
                  onMouseEnter={() => setIsAnchorHovered5(true)}
                  onMouseLeave={() => setIsAnchorHovered5(false)}
                >Releve Clothing</a>
                <p className="mt-2 text-gray-500 text-xl whitespace-nowrap ml-[55px]">Brand identity & Shopify store for a fashion store in Toronto </p>
          </div>
        </div>
        <HeroSection />
        <Footer />
    </div>
  )
}

export default Work