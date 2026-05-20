import zoroSchedule from '../assets/zoro_schedule.png'
import { SCHEDULE_DAY1, SCHEDULE_DAY2 } from '../data/constants'
import { Reveal } from './ui/Reveal'
import { SectionCharacter } from './ui/SectionCharacter'
import { SectionHeader } from './ui/SectionHeader'

function DayTimeline({
  day,
  label,
  items,
}: {
  day: string
  label: string
  items: readonly { time: string; event: string }[]
}) {
  return (
    <div className="schedule-day">
      <div className="schedule-day__header">
        <span className="schedule-day__badge">{day}</span>
        <h3 className="schedule-day__title">{label}</h3>
      </div>
      <ol className="schedule-day__list">
        {items.map((item, i) => (
          <li key={item.time} className="schedule-item">
            {i < items.length - 1 && <span className="schedule-item__line" aria-hidden />}
            <time className="schedule-item__time">{item.time}</time>
            <span className="schedule-item__dot" aria-hidden />
            <p className="schedule-item__event">{item.event}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" className="section-padding section-surface relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Event schedule"
            title="Two days on the Grand Line"
            description="Chart your course through preliminary battles and championship finals."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <div className="grid gap-8">
            <Reveal delay={0.05}>
              <DayTimeline day="Day 1" label="Preliminary Rounds" items={SCHEDULE_DAY1} />
            </Reveal>
            <Reveal delay={0.1}>
              <DayTimeline day="Day 2" label="Semifinals & Finals" items={SCHEDULE_DAY2} />
            </Reveal>
          </div>
          <SectionCharacter image={zoroSchedule} name="Roronoa Zoro" position="right" />
        </div>
      </div>
    </section>
  )
}
