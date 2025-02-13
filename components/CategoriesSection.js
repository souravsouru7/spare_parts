'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
  {
    id: 'brakes',
    name: 'Brakes',
    description: 'High-performance brake systems for optimal safety',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80',
    color: 'from-red-500/20'
  },
  {
    id: 'engines',
    name: 'Engines',
    description: 'Powerful and efficient engine components',
    image: 'https://images.unsplash.com/photo-1552656967-7a0991a13906?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-blue-500/20'
  },
  {
    id: 'lights',
    name: 'Lights',
    description: 'Bright and energy-efficient lighting solutions',
    image: 'https://images.unsplash.com/photo-1591278169757-deac26e49555?w=800&auto=format&fit=crop&q=80',
    color: 'from-yellow-500/20'
  },
  {
    id: 'batteries',
    name: 'Batteries',
    description: 'Long-lasting and reliable power solutions',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&auto=format&fit=crop&q=80',
    color: 'from-green-500/20'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Premium accessories for your vehicle',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    color: 'from-purple-500/20'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export default function CategoriesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 to-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality auto parts and accessories
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gradient-to-b from-white/5 to-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative aspect-[16/9]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {category.name}
                  </h3>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-orange-500 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
