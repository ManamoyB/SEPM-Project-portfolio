"use client"

import { useEffect, useRef } from "react"
import { Code, Palette, Database, Layout } from "lucide-react"

export default function AboutProject() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-10")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const technologies = [
    {
      name: "HTML",
      icon: <Layout className="h-8 w-8 mb-4 text-gray-700" />,
      description: "Structured markup for creating the foundation of web pages",
    },
    {
      name: "CSS",
      icon: <Palette className="h-8 w-8 mb-4 text-gray-700" />,
      description: "Styling and responsive design implementation",
    },
    {
      name: "JavaScript",
      icon: <Code className="h-8 w-8 mb-4 text-gray-700" />,
      description: "Interactive functionality and dynamic content",
    },
    {
      name: "SQL",
      icon: <Database className="h-8 w-8 mb-4 text-gray-700" />,
      description: "Database management for product and user data",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About the Project</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            This e-commerce platform was developed as part of the Software Engineering and Project Management (SEPM)
            course. The project aimed to create a fully functional online shopping experience with user authentication,
            product browsing, cart management, and order processing capabilities.
          </p>

          <p className="text-lg text-gray-700 mb-12">
            The primary objectives were to implement software engineering best practices, including agile methodologies,
            version control, and collaborative development while delivering a high-quality, user-friendly e-commerce
            solution.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-12">Technologies Used</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center">{tech.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{tech.name}</h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
