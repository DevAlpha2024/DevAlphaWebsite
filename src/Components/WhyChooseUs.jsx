import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faLayerGroup,
  faLaptopCode,
  faStar,
  faChartBar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {

    const services = [
        { id: 1, icon: faChartLine, title: "You Talk, We Listen", description: "As a Software Development agency, we strive to understand our client’s business goals first. You talk, we listen... then we throw in lots of ideas for improvement." },
        { id: 2, icon: faLayerGroup, title: "We Value Integrity", description: "We believe in doing business with honesty, integrity and a sincere heart for others. We aren’t going to sell you something you don’t need." },
        { id: 3, icon: faLaptopCode, title: "We Know SEO", description: "SEO is the art of being found in search engines like Google, Yahoo and Bing. Our clients pay for their entire website from new business leads as a direct result of our SEO efforts." },
        { id: 4, icon: faStar, title: "We Create Pro Designs", description: "We have chosen to only create one-of-a-kind web designs (no templates here). Our goal is to position your business as a top player in your industry and surpass all competitors." },
        { id: 5, icon: faChartBar, title: "We Quantify Our Success", description: "Visitor tracking allows us to quantify our success and see what is working and what is not. Monthly reports are emailed to you and full traffic data is available online anytime." },
        { id: 6, icon: faClock, title: "We Deliver On Time", description: "We know that time is money in business, so we set realistic deadlines (for ourselves and for our clients) and stick to them." },
      ];

  return (
   <>
   <section className='container md:px-32 py-16 bg-white'>
    <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl">
    Why Choose Us
    </h1>

    <div className="mt-6 grid md:grid-cols-3 grid-cols-1 items-center">
        <div className="max-md:justify-self-center">
            <img src="/Images/phone.png" alt="" className="" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 p-6 col-span-2">
      {services.map((service) => (
        <div key={service.id} className="flex items-start space-x-4">
          <FontAwesomeIcon icon={service.icon} className="text-blue-500 text-3xl" />
          <div> 
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>

    </div>
   </section>
   
   </>
  )
}
