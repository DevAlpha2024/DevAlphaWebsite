import React from 'react'

export default function Projects() {

    const projects = [
        {id: 1, projectName:"Attendance", ProjectImg:"/Images/projects.png", projectLink:"/"},
        {id: 2, projectName:"Attendance2", ProjectImg:"/Images/projects.png", projectLink:"/"},
        {id: 3, projectName:"Gym", ProjectImg:"/Images/projects.png", projectLink:"/"},
        {id: 4, projectName:"MyStack", ProjectImg:"/Images/projects.png", projectLink:"/"},
        {id: 5, projectName:"Attendance5", ProjectImg:"/Images/projects.png", projectLink:"/"}
    ];

    return (
        <>

            <section className="container px-32 py-12 bg-white" id='Projects'>
                <h1 className="flex justify-center items-center text-[#20236b] font-bold text-4xl mt-4">
                    Our Projects
                </h1>
                <div className="grid grid-cols-3 items-center gap-10 mt-10">
                {projects.map((projects) => (
                     
                     <div className="relative project-card " key={projects.id}>
                     <img src={projects.ProjectImg} alt={projects.projectName} className="opacity-100 hover:scale-105 transition-all duration-500 ease-in-out project-img" />
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
