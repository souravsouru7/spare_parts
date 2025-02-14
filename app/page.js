'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import SearchSection from '@/components/SearchSection'
import CategoriesSection from '@/components/CategoriesSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import WhyChooseUs from '@/components/WhyChooseUs'
import BrandStory from '@/components/BrandStory'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const images = [
  {
    src: 'https://media.istockphoto.com/id/687491870/photo/car.jpg?s=1024x1024&w=is&k=20&c=rkhRfMCzIxjZic3M5IvzfYqpY1yCvzrJLv2PcC6ziQw=',
    alt: 'Modern Engine Parts',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80',
    alt: 'Performance Parts',
  },
  {
    src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&auto=format&fit=crop&q=80',
    alt: 'Car Wheels',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80',
    alt: 'Luxury Cars',
  }
]

const BackgroundParticles = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const particleCount = 20
    const newParticles = Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xMove: Math.random() * 100 - 50,
      yMove: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
          animate={{
            x: [
              `${particle.xMove}%`,
              `${particle.xMove}%`,
            ],
            y: [
              `${particle.yMove}%`,
              `${particle.yMove}%`,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  )
}

const staggerAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section id="home" className="relative w-full min-h-[100vh] overflow-hidden pt-16">
          {/* Background Image with Parallax */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&auto=format&fit=crop&q=80"
              alt="Luxury Car Workshop"
              fill
              priority
              className="object-cover brightness-50 transform scale-105"
              sizes="100vw"
            />
          </motion.div>

          {/* Animated background particles */}
          <BackgroundParticles />

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-start justify-center min-h-[calc(100vh-4rem)] text-left px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 inline-block"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm inline-block"
                >
                  Premium Quality
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Find the Best
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-orange-400 mt-2"
                >
                  Spare Parts
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-slate-200 mt-2"
                >
                  for Your Car!
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
              >
                Quality parts, perfect fit, and expert support for your vehicle maintenance needs
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#f97316' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 group backdrop-blur-sm"
                >
                  Browse Parts
                  <motion.span
                    className="inline-block ml-2"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border-2 border-orange-500/50 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Contact Us
                </motion.button>
              </motion.div>

              {/* Featured Parts Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="relative aspect-square rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    />
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium"
                    >
                      {image.alt}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />

          {/* Contact Icons */}
          <div className="fixed bottom-8 right-8 flex gap-4 z-50 md:flex-row flex-col">
            <motion.a
              href="https://wa.me/+971504868799" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all flex items-center gap-2 md:w-auto w-12 md:h-auto h-12 justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <span className="hidden md:inline text-white text-sm">WhatsApp</span>
            </motion.a>

            <motion.a
              href="mailto:munavvir@dimark.ae" // Replace with your email
              className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all flex items-center gap-2 md:w-auto w-12 md:h-auto h-12 justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
              <span className="hidden md:inline text-white text-sm">Email</span>
            </motion.a>

            <motion.a
              href="tel:+971504868799" // Replace with your phone number
              className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all flex items-center gap-2 md:w-auto w-12 md:h-auto h-12 justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span className="hidden md:inline text-white text-sm">Call</span>
            </motion.a>
          </div>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={scrollToTop}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="white" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </section>

        {/* Search Section */}
        <SearchSection />
         {/* Brand Story Section */}
         <BrandStory />


        {/* Categories Section */}
        <CategoriesSection />

        {/* Featured Products Section */}
        <FeaturedProducts />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

       
        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
