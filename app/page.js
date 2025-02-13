'use client'

import { motion } from 'framer-motion'
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
        </section>

        {/* Search Section */}
        <SearchSection />

        {/* Categories Section */}
        <CategoriesSection />

        {/* Featured Products Section */}
        <FeaturedProducts />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Brand Story Section */}
        <BrandStory />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
