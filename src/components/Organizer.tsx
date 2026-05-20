import iubdcLogo from '../assets/iubdc-logo.png'
import { Reveal } from './ui/Reveal'

export function Organizer() {
  return (
    <section id="organizer" className="section-padding section-surface-clear relative">
      <div className="section-container relative z-[5]">
        <Reveal>
          <div className="organizer-panel mx-auto max-w-2xl">
            <div className="organizer-panel__logo-wrap">
              <img
                src={iubdcLogo}
                alt="IUB Debate Club logo"
                className="h-14 w-auto object-contain sm:h-16"
                style={{ filter: 'drop-shadow(0 0 16px rgba(192, 132, 252, 0.8))' }}
              />
            </div>
            <p className="eyebrow mt-6">Organized by</p>
            <h2 className="heading-section mt-2 text-white">IUB Debate Club</h2>
            <p className="organizer-panel__text mx-auto mt-4 max-w-md">
              The Independent University, Bangladesh Debate Club cultivates parliamentary
              excellence, hosts national tournaments, and trains the next generation of
              Bangladesh&apos;s finest debaters.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                Instagram
              </a>
              <a href="mailto:debate@iub.edu.bd" className="btn-primary text-xs">
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
