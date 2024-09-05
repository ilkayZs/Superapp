
import FAQs from '../components/section/Faqs'
import Hero from '../components/section/Hero'
import PricingTable from '../components/section/Pricing'

function page() {
  return (
    <main>
      <Hero />
      <PricingTable/>
      <FAQs/>
      {/* Other page sections */}
    </main>
  )
}

export default page