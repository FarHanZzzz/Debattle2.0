import luffyFormat from '../assets/luffy_format.png'
import { FORMAT_STEPS } from '../data/constants'
import { Reveal } from './ui/Reveal'
import { SectionCharacter } from './ui/SectionCharacter'
import { SectionHeader } from './ui/SectionHeader'

const DIRECTIONS = ['N', 'E', 'S', 'W', '★'] as const

export function Format() {
  return (
    <section id="format" className="section-padding section-surface-cool relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Tournament format"
            title="Asian Parliamentary structure"
            description="Navigate five stages of competition — from opening salvos to the championship final."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <SectionCharacter image={luffyFormat} name="Monkey D. Luffy" position="left" />
          <div className="grid gap-5">
            {FORMAT_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <article className="format-step" data-direction={DIRECTIONS[i % DIRECTIONS.length]}>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan">
                    Stage {i + 1}
                  </span>
                  <h3 className="mt-2 font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h3>
                  <p className="mt-3">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
