'use client'
import React from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-green-900 to-black text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-[#7ed957]">
              About Us
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              We are passionate about delivering cutting-edge technology solutions that empower businesses to grow and succeed. Our team of experts works tirelessly to create innovative products and services that meet the evolving needs of our clients.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle className="text-[#7ed957] mr-2" size={24} />
                <span>Experienced team with expertise in various industries</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-[#7ed957] mr-2" size={24} />
                <span>Customer-centric approach to ensure success</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-[#7ed957] mr-2" size={24} />
                <span>Innovative solutions tailored to your business needs</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-[#7ed957] mr-2" size={24} />
                <span>Commitment to quality and continuous improvement</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src="/assets/product2.png"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-4 text-[#7ed957]">Our Mission</h3>
          <p className="text-lg text-gray-300 mb-8">
            Our mission is to empower businesses to thrive in the digital age by providing the tools and expertise they need to innovate, scale, and succeed.
          </p>
          <p className="text-lg text-gray-300">
            We believe in the transformative power of technology and are committed to building solutions that make a difference. Whether you&apos;re a startup or an established enterprise, we&apos;re here to help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
