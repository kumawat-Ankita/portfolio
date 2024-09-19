import Image from 'next/image';
import React from 'react';

export default function Skills() {
    const imageLinks = [
        { src: "/nodejs-logo.png", url: "https://nodejs.org/" },
        { src: "/tailwind2.png", url: "https://tailwindcss.com/" },
        { src: "/nextjs-logo.png", url: "https://nextjs.org/" },
        { src: "/redux-logo.png", url: "https://redux.js.org/" },
        { src: "/jquery-logo.png", url: "https://jquery.com/" },
        { src: "/react-logo.png", url: "https://reactjs.org/" },
        { src: "/js-logo.png", url: "https://www.javascript.com/" },
        { src: "/css-logo.png", url: "https://www.w3.org/Style/CSS/Overview.en.html" },
        { src: "/java-logo.png", url: "https://www.java.com/" },
        { src: "/html-logo.png", url: "https://html.spec.whatwg.org/" }

    ];

    return (
        <div className='pb-40 pt-20 bg-gradient-to-b from-gray-800 via-black to-gray-900'>
            <p className='text-transparent text-center p-2 text-5xl font-extrabold tracking-wide bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse'>
                Crafting Apps with Cutting-Edge Technologies
            </p>
            <p className='text-gray-400 text-center pb-12 font-mono text-lg tracking-wider animate-fadeIn'>
                Bringing Ideas to Life with Precision & Innovation
            </p>


            <div className="relative w-[500px] h-[500px] mx-auto rounded-full flex items-center justify-center animate-spin-slow">
                {imageLinks.map((image, index) => (
                    <a
                        key={index}
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='absolute'
                        style={{
                            transform: `rotate(${index * (360 / imageLinks.length)}deg) translate(180px) rotate(-${index * (360 / imageLinks.length)}deg)` // Adjusted translate for gap
                        }}
                    >
                        <Image
                            src={image.src}
                            width={100}
                            height={100}
                            className='rounded-full transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-2xl hover:shadow-cyan-500/50'
                            alt="technology logo"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
