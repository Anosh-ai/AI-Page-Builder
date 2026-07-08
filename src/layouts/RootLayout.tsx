import { Outlet, ScrollRestoration } from 'react-router-dom'
import { LandingBackground } from '../components/layout/LandingBackground'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LandingBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
