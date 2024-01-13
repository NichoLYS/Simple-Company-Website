import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import Video from '../assets/advertise.mp4';
import Banner from '../Component/Banner';
import ImgSlider from '../Component/ImgSlider';
import slider1 from '../assets/sliderAssets/webDesign.png';
import slider2 from '../assets/sliderAssets/craftCms.png';
import slider3 from '../assets/sliderAssets/shopify.png';
import slider4 from '../assets/sliderAssets/branding.png';
import slider5 from '../assets/sliderAssets/seo.png';
import slider6 from '../assets/sliderAssets/e-commerce.png';
import Footer from '../Component/Footer';
import HeroSection from '../Component/HeroSection';

const Home = () => {
    const [autoPlay, setAutoPlay] = useState(false);
    const videoRef = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
      };
  
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAutoPlay(true);
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
      observer.observe(videoRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);

   
  

  return (
    <div>
        <Navbar />
        <div className=" mb-[500px]">
        <header className="block my-20">
            <h1 className="text-6xl font-bold mb-5">
              A Web Design Agency <br /> in Manchester
            </h1>
            
            <h2 className="mb-5">
              We help business grow online through Branding, Websites and SEO
            </h2>
            <button className="mr-5 border-2 border-cyan-400 text-cyan-400 rounded-full px-5 py-3 hover:bg-cyan-400 hover:text-white">
               View Our Work 
            </button>
            <button className="mr-5 border-2 border-cyan-400 text-cyan-400 rounded-full px-5 py-3 hover:bg-cyan-400 hover:text-white">
                Meet Our Team
            </button>
        </header>
        <div className="bg-gray-100 max-w-10xl mt-10 h-screen py-6">
          <div className="relative mx-auto">
            <video 
            ref={videoRef}
            controls
            autoPlay={autoPlay}
            className="w-[1280px] h-[720px] object-contain mb-4 mx-auto"
            src={Video} 
            type="video/mp4" 
            alt="Your browser does not support the video tag."/>
            <h3 className="font-bold text-2xl hover:bg-slate-800 hover:text-white hover:rounded-md px-3 py-2" >
                An independent web design & branding agency in Manchester setup in 2010 <br />
                who care, build relationships, have industry experience, and win awards.
            </h3>
           <Banner />
           <div className="flex h-[500px] mt-[100px] mb-[100px] p-[40px] bg-gray-100">
              <div className="w-full max-w-xl mx-auto">
                <ImgSlider 
                  images={[
                    slider1,
                    slider2,
                    slider3,
                    slider4,
                    slider5,
                    slider6,
                  ]}
                  text = {
                    [
                    "Web Design",
                    "Craft CMS",
                    "Shopify",
                    "Branding",
                    "E-Commerce",
                    "SEO",
                  ]
                  }
                />
              </div>
           </div>
           <HeroSection />
            <Footer />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home