import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { CanvasBackground } from './components/background/CanvasBackground'
import { SectionCharacterLayer } from './components/background/SectionCharacterLayer'
import { SectionTransitions } from './components/background/SectionTransitions'
import { About } from './components/About'
import { Departments } from './components/Departments'
import { Footer } from './components/Footer'
import { EquityPolicy } from './components/EquityPolicy'
import { Format } from './components/Format'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Organizer } from './components/Organizer'
import { Prizes } from './components/Prizes'
import { Registration } from './components/Registration'
import { Schedule } from './components/Schedule'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { CustomCursor } from './components/ui/CustomCursor'
import { ScrollSectionProvider } from './context/ScrollSectionContext'
import { useGsapSections } from './hooks/useGsapSections'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function SiteContent() {
  useSmoothScroll()
  useGsapSections()

  return (
    <>
      <CanvasBackground />
      <SectionTransitions />
      <SectionCharacterLayer />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Format />
        <Stats />
        <EquityPolicy />
        <Departments />
        <Schedule />
        <Prizes />
        <Registration />
        <Gallery />
        <Testimonials />
        <Organizer />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      {!loading && (
        <ScrollSectionProvider>
          <div className="relative min-h-screen">
            <SiteContent />
          </div>
        </ScrollSectionProvider>
      )}
      <Analytics />
    </>
  )
}
