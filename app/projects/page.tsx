"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-blue-800 dark:bg-neutral-800 w-full max-w-2xl p-8 rounded-lg shadow-lg"
        >
            <h3 className="text-base font-semibold mb-2">• Projects</h3>

            <div className="flex flex-col gap-4 my-4 w-full">
                <div className="flex flex-col gap-8 bg-gray-400 dark:bg-neutral-900 p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-bold mb-1">Work projects (Astana IT University 2022-2025)</h1>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Internal university system</h3>
                        <p className="text-sm">A comprehensive web application designed to streamline and manage various university operations, including student enrollment, course management, faculty administration, and academic records. The system aims to enhance efficiency and improve the overall experience for students, faculty, and administrative staff.</p>
                        <p className="text-sm italic">Technologies: React + Typescript, Spring, PostgreSQL, Docker</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Abitur application system</h3>
                        <p className="text-sm">A web-based platform that facilitates the application process for prospective students applying to the university. The system allows applicants to create accounts, fill out application forms, upload necessary documents, and track the status of their applications. It aims to simplify the application process and improve communication between applicants and the admissions office.</p>
                        <p className="text-sm italic">Technologies: React, Spring, PostgreSQL, Docker</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Internal university system (v.2)</h3>
                        <p className="text-sm">A modernized version of the existing internal university system, incorporating new features and improvements to enhance user experience and operational efficiency. This updated system includes mobile application support and a more intuitive user interface.</p>
                        <p className="text-sm italic">Technologies: React + Typescript, React Native, Spring, PostgreSQL, Docker</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 bg-gray-400 dark:bg-neutral-900 p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-bold mb-1">Side projects\Freelance (Mossport 2023-2024)</h1>
                    <div className="flex flex-col gap-2">
                        <p>Bunch of freelance project that I've done along with my work. Websites are landing pages for mossport events. Main work is focused on creating responsive and visually appealing designs by provided figma designs and using and experimenting various front-end technologies. Currently they are redesigned and not working</p>

                        <p className="text-sm italic">Technologies: React + Typescript, Next.js, TailwindCSS, MaterialUI, ChakraUI, MongoDB, Firebase, Docker</p>

                        <ul className="list-disc list-inside space-y-1">
                            <li><a href="https://github.com/Dumanbruh/moscow-pryzki" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/moscow-pryzki</a></li>
                            <li><a href="https://github.com/Dumanbruh/mossport-spartakiada" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/mossport-spartakiada</a></li>
                            <li><a href="https://github.com/Dumanbruh/vdnh-2023" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/vdnh-2023</a></li>
                            <li><a href="https://github.com/Dumanbruh/led-moscow" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/led-moscow</a></li>
                            <li><a href="https://github.com/Dumanbruh/moscow-school-2024" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/moscow-school-2024</a></li>
                            <li><a href="https://github.com/Dumanbruh/moscow-school" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/moscow-school-2023</a></li>
                            <li><a href="https://github.com/zhaxal/moscow-ski" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/zhaxal/moscow-ski</a></li>
                            <li><a href="https://github.com/zhaxal/fizkult-day" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/zhaxal/fizkult-day</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-8 bg-gray-400 dark:bg-neutral-900 p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-bold mb-1">Personal projects</h1>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Portfolio website</h3>
                        <p className="text-sm">My personal portfolio website to showcase my skills, experience, and projects. Built using Next.js and Tailwind CSS, the website features a clean and modern design, responsive layout, and smooth animations. It includes sections for my about me, work experience, projects, and contact information.</p>
                        <p className="text-sm italic">Technologies: Next.js, TailwindCSS</p>
                        <a href="https://github.com/Dumanbruh/portfolio" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/portfolio</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Ticket booking system (on Progress)</h3>
                        <p className="text-sm">A web-based ticket booking system that allows users to browse and book tickets for various events, such as concerts, sports games, and theater performances. Pet project is maid for learning purposes and to improve my skills in full-stack development.</p>
                        <p className="text-sm italic">Technologies: Vue, Spring, RabbitMQ, PostgreSQL, Docker</p>
                        <a href="https://github.com/tickosh" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/tickosh</a>
                    </div>
                </div>
                <div className="flex flex-col gap-8 bg-gray-400 dark:bg-neutral-900 p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-bold mb-1">University projects (2020-2023)</h1>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">AirDex</h3>
                        <p className="text-sm">A decentralized application for sharing and discovering air quality data. Users can contribute data from their own sensors and access a global map of air quality information. I've done the front-end development using React and Tailwind CSS.</p>
                        <p className="text-sm italic">Technologies: React, MongoDB, Spring</p>
                        <a href="https://github.com/airdex-monitoring" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/airdex-monitoring</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Anime site</h3>
                        <p className="text-sm">A web application for browsing and discovering anime series. The site features a clean and modern design, responsive layout, and smooth animations. Users can search for anime by title, genre, and rating, and view detailed information about each series. I've done the front-end development using Next.js, firebase.</p>
                        <p className="text-sm italic">Technologies: Next.js, Nest.js, Firebase</p>
                        <a href="https://github.com/Anime-site" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Anime-site</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Majestic Sprinters</h3>
                        <p className="text-sm">A web application for e-library. Main point is to deploy the application and handle load and stress testing. I've done the back-end part, exactly the Gateway module and little bit of Auth module using Spring, Spring cloud.</p>
                        <p className="text-sm italic">Technologies: React, Firebase</p>
                        <a href="https://github.com/Dumanbruh/majestic-sprinters" target="_blank" rel="noopener noreferrer" className="text-sm underline">https://github.com/Dumanbruh/majestic-sprinters</a>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}