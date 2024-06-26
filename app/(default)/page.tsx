export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import OurTeam from '@/components/OurTeam'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <OurTeam />
      <ContactForm />
    </>
  )
}
