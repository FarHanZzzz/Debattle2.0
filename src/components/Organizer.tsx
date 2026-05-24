import { useState } from 'react'
import iubdcLogo from '../assets/iubdc-logo.png'
import { Reveal } from './ui/Reveal'

export function Organizer() {
  const [showContact, setShowContact] = useState(false)
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
                href="https://linktr.ee/IUB_Debate_Club"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                Linktree
              </a>
              <button 
                onClick={() => setShowContact(!showContact)}
                className="btn-primary text-xs transition-all duration-300"
              >
                {showContact ? 'Hide Contacts' : 'Contact Us'}
              </button>
              {showContact && (
                <div className="mt-4 w-full flex flex-col items-center gap-2 text-sm text-white/90">
                  <span>📞 +8801723241326 — Sudeepta Mohi</span>
                  <span>📞 +8801712395402 — Adrika Das Asha</span>
                  <span>📞 +8801725289336 — Fatema Mim</span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
