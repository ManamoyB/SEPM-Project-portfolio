"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Feel free to reach out to Manamoy Banerjee for academic or professional inquiries related to this project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Connect with Manamoy</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-gray-700 mr-3" />
                <a href="mailto:manamoy.banerjee@example.com" className="text-gray-700 hover:text-gray-900">
                  manamoyb@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-gray-700 mr-3" />
                <a
                  href="https://linkedin.com/in/manamoy-banerjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  linkedin.com/in/manamoyb
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Project Information</h4>
              <p className="text-gray-700">
                This portfolio showcases the E-commerce project developed for the Software Engineering and Project Management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
