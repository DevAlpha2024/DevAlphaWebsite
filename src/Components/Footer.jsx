import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="container bg-white">

                <div className=" bg-slate-700 py-4 grid md:grid-cols-8 max-[600px]:grid-cols-1">


                    <div className="flex flex-col gap-4 md:col-span-2">

                        <div className="flex justify-center items-center gap-4">
                            <i className="fa-brands fa-facebook-f text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>
                            <i className="fa-brands fa-x-twitter text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>
                            <i className="fa-brands fa-instagram text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>
                            <i className="fa-brands fa-linkedin-in text-white bg-[#ff770f] rounded-full p-3 transform duration-500 hover:bg-white hover:text-[#ff770f]"></i>

                        </div>


                        <a href="" >
                            <div className="flex justify-center items-center">
                                <img src="/Images/logo.png" alt="DevAlpha" className="w-32" />
                            </div>
                        </a>
                    </div>

                    <p className="md:col-span-5 md:col-end-9 max-[600px]:py-3 text-center md:text-lg text-[10px] text-white flex justify-center  items-center gap-3 ">All right reserved <li>&copy; Dev Alpha</li>  <li>Developed by <span className="text-sky-400 font-semibold">SKY</span></li>  </p>


                </div>
            </footer>

        </>
    )
}
