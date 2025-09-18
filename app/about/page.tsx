import React from 'react'
import Wrapper from '../components/ui/wrapper'

export default function About() {
    return (
        <div className="w-full">
            <h3 className="text-base font-semibold mb-2">• About</h3>


            <div className="flex flex-col my-4 w-full">
                <h1 className="text-2xl font-bold">It's me, Duman</h1>
                <p className="mt-4 text-lg">
                    My name is Duman Marlambekov, and I am a full-stack developer with three years of experience in building dynamic web applications. I am passionate about solving complex problems and am dedicated to continuously expanding my technical skill set. Currently, I am deepening my expertise by pursuing a PhD in Computer Science at Al-Farabi Kazakh National University.
                </p>
            </div>

            <Wrapper title="Education">
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-lg font-semibold">Al-Farabi Kazakh National University</h3>
                        <p className="text-sm">Doctor of Philosophy - PhD, Computer Science</p>
                        <p className="text-sm">Sep 2025 - Jun 2028</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Astana IT University</h3>
                        <p className="text-sm">Master's degree, Computer Science and Engineering</p>
                        <p className="text-sm">Sep 2023 - Jun 2025</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Astana IT University</h3>
                        <p className="text-sm">Bachelor's degree, Software Engineering</p>
                        <p className="text-sm">Sep 2020 - Jul 2023</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}