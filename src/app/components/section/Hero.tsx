'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const testimonials = [
  { id: 1, text: "SuperApp transformed our business processes!", author: "Jane Doe, CEO" },
  { id: 2, text: "The best platform for rapid app development.", author: "John Smith, CTO" },
  { id: 3, text: "Intuitive and powerful. Highly recommended!", author: "Alice Johnson, Developer" },
  { id: 4, text: "Customer support is top-notch!", author: "Bob Brown, Project Manager" },
]

const features = [
  { id: 1, title: "Easy Integration", description: "Seamlessly integrate with your existing systems." },
  { id: 2, title: "Scalable Solutions", description: "Grow with flexible and scalable solutions." },
  { id: 3, title: "24/7 Support", description: "Get help whenever you need it with our round-the-clock support." },
]

const mission = {
  title: "Our Mission",
  text: "At SuperApp, our mission is to revolutionize the way businesses operate by providing innovative digital solutions that drive success. We are committed to delivering cutting-edge technology that enhances productivity, fosters growth, and ensures a seamless experience. Our goal is to be a trusted partner in your digital transformation journey, making your success our mission."
}

const successStories = [
  { id: 1, stat: "150+", label: "Successful Projects" },
  { id: 2, stat: "99%", label: "Client Satisfaction Rate" },
  { id: 3, stat: "10,000+", label: "Active Users" },
  { id: 4, stat: "24/7", label: "Support Available" },
]



function Hero() {
  return (
    <div className="bg-gradient-to-b from-black to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Empower Your Digital Journey with <span className="text-[#7ed957]">SuperApp</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Transform your ideas into reality with our cutting-edge platform. Build, deploy, and scale your applications with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"https://www.megalig.com"}
                target="_blank"
                className="bg-[#7ed957] hover:bg-[#6bc746] text-black font-semibold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/about" className="border border-[#7ed957] text-[#7ed957] hover:bg-[#7ed957] hover:text-black font-semibold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src="/assets/product2.png"
              alt="SuperApp Hero Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-center mb-12 text-[#7ed957]">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                <h3 className="text-4xl font-bold text-[#7ed957]">{story.stat}</h3>
                <p className="text-gray-300 mt-2">{story.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-36"
        >
          <div className='justify-center items-center text-center'>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Ignite Your Vision with SuperApp <span className="text-[#7ed957]">SuperApp</span>
            </h1>
            <p className="text-lg text-gray-300">
            Unleash the potential of your ideas with our innovative platform. Seamlessly design, develop, and elevate your applications to new heights with unparalleled ease and efficiency. Empower your digital journey and watch your concepts come to life.
            </p>
            <div className="relative h-64 sm:h-80 md:h-94">
            <Image
              src="/assets/product2.png"
              alt="SuperApp Hero Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          </div>
         
        </motion.div>
        {/* Features Section */}
        <div className="mt-44">
          <h2 className="md:text-5xl text-3xl font-bold text-center mb-12 text-[#7ed957]">Why Choose Us?</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <div key={feature.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-green-900 hover:text-white">
                <CheckCircle className="text-[#7ed957] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Our Mission Section */}
        <h2 className="md:text-5xl text-3xl font-bold text-center mb-12 text-white mt-24">{mission.title}</h2>
        <div className="mt-4 bg-gray-800 rounded-lg flex">         
            <p className="text-xl p-2 text-gray-300 text-center">{mission.text}</p>
        </div>

        {/* Sliding Testimonials */}
        <div className="mt-44 overflow-hidden">
          <h2 className='text-3xl md:text-6xl text-white text-center font-bold'>Client Testimonials</h2>
          <h3 className='text-base text-gray-300 text-center mb-8'>SuperApp is trusted by customers</h3>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15, // Faster scroll
                ease: "linear",
              },
            }}
          >
            {testimonials.concat(testimonials).map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="inline-block mx-4"
                whileHover={{ scale: 1.05 }}  // Adds scaling on hover
              >
                <div className="bg-green-800 bg-opacity-50 p-6 rounded-lg w-80 h-48 flex flex-col justify-between">
                  <p className="text-white mb-4 overflow-hidden text-ellipsis line-clamp-3">{testimonial.text}</p>
                  <div className='flex gap-3 flex-row'>
                    <Image
                      width={30}
                      height={30}
                      className='rounded-full'
                      src="/assets/logo.png"
                      alt='profile picture'
                    />
                    <p className="text-[#7ed957] font-semibold">{testimonial.author}</p>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
