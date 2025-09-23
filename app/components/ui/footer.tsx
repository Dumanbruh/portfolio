import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center mt-4">
            <div className="flex justify-between bg-blue-800 dark:bg-neutral-800 w-full max-w-2xl p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Socials</h2>
                <div className='flex items-center space-x-4'>
                    <a href="https://github.com/Dumanbruh" target="_blank" rel="noopener noreferrer">
                        <Image src="icons/github.svg" alt="GitHub" width={24} height={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/duman-marlambekov-2ba4b61a2/" target="_blank" rel="noopener noreferrer">
                        <Image src="icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer