import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ src, title, description, link }) => {
    return (
        <div className="m-7 text-white backdrop-blur-md border-blue-900 rounded-lg shadow-lg border max-w-sm">
            <Link href={link}>
                <div className="relative">
                    <Image
                        src={src}
                        alt={title}
                        width={450}
                        height={300}
                        className="object-cover rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="mt-2 text-gray-300">{description}</p>
                </div>
            </Link>
        </div >
    );
};

export default ProjectCard;
