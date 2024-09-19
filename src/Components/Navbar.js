import React from 'react';

export default function Navbar() {
    const navItems = {
        About: "#about",
        Skills: "#skills",
        Projects: "#project",

    };
    return (
        <div className='text-white backdrop-blur-md p-3 sticky top-0 z-50 bg-gradient-to-r from-slate-950 flex justify-center align-middle'>
            <nav className="flex justify-center  align-middle gap-10 border-2 rounded-3xl border-gray-500 w-96 shadow-inner shadow-slate-500">
                <ul className='flex justify-center p-2 align-middle gap-10'>
                    {Object.entries(navItems).map(([label, link], index) => (
                        <li key={index} className='hover:text-slate-400 cursor-pointer'>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
