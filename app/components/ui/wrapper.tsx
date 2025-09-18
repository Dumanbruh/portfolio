import React from 'react'


interface WrapperProps {
    title: string;
    children: React.ReactNode | React.ReactNode[];
}

const Wrapper = ({ title, children }: WrapperProps) => {
    return (
        <div className="bg-neutral-900 p-4 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-semibold mb-2">• {title}</h2>
            {children}
        </div>
    )
}

export default Wrapper