'use client'
import React from 'react'
import { User, Mail, Lock } from 'lucide-react'

const SignUp = () => {
  return (
    <div className="bg-gradient-to-b from-black via-green-900 to-black text-white min-h-screen flex items-center justify-center py-24">
      <div className="max-w-md w-full bg-teal-950/70 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#7ed957]">Sign Up</h2>
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
            <div className="flex items-center border border-teal-700 rounded-lg mt-1">
              <User className="text-green-400 m-2" size={24} />
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border-0 rounded-lg focus:ring-2  focus:ring-teal-500  focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <div className="flex items-center border border-teal-700 rounded-lg mt-1">
              <Mail className="text-green-400 m-2" size={24} />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border-0 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <div className="flex items-center border border-teal-700 rounded-lg mt-1">
              <Lock className="text-green-400 m-2" size={24} />
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border-0 rounded-lg focus:ring-2  focus:ring-teal-500  focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirm Password</label>
            <div className="flex items-center border border-teal-700 rounded-lg mt-1">
              <Lock className="text-green-400 m-2" size={24} />
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border-0 rounded-lg focus:ring-2  focus:ring-teal-500 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#7ed957] hover:bg-[#6bc746] text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-gray-300">
          <p>Already have an account? <a href="/sign-in" className="text-[#7ed957] hover:underline">Sign In</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
