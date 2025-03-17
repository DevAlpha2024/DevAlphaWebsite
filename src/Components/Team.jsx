import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Team() {

    const cards = [
        { id: 1, title: "Abhijeet Mali", image: "/Images/Abhijeet.jpg", post: "Founder", insta:"https://www.instagram.com/abhi_mali_2003?igsh=OHUzaTBmbjNkbzJk", fb:"https://www.facebook.com/share/12LzMEUYDcf/", linkedin:"https://www.linkedin.com/in/abhijeet-mali-16b6b6280/"},
        { id: 2, title: "Sai Chigare", image: "/Images/Sai.jpg", post: "CEO", insta:"https://www.instagram.com/sai_chigare?igsh=OHF1YjQxcDBtcDNh", fb:"https://www.facebook.com/", linkedin:"https://www.linkedin.com/in/sai-chigare-404370259/?originalSubdomain=in"},
        { id: 3, title: "Vinayak Doke", image: "/Images/Vinayak.jpg", post: "Front-end Developer", insta:"https://www.instagram.com/vinayak19636?igsh=MWc3NmI0OXppdGwxZQ==", fb:"https://www.facebook.com/", linkedin:"https://www.linkedin.com/in/vinayak-doke-b54301322/"},
        { id: 4, title: "Disha Shinde", image: "/Images/Disha.jpg", post: "UI/UX Designer", insta:"https://www.instagram.com/dishaa2._?igsh=dGhjMmxmcmxwZnk4", fb:"https://www.facebook.com/", linkedin:"/"},
        { id: 5, title: "Soyam Maji", image: "/Images/soyam.jpg", post: "Team Member", insta:"https://www.instagram.com/abhimanyu_27_s?igsh=cGUwN3dhbmJwbzJ3", fb:"https://www.facebook.com/", linkedin:"https://www.linkedin.com/in/soyam-maji-527b29285/"},
    ];

    return (
        <section className='container md:px-32 py-16 bg-white' id='team'>
            <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl max-md:text-center">
                Our Team
            </h1>
            <div className="flex justify-center items-center md:min-h-screen max-md:mt-10 bg-white">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2.6}
                    spaceBetween={-10}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1.2,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-full max-w-6xl"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id} className="flex justify-center">
                            <div className="relative bg-[#00293b] rounded-2xl shadow-xl border border-gray-700 transform transition-all duration-300 hover:scale-105">
                                <div className="relative">
                                    <img src={card.image} alt={card.title || `DevAlpha Members`} className="rounded-2xl h-96 w-full object-cover" />
                                    <div className="w-full absolute flex justify-center items-center -mt-16">
                                        <div className="flex justify-center items-center gap-4">
                                            <a href={card.fb} target='_blank' rel="noopener noreferrer">
                                                <i className="fa-brands fa-facebook-f text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>
                                            </a>
                                            <a href={card.insta} target='_blank' rel="noopener noreferrer">
                                                <i className="fa-brands fa-instagram text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>
                                            </a>
                                            <a href={card.linkedin} target='_blank' rel="noopener noreferrer">
                                                <i className="fa-brands fa-linkedin-in text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-center text-lg font-semibold mt-2 text-green-500">
                                    {card.title}
                                </h3>
                                <p className="pb-3 text-xl text-center font-bold text-sky-600">
                                    {card.post || "Team Member"}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
