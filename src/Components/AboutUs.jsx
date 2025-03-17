import React from 'react'
import { Link } from 'react-scroll'

export default function AboutUs() {
    return (
        <>

            <section className="container md:px-32 py-16 bg-white " id='aboutus'>
                <div className="grid md:grid-cols-2 ">
                    <div className="bg-[#f6f9ff] flex flex-col gap-4 px-6 py-4 ro">
                        <h3 className="text-lg text-blue-600 font-semibold">Who We Are</h3>
                        <h1 className="font-semibold text-[#083053] text-2xl">At Dev Alpha, we are a team of passionate and innovative technology experts dedicated to transforming ideas into powerful digital solutions. With expertise in Android application development, web applications, data security, and cutting-edge mobile technologies, we help businesses thrive in the digital era.</h1>
                        <p className="">Our commitment goes beyond just building applications—we craft seamless, high-performing solutions that drive growth, enhance efficiency, and future-proof your business. By leveraging the latest industry trends and advanced technologies, we empower you to stay ahead of the competition and achieve success with confidence.</p>
                        <Link to='aboutus'><button type="button" className='text-white flex justify-center items-center gap-4 md:w-[40%] w-full  bg-[#4154f1] px-10 py-3 shadow-2xs rounded-lg font-semibold getstart'>Read More <i className="fa-solid fa-arrow-right text-xl"></i></button></Link>
                        
                    </div>
                    <div className="">
                        <img src="/Images/hero-img.png" alt="DevAlpha-aboutus" className="" />
                    </div>
                </div>

            </section>

        </>
    )
}
