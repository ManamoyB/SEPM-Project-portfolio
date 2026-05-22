"use client"

import { useEffect, useRef } from "react"
import { Linkedin, Mail } from "lucide-react"

export default function TeamMembers() {
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

  // Update the teamMembers array to include registration numbers and emails instead of images
  const teamMembers = [
    {
      name: "Manamoy Banerjee",
      role: "Team Member",
      regNo: "RA2211003010665",
      email: "mb4557@srmist.edu.in",
      isPrimary: true,
    },
    {
      name: "Rohan S",
      role: "Team Member",
      regNo: "RA2211003010666",
      email: "rs1086@srmist.edu.in",
    },
    {
      name: "Shashwat Mishra",
      role: "Team Member",
      regNo: "RA2211003010661",
      email: "sm4087@srmist.edu.in",
    },
    {
      name: "Bhavneet Ahuja",
      role: "Team Member",
      regNo: "RA2211003010663",
      email: "ba0218@srmist.edu.in",
    },
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Team Members</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
        </div>

        {/* Replace the rendering of team members to show text information instead of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                member.isPrimary ? "ring-2 ring-gray-800" : ""
              }`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-700 mb-1">Reg No: {member.regNo}</p>
                <p className="text-gray-700 mb-4">{member.email}</p>

                {member.isPrimary && (
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
