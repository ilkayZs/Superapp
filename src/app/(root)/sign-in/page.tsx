'use client'
import React from 'react'
import { Lock, User } from 'lucide-react'

const SignIn = () => {
  return (
    <div className="bg-gradient-to-b from-black to-green-900 text-white min-h-screen flex items-center justify-center py-24">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#7ed957]">Sign In</h2>
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
            <div className="flex items-center border border-gray-700 rounded-lg mt-1">
              <User className="text-green-400 m-2" size={24} />
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border-0 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <div className="flex items-center border border-gray-700 rounded-lg mt-1">
              <Lock className="text-green-400 m-2" size={24} />
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border-0 rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#7ed957] hover:bg-[#6bc746] text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center text-gray-300">
          <p>Don&apos;t have an account? <a href="/sign-up" className="text-[#7ed957] hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
