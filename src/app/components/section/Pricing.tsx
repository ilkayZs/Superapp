'use client'
import React from 'react'
import { CheckCircle } from 'lucide-react'

const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: '$9/month',
    features: ['10 Projects', '5 GB Storage', 'Basic Support'],
    popular: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$29/month',
    features: ['Unlimited Projects', '50 GB Storage', 'Priority Support'],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Contact Us',
    features: ['Custom Projects', 'Unlimited Storage', 'Dedicated Support'],
    popular: false,
  },
]

function PricingTable() {
  return (
    <div className=" bg-green-900 text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-12 text-white">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`relative bg-green-800 bg-opacity-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${plan.popular ? 'border-2 border-[#7ed957]' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#7ed957] text-black font-semibold px-4 py-2 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6 text-[#7ed957]">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 mb-2">
                    <CheckCircle className="text-[#7ed957] mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#7ed957] hover:bg-[#6bc746] text-black font-semibold py-3 rounded-lg transition duration-300">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingTable
