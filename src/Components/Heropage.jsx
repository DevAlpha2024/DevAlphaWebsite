import React from 'react'
import { Link } from 'react-scroll'

export default function Heropage() {
    return (
        <>
            <section className='container md:px-32 px-6 max-md:text-center max-md:mt-20  max-md:flex-col flex justify-center items-center h-[90vh]' id='home'>
                <div className="flex max-md:flex-col md:justify-around max-md:justify-between items-center gap-20">
                    <div className="">
                        <h1 className="md:text-5xl text-3xl font-bold text-[#012970] ">
                            We offer modern solutions for growing your business
                        </h1>
                        <p className="md:text-2xl text-2xl my-6">
                        We are team of talented designers and developers making mobile applications and websites for your business
                        </p>
                        
                        <div className="max-md:flex justify-center items-center">
                        <Link to='aboutus'><button type="button" className='text-white flex justify-center items-center gap-4  bg-[#4154f1] px-10 py-3 shadow-2xs rounded-lg font-semibold getstart'>Get Started <i className="fa-solid fa-arrow-right text-xl"></i></button></Link>

                        </div>
                    </div>
                    <div className="">
                        <img src="/Images/hero-img.png" alt="" className="w-full " />
                    </div>
                </div>
            </section>

        </>
    )
}
