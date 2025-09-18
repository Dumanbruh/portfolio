import React from 'react'
import Wrapper from './ui/wrapper'

const Experience = () => {
    return (
        <div className="space-y-4">
            <Wrapper title='Work Experience'>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <span className="font-bold">Internship</span> at Astana IT University (2022 - 2023)
                        <p className="text-sm">- Developed and maintained web application for abiturents</p>
                    </li>
                    <li>
                        <span className="font-bold">Full-stack Developer</span> at Astana IT University (2023 - 2025)
                        <p className="text-sm">- Development and support of the digital university's internal system </p>
                        <p className="text-sm">- Integration with external systems (GOVTECH)</p>
                        <p className="text-sm">- Integration with the internal system for managing LDAP accounts</p>
                        <p className="text-sm">- Writing complex and custom queries for reports</p>
                    </li>
                </ul>
            </Wrapper>

            <Wrapper title='Skills & Technologies'>
                <ul className="list-disc list-inside space-y-2">
                    <li>Have a 2+ years of developing in Java, JavaScript, TypeScript, and Python.</li>
                    <li>Experienced with frameworks and libraries such as React, Next.js and Spring.</li>
                    <li>Skilled in database management with PostgreSQL, MongoDB, and MySQL.</li>
                    <li>Familiar with cloud platforms like AWS and Azure.</li>
                    <li>Strong understanding of RESTful API design and development.</li>
                    <li>Knowledgeable in version control using Git and GitHub.</li>
                </ul>
            </Wrapper>
        </div>
    )
}

export default Experience