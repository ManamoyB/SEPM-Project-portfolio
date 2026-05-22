"use client"

import { useEffect, useRef } from "react"
import { CheckCircle, Calendar, Target } from "lucide-react"

export default function SprintBreakdown() {
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

  const sprints = [
    {
      number: 1,
      duration: "2 weeks",
      goals: "Set up project infrastructure and implement core user functionality",
      userStories: [
        "As a user, I want to create an account so that I can access the e-commerce platform",
        "As a user, I want to browse products by category so that I can find items I'm interested in",
        "As a user, I want to search for specific products so that I can quickly find what I'm looking for",
        "As a user, I want to view detailed product information so that I can make informed purchase decisions",
      ],
      outcomes: [
        "Completed database schema design",
        "Implemented user registration and authentication",
        "Created product browsing and search functionality",
        "Developed product detail pages with images and descriptions",
      ],
    },
    {
      number: 2,
      duration: "2 weeks",
      goals: "Implement shopping cart, checkout process, and order management",
      userStories: [
        "As a user, I want to add products to my cart so that I can purchase them later",
        "As a user, I want to modify quantities in my cart so that I can adjust my order",
        "As a user, I want to complete the checkout process so that I can purchase my selected items",
        "As a user, I want to view my order history so that I can track my purchases",
      ],
      outcomes: [
        "Implemented shopping cart functionality with real-time updates",
        "Created secure checkout process with payment integration",
        "Developed order tracking and history features",
        "Conducted comprehensive testing and bug fixes",
        "Deployed the application to production environment",
      ],
    },
  ]

  return (
    <section
      id="sprints"
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sprint Breakdown</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {sprints.map((sprint) => (
            <div key={sprint.number} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-6">
                <h3 className="text-2xl font-bold">Sprint {sprint.number}</h3>
                <div className="flex items-center mt-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{sprint.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-gray-700 mr-2" />
                    <h4 className="text-xl font-semibold">Sprint Goals</h4>
                  </div>
                  <p className="text-gray-700">{sprint.goals}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">User Stories</h4>
                  <ul className="space-y-2">
                    {sprint.userStories.map((story, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{story}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Outcomes</h4>
                  <ul className="space-y-2">
                    {sprint.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
