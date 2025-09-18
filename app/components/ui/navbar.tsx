"use client"

import { FolderOpenDot, Home, User } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="flex flex-col items-center justify-center mt-4">
            <div className="bg-neutral-800 w-full max-w-2xl p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center gap-8 cursor-pointer">
                    <Home color="white" size={36} onClick={() => router.push('/')} />
                    <User color="white" size={36} onClick={() => router.push('/about')} />
                    <FolderOpenDot color="white" size={36} onClick={() => router.push('/projects')} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar