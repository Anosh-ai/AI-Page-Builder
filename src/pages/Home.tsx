import { Hero } from '../components/sections/Hero'
import { TrustedBy } from '../components/sections/TrustedBy'
import { Statistics } from '../components/sections/Statistics'
import { DragDropBuilder } from '../components/sections/DragDropBuilder'
import { Generate } from '../components/sections/Generate'
import { Features } from '../components/sections/Features'
import { HowItWorks } from '../components/sections/HowItWorks'
import { UseCases } from '../components/sections/UseCases'
import { EnterpriseSecurity } from '../components/sections/EnterpriseSecurity'
import { Demo } from '../components/sections/Demo'
import { GlobalConnectivity } from '../components/sections/GlobalConnectivity'
import { RoiCalculator } from '../components/sections/RoiCalculator'
import { Testimonials } from '../components/sections/Testimonials'
import { Pricing } from '../components/sections/Pricing'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <DragDropBuilder />
      <Generate />
      <UseCases />
      <EnterpriseSecurity />
      <Demo />
      <GlobalConnectivity />
      <RoiCalculator />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
