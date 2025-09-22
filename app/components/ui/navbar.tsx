"use client"

import { FolderOpenDot, Home, User } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from 'framer-motion';
import { ThemeSwitcher } from './theme-switcher';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="flex flex-col items-center justify-center mt-4">
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-neutral-800 dark:bg-neutral-800 w-full max-w-2xl p-8 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-8 cursor-pointer flex-1">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            whileTap={{ scale: 0.95, rotate: 0 }}
                            transition={{ type: 'keyframes', stiffness: 300 }}
                        >
                            <Home color="white" size={36} onClick={() => router.push('/')} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            whileTap={{ scale: 0.95, rotate: 0 }}
                            transition={{ type: 'keyframes', stiffness: 300 }}
                        >
                            <User color="white" size={36} onClick={() => router.push('/about')} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            whileTap={{ scale: 0.95, rotate: 0 }}
                            transition={{ type: 'keyframes', stiffness: 300 }}
                        >
                            <FolderOpenDot color="white" size={36} onClick={() => router.push('/projects')} />
                        </motion.div>
                    </div>
                    <ThemeSwitcher />
                </div>
            </motion.div>
        </nav>
    )
}

export default Navbar