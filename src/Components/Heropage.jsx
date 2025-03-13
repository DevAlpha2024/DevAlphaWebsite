import React from 'react'

export default function Heropage() {
    return (
        <>
            <section className='container px-32 flex justify-center items-center h-[90vh]' id='home'>
                <div className="flex justify-around items-center gap-20">
                    <div className="">
                        <h1 className="text-5xl font-bold text-[#012970] ">
                            We offer modern solutions for growing your business
                        </h1>
                        <p className="text-2xl my-6">
                        We are team of talented designers and developers making mobile applications and websites for your business
                        </p>

                        <button type="button" className='text-white flex justify-center items-center gap-4  bg-[#4154f1] px-10 py-3 shadow-2xs rounded-lg font-semibold getstart'>Get Started <i className="fa-solid fa-arrow-right text-xl"></i></button>
                    </div>
                    <div className="">
                        <img src="/Images/hero-img.png" alt="" className="w-full" />
                    </div>
                </div>
            </section>

        </>
    )
}
