import React from 'react'

export default function Projects() {

    const projects = [
        {id: 1, projectName:"ClassAttendanceTracker", ProjectImg:"/Images/1.png", projectLink:"https://github.com/"},
        {id: 2, projectName:"MyStick", ProjectImg:"/Images/2.png", projectLink:"https://github.com/"},
        {id: 3, projectName:"Hidden Chat App", ProjectImg:"/Images/3.png", projectLink:"https://github.com/"},
        {id: 4, projectName:"MyStack", ProjectImg:"/Images/projects.png", projectLink:"https://github.com/"},
        {id: 5, projectName:"Attendance5", ProjectImg:"/Images/projects.png", projectLink:"https://github.com/"}
    ];

    return (
        <>

            <section className="container md:px-32 px-4 py-12 bg-white" id='Projects'>
                <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl mt-4 max-md:text-center">
                    Our Projects
                </h1>
                <div className="grid md:grid-cols-3 items-center gap-10 mt-10">
                {projects.map((projects) => (
                     
                     <div className="relative project-card " key={projects.id}>
                     <img src={projects.ProjectImg} alt={`DevAlpha-`+projects.projectName} className="opacity-100 rounded-2xl hover:scale-105 transition-all duration-500 ease-in-out project-img" />
                     <div className="middle flex flex-col justify-center items-center opacity-0 absolute top-[50%] left-[50%] translate-[-50%] transition-all duration-500 ease-in-out">
                         <p className="font-semibold text-[#20236b] text-xl">{projects.projectName}</p>
                         <div className="px-3 py-2 bg-blue-500 rounded-full text-white"><a href={projects.projectLink} className=""><i class="fa-solid fa-link"></i></a></div>
                     </div>
                 </div>

                ))

                }

                   
                </div>
            </section>

        </>
    )
}
