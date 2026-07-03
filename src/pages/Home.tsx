import { LandingBackground } from '../components/layout/LandingBackground'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Statistics } from '../components/sections/Statistics'
import { DragDropBuilder } from '../components/sections/DragDropBuilder'
import { Generate } from '../components/sections/Generate'
import { Features } from '../components/sections/Features'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Demo } from '../components/sections/Demo'
import { Testimonials } from '../components/sections/Testimonials'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function Home() {
  return (
    <div className="relative min-h-screen">
      <LandingBackground />
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <DragDropBuilder />
        <Generate />
        <Features />
        <HowItWorks />
        <Demo />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
