"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Layout, GitBranch, Users } from "lucide-react"

export default function ManamoysRole() {
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

  const contributions = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-10 w-10 text-gray-700" />,
      description:
        "Led the design and implementation of responsive user interfaces, ensuring a seamless shopping experience across all devices.",
    },
    {
      title: "Database Integration",
      icon: <Database className="h-10 w-10 text-gray-700" />,
      description:
        "Designed and implemented the SQL database schema, created efficient queries for product filtering and user management.",
    },
    {
      title: "Feature Implementation",
      icon: <Code className="h-10 w-10 text-gray-700" />,
      description:
        "Developed core features including the shopping cart, checkout process, and user authentication system.",
    },
    {
      title: "Sprint Planning",
      icon: <GitBranch className="h-10 w-10 text-gray-700" />,
      description:
        "Organized sprint planning sessions, managed the product backlog, and facilitated daily stand-up meetings.",
    },
    {
      title: "Team Coordination",
      icon: <Users className="h-10 w-10 text-gray-700" />,
      description: "Coordinated with team members to ensure consistent code quality and timely delivery of features.",
    },
  ]

  return (
    <section
      id="role"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Manamoy's Role</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 text-center">
            As the primary developer on this project, Manamoy Banerjee took on multiple responsibilities across both
            technical implementation and project management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{contribution.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">{contribution.title}</h3>
              <p className="text-gray-600 text-center">{contribution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
