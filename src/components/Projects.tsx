export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      githubLink: "#",
      liveLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-sm opacity-75">Project Screenshot</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    className="flex-1 text-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}