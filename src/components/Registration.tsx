import sanjiRegister from '../assets/sanji_register.png'
import { Reveal } from './ui/Reveal'
import { SectionCharacter } from './ui/SectionCharacter'
import { SectionHeader } from './ui/SectionHeader'

export function Registration() {
  return (
    <section id="register" className="section-padding section-surface relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Registration"
            title="Join the voyage"
            description="Register your team for Debattle 2.0. Slots are limited — secure your place early."
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <SectionCharacter image={sanjiRegister} name="Sanji" position="left" />
          <Reveal delay={0.1}>
            <div className="glass-form flex flex-col items-center justify-center py-16 text-center">
              <h3
                className="mb-4 text-2xl font-bold text-white sm:text-3xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to set sail?
              </h3>
              <p className="section-lead mb-8 max-w-md">
                We're managing registrations via our official portal. Click the button below to register your team.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPv6_e032M2--PyyP2oZIUJF9N2AAPI3oyfB1sSAozGZeNgA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Register via Google Form
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
