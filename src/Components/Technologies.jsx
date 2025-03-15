import React from 'react'

export default function Technologies() {

    const tech = [
        { id: 1, imgpath: '/Images/andriod.png', title: "Android" },
        { id: 2, imgpath: '/Images/Kotlin_Icon.png', title: "Kotlin" },
        { id: 3, imgpath: '/Images/image.png', title: "Jetpack" },
        { id: 4, imgpath: '/Images/Android_Studio.png', title: "Android Studio" },
        { id: 5, imgpath: '/Images/Firebase-logo-02.png', title: "Firebase" },

    ];

    return (
        <>
            <section className="container md:px-32 px-4 py-16 bg-white">
                <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl mt-4 max-md:text-center">
                    Technologies we work with
                </h1>

                <div className="grid md:grid-cols-3 grid-cols-2 mt-10 items-center gap-y-6 ">
                    {tech.map((tech) => (

                        <div key={tech.id} className="justify-self-center tech-card">
                            <img src={tech.imgpath} alt={tech.title} className="md:grayscale-100 transition duration-300 ease-in-out hover:grayscale-0 w-32 tech-img" />
                            <p className="text-center text-lg mt-2">{tech.title}</p>
                        </div>

                    ))}

                </div>
            </section>

        </>
    )
}
