import Image from 'next/image';
import React from 'react';

export default function Skills() {
    const images = ["/react-removebg-preview.png",
        "/58480979cef1014c0b5e4901-removebg-preview.png",
        "/download__2_-removebg-preview.png",
        "/nextjs-boilerplate-logo-removebg-preview.png",
        "/download__3_-removebg-preview.png",
        "/js-removebg-preview.png",
        "/css-removebg-preview.png",
        "/download__3_-removebg-preview.png",
        "/tailwind-removebg-preview.png",
        "/html-removebg-preview.png",
        "/react-removebg-preview.png",
        "/download__2_-removebg-preview.png",
        "/download__5_-removebg-preview.png",
        "/js-removebg-preview.png",
        "/nextjs-boilerplate-logo-removebg-preview.png",
        "/58480979cef1014c0b5e4901-removebg-preview.png"
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
