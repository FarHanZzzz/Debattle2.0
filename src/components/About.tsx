import crewImage from '../assets/straw_hat_crew.png'
import { Reveal } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'
import { SectionCharacter } from './ui/SectionCharacter'

const CARDS = [
  {
    title: 'Academic Prestige',
    text: "Bangladesh's leading university debate platform, where departments prove their rhetorical mastery.",
    icon: '◆',
  },
  {
    title: 'Competitive Energy',
    text: 'High-stakes AP rounds, expert adjudication, and a prize pool worthy of champions.',
    icon: '⚔',
  },
  {
    title: 'Grand Voyage',
    text: 'Inspired by adventure and discovery, every round is a new island of ideas to conquer.',
    icon: '⚓',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding section-surface relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="About the tournament"
            title="Set sail for the ultimate clash"
            description="Debattle 2.0 returns as IUBDC's flagship intra-department tournament, a two-day parliamentary debate expedition where twenty departments navigate rigorous AP rounds across English and Bangla segments."
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="grid gap-6">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <article className="feature-card">
                  <span className="feature-card__icon" aria-hidden>
                    {card.icon}
                  </span>
                  <span className="feature-card__num">0{i + 1}</span>
                  <h3 className="feature-card__title">{card.title}</h3>
                  <p className="feature-card__text">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <SectionCharacter image={crewImage} name="Straw Hat Crew" position="right" />
        </div>
      </div>
    </section>
  )
}
