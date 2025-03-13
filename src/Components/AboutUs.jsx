import React from 'react'

export default function AboutUs() {
    return (
        <>

            <section className="container px-32 py-16 bg-white" id='aboutus'>
                <div className="grid grid-cols-2 ">
                    <div className="bg-[#f6f9ff] flex flex-col gap-4 px-6 py-4 ro">
                        <h3 className="text-lg text-blue-600 font-semibold">Who We Are</h3>
                        <h1 className="font-semibold text-[#083053] text-2xl">We are multitalented solutions experts. Our technical acumen with the world’s leading technologies — across your mobile applications, data and security , websites and web applications — enables you to grow your business, increase efficiency and deliver the future.</h1>
                        <p className="">We solve more than workload problems; we create business advantages. Our multitalanted solutions expertise means you’re empowered to work faster, smarter and ahead of what’s next.</p>
                        <button type="button" className='text-white flex justify-center items-center gap-4 w-[40%]  bg-[#4154f1] px-10 py-3 shadow-2xs rounded-lg font-semibold getstart'>Read More <i className="fa-solid fa-arrow-right text-xl"></i></button>

                    </div>
                    <div className="">
                        <img src="/Images/hero-img.png" alt="" className="" />
                    </div>
                </div>

            </section>

        </>
    )
}
