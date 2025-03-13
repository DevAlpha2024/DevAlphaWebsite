import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Team() {

    const cards = [
        { id: 1, title: "Abhijeet Mali" , image:"/Images/sky.JPG", post:"CEO"},
        { id: 2, title: "Sai Chigare" , image:"/Images/sky.JPG", post:"CEO"},
        { id: 3, title: "Vinayak Doke", image:"/Images/sky.JPG" , post:"CEO"},
        { id: 4, title: "Disha Shinde", image:"/Images/sky.JPG", post:"CEO" },
        { id: 5, title: "Soyam Maji", image:"/Images/sky.JPG", post:"CEO" },
    ];

    return (

        <>
            <section className='container px-32 py-16 bg-white' id='team'>
                <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl">
                    Our Team
                </h1>
                <div className="flex justify-center items-center min-h-screen bg-white">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2.6} // Show exactly 3 slides
                        spaceBetween={-10} // Adjust spacing for balance
                        loop={true}
                        autoplay={{
                            delay: 5000, // Auto-scroll every 5 sec
                            disableOnInteraction: false, // Keep autoplay after interaction
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 1.2,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="w-full max-w-6xl "
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id} className="flex justify-center">
                                <a href={card.projectLink} target='_blank' className="">
                                    <div className="relative bg-[#00293b] rounded-2xl shadow-xl border border-gray-700 transform transition-all duration-300 hover:scale-105">

                                        <img src={card.image} alt="" className="rounded-2xl" />
                                        <h3 className="text-center text-lg font-semibold mt-2 text-green-500">
                                            {card.title}
                                        </h3>
                                        <p className="pb-3 text-xl text-center font-bold text-sky-600 ">{card.post}</p>

                                    </div>
                                </a>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        </>
    )
}
