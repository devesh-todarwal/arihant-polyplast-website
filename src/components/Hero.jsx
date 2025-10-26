import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Delivering Premium Polymer Solutions",
      subtitle: "for Diverse Industries",
      description: "Authorized Envalior distributor with 18+ years of expertise in plastic raw materials",
      cta: "Explore Products",
      link: "/products",
      bg: "bg-gradient-to-r from-primary-600 to-primary-800"
    },
    {
      title: "Authorized Envalior Distributor",
      subtitle: "Performance & Specialty Materials",
      description: "Durethan®, Akulon®, Pocan®, Arnite®, Stanyl® and more high-performance materials",
      cta: "View Products",
      link: "/products",
      bg: "bg-gradient-to-r from-blue-700 to-blue-900"
    },
    {
      title: "Trusted Partner for Automotive Excellence",
      subtitle: "Supplying L&K and 12+ Moulders",
      description: "L&K approved grades for automotive, electrical, and industrial applications",
      cta: "Our Industries",
      link: "/industries",
      bg: "bg-gradient-to-r from-gray-800 to-gray-900"
    },
    {
      title: "Serving 75+ Customers",
      subtitle: "125+ Tons Monthly Distribution",
      description: "Reliable supply chain across Pune, Nashik, Mumbai, Baroda, and beyond",
      cta: "Contact Us",
      link: "/contact",
      bg: "bg-gradient-to-r from-green-700 to-green-900"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${slides[currentSlide].bg}`}
        >
          <div className="container-custom h-full flex items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
                <br />
                <span className="text-gray-200">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                {slides[currentSlide].description}
              </p>
              <Link
                to={slides[currentSlide].link}
                className="bg-white text-primary-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
              >
                {slides[currentSlide].cta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero

