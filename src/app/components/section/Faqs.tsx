'use client'
import React from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    { question: "What is your return policy?", answer: "You can return any item within 30 days of purchase." },
    { question: "How do I track my order?", answer: "You will receive a tracking link via email once your order ships." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries." },
    { question: "How can I contact customer support?", answer: "You can reach our support team via email or phone." }
    // Add more FAQs as needed
  ]

  return (
    <div className="bg-gradient-to-b from-green-900 to-black text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white">
        <span className='text-[#7ed957]'>F</span>requently <span className='text-[#7ed957]'>A</span>sked <span className='text-[#7ed957]'>Q</span>uestions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-teal-950/70 rounded-lg">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-teal-950/70 text-white hover:bg-teal-950/80 focus:outline-none focus:ring-1 focus:ring-[#7ed957]"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <Minus className="text-[#7ed957]" size={24} /> : <Plus className="text-[#7ed957]" size={24} />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-teal-950">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
