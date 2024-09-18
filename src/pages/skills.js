import Image from 'next/image';
import React from 'react';

export default function Skills() {
    const images = ["/react-image.png",
        "/java-logo.png",
        "/nodejs-logo.png",
        "/nextjs-logo.png",
        "/jquery-logo.png",
        "/js-logo.png",
        "/css-logo.png",
        "/jquery-logo.png",
        "/tailwind-logo.png",
        "/html-logo.png",
        "/react-logo.png",
        "/redux-logo.png",
        "/js-logo.png",
        "/nextjs-logo.png",
        "/java-logo.png"
    ]
    return (
        <div className='pb-40 pt-20'>
            <p className='text-white text-center pt-20 p-2 text-3xl'>
                Making apps with modern technologies
            </p>
            <p className='text-white text-center pb-10 font-mono'>
                Never miss a task, deadline or idea
            </p>
            <div className='flex justify-center align-middle gap-10 pb-4 flex-wrap'>
                {images.map((image, index) => (
                    <Image
                        src={image}
                        key={index}
                        width={100}
                        height={96}
                        className='w-30 h-24 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg'
                        alt="image"
                    />
                ))}
            </div>
        </div>
    );
}
