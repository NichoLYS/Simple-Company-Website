import React from 'react'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../Component/HeroSection'

const ContactUs = () => {
    const navigate = useNavigate();
    const initialState = {
        name: '',
        email: '',
        phone: '',
        description1: '',
        description2: '',
    }
    const [input, setInput] = useState(initialState);
    const { name, email, phone, description1, description2 } = input;

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/');
    }

    return (
        <div>
            <Navbar />
            <div className="m-auto p-auto xl:grid xl:grid-cols-2 
        md:flex md:flex-col md:mx-auto
        sm:flex sm:flex-col sm:mx-auto">
                <div className="xl:ml-[150px] mt-[55px] md:ml-[180px] sm:ml-[50px] lg:ml-[280px] ">
                    <h1 className="flex flex-wrap xl:text-7xl md:text-5xl sm:text-3xl font-bold xl:mb-16 
                md:mb-8 sm:mb-8 mt-10 xl:pr-[70px] xl:text-start">It&apos;s nice to meet ya</h1>
                    <p className="flex xl:flex-wrap font-medium xl:text-lg">For general enquiries, please fill out the form to get in  </p>
                    <p className="flex xl:flex-wrap font-medium xl:text-lg"> touch. Alternatively, if you know your project details -  </p>
                    <p className="flex xl:flex-wrap font-medium xl:text-lg">head over to our <Link to="/" className="uLine2 !no-underline mx-1 xl:text-lg font-medium">project planner</Link> for a more refined step- </p>
                    <p className="flex xl:flex-wrap font-medium xl:text-lg"> by-step process. </p>
                </div>
                <div className="xl:min-h-[100vh] xl:ml-10 xl:mt-[160px] md:items-center 
            md:mx-auto md:mb-52 md:mt-28 sm:mx-auto sm:items-center sm:mt-28 sm:mb-48">
                    <div className="relative w-[620px] h-[500px] border-2 border-white rounded-2xl flex items-center">
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-8 mt-8 w-[600px] border-b-2 border-black ">
                                <span className="font-bold text-xl mr-[600px]">Name </span>
                                <input type="text" name="name" required value={name} onChange={handleChange} className="w-full h-10 bg-transparent border-none outline-none" />
                            </div>
                            <div className="relative mb-8 mt-8 w-[600px] border-b-2 border-black">
                                <span className="font-bold text-xl mr-[600px]">Email Address </span>
                                <input type="email" name="email" required value={email} onChange={handleChange} className="w-full h-10 bg-transparent border-none outline-none" />
                            </div>
                            <div className="relative mb-8 mt-8 w-[600px] border-b-2 border-black">
                                <span className="font-bold text-xl mr-[600px]">Phone </span>
                                <input type="tel" name="phone" required value={phone} onChange={handleChange} className="w-full h-10 bg-transparent border-none outline-none appearance-none" />
                            </div>
                            <div className="relative mb-8 mt-8 w-[600px] border-b-2 border-black">
                                <span className="font-bold text-xl mr-[600px]">Tell us about your project </span>
                                <input type="text" name="description1" required value={description1} onChange={handleChange} className="w-full h-10 bg-transparent border-none outline-none" />
                            </div>
                            <div className="relative mb-8 mt-8 w-[600px] border-b-2 border-black">
                                <span className="font-bold text-xl mr-[300px]">What is the biggest challange you face? </span>
                                <input type="text" name="description2" required value={description2} onChange={handleChange} className="w-full h-10 bg-transparent border-none outline-none" />
                            </div>
                            <div className="relative mb-8 mt-8 w-[600px]">
                                <p className="font-medium text-lg mr-[115px]">By submitting this form I accept the Privacy Policy of this site.</p>
                            </div>
                            <div>
                                <input type="submit" name="Send Message" value="Send Message"
                                    className={(name && email && phone && description1 && description2) !== '' ? "border-2 border-cyan-400 rounded-full px-5 py-3 bg-cyan-400 text-white mr-[600px]" :
                                        "border-2 border-cyan-400 rounded-full px-5 py-3 text-cyan-400 hover:text-white hover:bg-cyan-400 mr-[600px]"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <HeroSection />
            <Footer />
        </div>
    )
}

export default ContactUs