"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/my-image.jpeg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="block">E-commerce Project</span>
            <span className="block text-gray-300 mt-2">Software Engineering & Project Management</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive e-commerce platform developed by{" "}
            <span className="font-bold text-white">Manamoy Banerjee</span> as a front-end developer.
          </p>

          <div className="mt-10">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </section>
  )
}
