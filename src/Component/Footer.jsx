import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center bg-black w-full xl:h-[800px] 
    md:h-[1000px] sm:h-[1250px] p-0">
    
        <div className="xl:flex xl:mt-[40px] xl:ml-[125px] gap-3 md:mt-[650px] ">
            <div className="xl:block xl:mt-10 md:whitespace-nowrap 
            md:mr-[-300px] md:mb-[-100px] md:ml-[90px]">
                <p className=" text-gray-500">Follow Us On Social Media</p><br/>
            </div>
            <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute xl:left-32 md:left-[80px] sm:left-[95px] xl:mt-24 md:mt-24 sm:mt-[500px] text-xl 
            text-white bg-blue-500 rounded-full border-blue-500 xl:border-y-[15px] xl:border-x-[18px] 
            md:border-y-[8px] md:border-x-[12px] sm:border-y-[8px] sm:border-x-[12px]">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute xl:left-48 md:left-[130px] sm:left-[143px] xl:mt-24 md:mt-24 sm:mt-[500px] text-xl bg-blue-300 rounded-full 
            text-white border-blue-300 xl:border-y-[15px] xl:border-x-[18px] 
            md:border-y-[8px] md:border-x-[12px] sm:border-y-[8px] sm:border-x-[12px]">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute xl:left-64 md:left-[180px] sm:left-[190px] xl:mt-24 md:mt-24 sm:mt-[500px] bg-orange-400 text-xl 
            text-white border-orange-400 rounded-full xl:border-y-[15px] xl:border-x-[18px] 
            md:border-y-[8px] md:border-x-[12px] sm:border-y-[8px] sm:border-x-[12px]">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute xl:left-80 md:left-[230px] sm:left-[235px] xl:mt-24 md:mt-24 sm:mt-[500px] bg-gray-600 text-xl
            text-white xl:border-y-[15px] xl:border-x-[18px] 
            md:border-y-[8px] md:border-x-[12px] 
            sm:border-y-[8px] sm:border-x-[12px] border-gray-600 rounded-full">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
        <div className="xl:mr-[0px] xl:ml-[-800px] xl:mt-[550px] 
        md:mt-[800px] md:whitespace-nowrap md:ml-[100px]
        sm:mt-[700px] sm:whitespace-nowrap sm:ml-[330px] sm:mr-[420px]">
            <p className="text-white mr-[120px]">© MadeByShape Ltd 2023. Web Design Manchester</p> 
            <p className="text-white">Company Reg Number 10529058. All Rights Reserved. <a href="/privacy-policy" className="uLine !no-underline" >Privacy Policy</a></p>
        </div>
        <div className="xl:ml-[-200px] mr-[750px] mt-[82px] whitespace-nowrap 
        md:text-left md:ml-[100px] sm:text-left sm:ml-[-900px]">
            <ul className=" text-lg">
                <li className="text-gray-600 mb-5">Learn</li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">About</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Culture</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Testimonials</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Method</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">FAQs</a>
                </li>
                <li className="text-white mb-5">
                    <a href="#" className="uLine !no-underline">Blog</a>
                </li>
            </ul>
            <ul className="text-lg">
                <li className="text-gray-600 mb-5"> Explore</li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Home</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Work</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Services</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Careers</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Sectors</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Hex Test</a>
                </li>
                <li className="text-white">
                    <a href="#" className="uLine !no-underline">Contact</a>
                </li>
            </ul>
        </div>
      
        <div className="xl:mb-[0px] xl:mt-[-617px] xl:ml-[1100px] xl:mr-[400px] col-span-3 xl:whitespace-nowrap 
        md:mt-[-840px] md:ml-[500px] md:text-left 
        sm:mt-[-915px] sm:ml-[800px] sm:text-left">
            <ul className="text-lg">
                <li className="text-gray-600 mb-5">Telephone</li>
                <li className="text-white mb-5">
                    <a href="#" className="uLine !no-underline">01942 894 596</a>
                </li>
            </ul>
            <ul className="text-lg">
                <li className="text-gray-600 mb-5">Email</li>
                <li className="text-white mb-5">
                    <a href="#" className="uLine !no-underline">hello@madebyshape.co.uk</a>
                </li>
            </ul>
            <ul className="text-lg">
                <li className="text-gray-600 mb-5">Studio Address</li>
                <li className="text-white">MadeByShape</li>
                <li className="text-white">1 Gibfield Park Avenue</li>
                <li className="text-white">Atherton</li>
                <li className="text-white">Manchester</li>
                <li className="text-white mb-5">M46 0SU</li>
            </ul>
            <ul className="text-lg">
                <li className="text-gray-600">WhatThreeWords</li>
                <li className="text-white">
                    <a 
                    href="https://what3words.com/topped.little.pirate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uLine !no-underline">
                        {'///topped.little.pirate'}
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
   
  )
}

export default Footer