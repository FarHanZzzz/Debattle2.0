import namiPrizes from '../assets/nami_prizes.png'
import { PRIZES, PRIZE_POOL_TOTAL } from '../data/constants'
import { PrizeCard } from './prizes/PrizeCard'
import { Reveal } from './ui/Reveal'
import { SectionCharacter } from './ui/SectionCharacter'
import { SectionHeader } from './ui/SectionHeader'

const ORDER: Record<string, 'treasure-card--first' | 'treasure-card--second' | 'treasure-card--third'> = {
  'Runners-up': 'treasure-card--second',
  Champions: 'treasure-card--first',
  'Individual Awards': 'treasure-card--third',
}

const RANKS: Record<string, string> = {
  Champions: '1st Place',
  'Runners-up': '2nd Place',
  'Individual Awards': 'Honors',
}

export function Prizes() {
  const sorted = [...PRIZES].sort((a, b) => {
    const order = ['Runners-up', 'Champions', 'Individual Awards']
    return order.indexOf(a.tier) - order.indexOf(b.tier)
  })

  return (
    <section id="prizes" className="section-padding section-surface-prize relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Prize pool"
            title="Treasures of the tournament"
            description="Awarded across team championships and individual honors — a bounty worthy of the Grand Line."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <SectionCharacter image={namiPrizes} name="Nami" position="left" />
          <div>
            <Reveal delay={0.08}>
              <div className="prize-pool-hero mx-auto max-w-xl">
                <p className="treasure-rank text-gold">Total bounty</p>
                <p className="prize-pool-amount mt-2">{PRIZE_POOL_TOTAL}</p>
              </div>
            </Reveal>

            <div className="treasure-grid mt-8">
              {sorted.map((prize, i) => (
                <PrizeCard
                  key={prize.tier}
                  rank={RANKS[prize.tier] ?? 'Award'}
                  tier={prize.tier}
                  highlight={'highlight' in prize ? prize.highlight : undefined}
                  items={prize.items}
                  orderClass={ORDER[prize.tier]}
                  delay={i * 0.12}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
