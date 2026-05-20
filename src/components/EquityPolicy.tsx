import lokiImage from '../assets/loki_equity.jpg'
import { Reveal } from './ui/Reveal'
import { SectionCharacter } from './ui/SectionCharacter'
import { SectionHeader } from './ui/SectionHeader'

const POLICIES = [
  {
    title: 'Prohibited Conduct',
    text: 'Zero tolerance for bullying, harassment, sexual harassment, intimidation, and direct or indirect discrimination.',
    icon: '🚫',
  },
  {
    title: 'Protected Attributes',
    text: 'Full protection regardless of age, gender identity, race, religion, sexual orientation, disability, or socio-economic class.',
    icon: '🛡️',
  },
  {
    title: 'Consent & Language',
    text: 'Positive consent is mandatory. Avoid slurs, graphic language, and personal attacks. Respect personal boundaries and pronouns.',
    icon: '💬',
  },
  {
    title: 'Complaint Procedures',
    text: 'Soft complaints preserve anonymity for education. Hard complaints trigger formal investigations and potential disciplinary action.',
    icon: '⚖️',
  },
]

export function EquityPolicy() {
  return (
    <section id="equity" className="section-padding section-surface-cool relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Club Rules"
            title="Equity Policy"
            description="Grounded in Respect, Guided by Equity. IUBDC is committed to maintaining a safe, inclusive, and tolerant environment."
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <SectionCharacter image={lokiImage} name="Prince Loki" position="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {POLICIES.map((policy, i) => (
              <Reveal key={policy.title} delay={i * 0.08}>
                <article className="feature-card h-full">
                  <span className="feature-card__icon" aria-hidden>
                    {policy.icon}
                  </span>
                  <span className="feature-card__num">0{i + 1}</span>
                  <h3 className="feature-card__title">{policy.title}</h3>
                  <p className="feature-card__text">{policy.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
