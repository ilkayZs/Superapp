'use client'
import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-black to-green-900 text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-[#7ed957]">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-[#7ed957] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7ed957] hover:bg-[#6bc746] text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="text-[#7ed957] mr-4" size={24} />
              <span className="text-gray-300">+1 (222) 222-2222</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#7ed957] mr-4" size={24} />
              <span className="text-gray-300">contact@youremail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#7ed957] mr-4" size={24} />
              <span className="text-gray-300">123 SuperApp Street, Tech City, USA</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4312956742567!2d-122.41941648468187!3d37.77492927975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4a6cd8b77%3A0x21e107d695730b0f!2sTech%20City!5e0!3m2!1sen!2sus!4v1669398324954!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
