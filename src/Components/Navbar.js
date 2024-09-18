import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='text-white backdrop-blur-md p-3 sticky top-0 z-50 bg-gradient-to-r from-slate-950 flex justify-center align-middle'>
            <ul className='flex justify-center p-2 align-middle gap-10 border-2 rounded-3xl border-gray-500 w-96 shadow-inner shadow-slate-500'>
                <li className='hover:text-slate-400 cursor-pointer'>
                    <a href="#about">About me</a>
                </li>
                <li className='hover:text-slate-400 cursor-pointer'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='hover:text-slate-400 cursor-pointer'>
                    <a href="#project">Project</a>
                </li>
            </ul>
        </div>
    );
}
