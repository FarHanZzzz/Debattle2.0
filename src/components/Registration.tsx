import { useState, type FormEvent } from 'react'
import sanjiRegister from '../assets/sanji_register.png'
import { SEGMENTS } from '../data/constants'
import { Reveal } from './ui/Reveal'
import { SectionCharacter } from './ui/SectionCharacter'
import { SectionHeader } from './ui/SectionHeader'

export function Registration() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

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

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <SectionCharacter image={sanjiRegister} name="Sanji" position="left" />
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-form">
              {submitted ? (
                <div className="py-12 text-center">
                  <p
                    className="text-xl font-medium text-purple-bright"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Registration received!
                  </p>
                  <p className="section-lead mt-3">
                    Our team will contact you shortly with confirmation details.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="label-field" htmlFor="teamName">
                      Team Name
                    </label>
                    <input
                      id="teamName"
                      name="teamName"
                      required
                      className="input-field"
                      placeholder="e.g. Straw Hat Scholars"
                    />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="segment">
                      Segment
                    </label>
                    <select id="segment" name="segment" required className="input-field">
                      <option value="">Select segment</option>
                      {SEGMENTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label-field" htmlFor="department">
                      Department
                    </label>
                    <input
                      id="department"
                      name="department"
                      required
                      className="input-field"
                      placeholder="Your department"
                    />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="speaker1">
                      Speaker 1
                    </label>
                    <input
                      id="speaker1"
                      name="speaker1"
                      required
                      className="input-field"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="speaker2">
                      Speaker 2
                    </label>
                    <input
                      id="speaker2"
                      name="speaker2"
                      required
                      className="input-field"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="speaker3">
                      Speaker 3
                    </label>
                    <input
                      id="speaker3"
                      name="speaker3"
                      required
                      className="input-field"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="email">
                      Contact Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="input-field"
                      placeholder="team@email.com"
                    />
                  </div>

                  <div>
                    <label className="label-field" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="input-field"
                      placeholder="+880..."
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Submit Registration
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
