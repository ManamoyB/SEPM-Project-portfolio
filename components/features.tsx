"use client"

import { useState, useEffect, useRef } from "react"
import { ShoppingCart, User, Search, CreditCard, Package } from "lucide-react"

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)

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

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Product Browsing",
      icon: <Search className="h-12 w-12 text-gray-700" />,
      description:
        "Browse through a wide range of products with advanced filtering and sorting options. Search functionality allows users to quickly find specific items.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product%20browsing-vf9N7DtbY7pk8yKF1wZxwyiSOvVb1V.png",
    },
    {
      title: "User Authentication",
      icon: <User className="h-12 w-12 text-gray-700" />,
      description:
        "Secure user registration and login system with password recovery options. Users can manage their profiles and view order history.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user_authentication-eaUUdNfek7UdUfoGOO8eSolJrtFLcc.png",
    },
    {
      title: "Shopping Cart",
      icon: <ShoppingCart className="h-12 w-12 text-gray-700" />,
      description:
        "Add products to cart, modify quantities, and save items for later. Real-time cart updates with product availability checks.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shooping_cart-KbESdX4PUKOq0sDt7UNujW0v7pqQEv.png",
    },
    {
      title: "Checkout Process",
      icon: <CreditCard className="h-12 w-12 text-gray-700" />,
      description:
        "Streamlined checkout with multiple payment options. Address management and order review before final purchase.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/checkout_process-D4rhQjpo1i4KJWMR1EnPsA7Fjmxj1B.png",
    },
    {
      title: "Variety of Products",
      icon: <Package className="h-12 w-12 text-gray-700" />,
      description: "Shop from different items at the same store for the ease of customer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oder_tracking-B5aXSZlGbuwygO488VhllwNgVbaLFZ.png",
    },
  ]

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            The e-commerce platform includes a comprehensive set of features designed to provide a seamless shopping
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gray-800 text-white shadow-lg"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 ${activeFeature === index ? "text-white" : "text-gray-700"}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="bg-gray-100 p-6 rounded-lg h-full">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-gray-700 mb-6">{features[activeFeature].description}</p>
                <div className="flex-grow flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={features[activeFeature].image || "/placeholder.svg"}
                    alt={features[activeFeature].title}
                    className="w-full h-auto object-contain max-h-[400px] transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
