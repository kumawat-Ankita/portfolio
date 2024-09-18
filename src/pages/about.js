"use client";

import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();

    const moveToProject = () => {
        router.push('/#project');
    };

    return (
        <div className='p-20 m-4 text-white'>
            <p className='pb-16 text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500'>
                I'm Ankita Kumawat
            </p>
            <h1 className='text-6xl font-bold w-1/2'>
                Providing <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>the best</span> project experience
            </h1>
            <p className='w-1/2 pt-10 pb-10 text-lg text-slate-400'>
                My name is Ankita Kumawat. I'm a dynamic full-stack developer interning at Newton School.
                Proficient in React.js, JavaScript, Java, HTML, CSS, Bootstrap, and Tailwind CSS.
                I specialize in crafting engaging web applications for optimal user experiences.
                Committed to ongoing learning and development in web development.
            </p>
            <button onClick={moveToProject} className='border-2 border-slate-600 rounded-3xl pl-4 pr-4 p-2 shadow-inner shadow-slate-600'>
                See My Projects
            </button>
        </div>
    );
}
