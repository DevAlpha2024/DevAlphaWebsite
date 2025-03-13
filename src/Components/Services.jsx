import React from 'react'
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

export default function Services() {

    const { ref, inView } = useInView({ triggerOnce: true });

    const services = [
        { id: 1, title: "Andriod Appliction" },
        { id: 2, title: "Product Development" },
        { id: 3, title: "UI/UX Design" },
        { id: 4, title: "Website Development" },
    ];

    return (
        <>
            <section className='container px-32 py-16 bg-white' id='services'>
                <h1 className="text-lg text-blue-600 font-semibold flex justify-center items-center">Services</h1>
                <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl mt-4">
                    We provide best quality services to our Client
                </h1>

                <div className="grid grid-cols-3 items-center mt-10">
                    <div className=""><img src="/Images/Services.png" alt="Services" className="" /></div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-6 p-6 col-span-2">
                            {services.map((service) => (
                                <div key={service.id} className="flex items-start space-x-4 bg-white shadow-2xl px-10 py-5 rounded-lg service-card">
                                    <div className="bg-[#ecf3ff] px-2 py-1 rounded-sm transition-all duration-500 ease-in-out hover:bg-blue-500 hover:text-white service-icon "><i className="fa-solid fa-check font-bold"></i></div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{service.title}</h3>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="grid grid-cols-3 items-center mt-10 gap-32 rounded-lg">
                        <div className="flex items-center shadow-2xl px-6 py-4 gap-6">
                            <div className="text-3xl text-orange-600"><i className="fa-solid fa-list-check"></i></div>
                            <div className="">

                                <div ref={ref}>
                                    {inView && (
                                        <CountUp
                                            end={5}
                                            duration={2}
                                            delay={0.2}
                                            className="text-[#0029b3] text-4xl font-semibold"
                                        />
                                    )}
                                </div>
                                <p className="text-gray-500">Projects</p>
                            </div>
                        </div>

                        <div className="flex items-center shadow-2xl px-6 py-2 gap-6 c">
                            <div className="text-3xl text-green-600"><i className="fa-solid fa-headphones"></i></div>
                            <div className="">
                            <div ref={ref}>
                                    {inView && (
                                        <CountUp
                                            end={12}
                                            duration={2}
                                            delay={0.2}
                                            className="text-[#0029b3] text-4xl font-semibold"
                                        />
                                    )}
                                </div>
                                <p className="text-gray-500">Months of Experience</p>
                            </div>
                        </div>

                        <div className="flex items-center shadow-2xl px-6 py-2 gap-6 ">
                            <div className="text-3xl text-rose-500"><i className="fa-solid fa-users"></i></div>
                            <div className="">
                            <div ref={ref}>
                                    {inView && (
                                        <CountUp
                                            end={5}
                                            duration={2}
                                            delay={0.2}
                                            className="text-[#0029b3] text-4xl font-semibold"
                                        />
                                    )}
                                </div>
                                <p className="text-gray-500">Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
