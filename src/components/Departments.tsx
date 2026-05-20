import { DEPARTMENTS } from '../data/constants'
import { Reveal } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

export function Departments() {
  return (
    <section id="departments" className="section-padding section-surface-lavender relative">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Participating departments"
            title="All hands on deck"
            description="Twenty departments from across IUB — each bringing their finest debaters to the clash."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((dept, i) => (
            <Reveal key={dept} delay={(i % 6) * 0.04}>
              <div className="dept-card group">
                <span className="dept-card__badge">{String(i + 1).padStart(2, '0')}</span>
                <span className="dept-card__name">{dept}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
