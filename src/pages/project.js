import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {

    const projectData = [{
        link: "https://sound-cloud-music-clone-react-project-1-drbdz4ox1jwn.vercel.app/",
        src: "/soundcloud.png",
        title: "SoundCloud Music Clone",
        description: "SoundCloud music clone is utilizing industry-standard encryption to secure user data and ensure a smooth login and registration experience. Leveraged Authentication API to enhance security and streamline user authentication.Developed a 'Favourite' feature allowing users to save preferred tracks and playlists for easy access, and integrated",
    },
    {
        link: "https://make-my-trip-clone-react-project-2-7lqcymx0exr0.vercel.app/",
        src: "/makemytrip.png",
        title: "Make My Trip Clone",
        description: "This project is a clone of MakeMyTrip.com, replicating the core functionalities of the popular travel booking website. It allows users to search and book flights, hotels, and holiday packages with ease. Featuring a responsive design and intuitive user interface, this clone provides a seamless experience for planning and managing travel itineraries."
    },

    {
        link: "https://nextjs-y67z.vercel.app/",
        src: "/googlemeet.png",
        title: "Google Meet Clone(Next.js)",
        description: "A Google Meet clone is a video conferencing application that replicates the key features of Google Meet. It allows users to hold video meetings, share screens, and chat in real-time. The application includes secure login, meeting scheduling, and encryption for privacy. It aims to offer a similar, streamlined video communication experience."
    }
    ]

    return (
        <div
            className="flex flex-col items-center justify-center "
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
                All Projects
            </h1>
            <h3 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 pb-10">
                React/Next.Js WebApps
            </h3>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 cursor-pointer z-50">
                {
                    projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            link={project.link}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Projects;