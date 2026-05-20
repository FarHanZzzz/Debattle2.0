import { useState } from 'react'
import { Reveal } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'
import championAvatar from '../assets/avatar-champion.png'
import runnerupAvatar from '../assets/avatar-runnerup.png'
import wasiaPhoto from '../assets/wasia.jpg'
import faizaPhoto from '../assets/faiza.jpg'
import nidhiPhoto from '../assets/nidhi.jpg'
import tanzilaPhoto from '../assets/tanzila.jpg'
import muhitPhoto from '../assets/muhit.png'
import zukhrufPhoto from '../assets/zukhruf.jpg'

const CHAMPIONS = [
  {
    name: 'Tanzila',
    role: 'Debattle 1.0 Champion',
    avatar: tanzilaPhoto,
    position: 'center 30%',
    quote:
      'It was an unforgettable experience from start to finish. When we first joined the debate and started practicing, I never imagined we would come this far. One of the best parts of the journey was the support and teamwork we shared throughout every round. This experience helped me become more confident in expressing my thoughts and speaking in front of others.',
  },
  {
    name: 'Zukhruf',
    role: 'Debattle 1.0 Champion & Best Speaker',
    avatar: zukhrufPhoto,
    position: 'center 40%',
    quote:
      'Winning the tournament was honestly one of the most memorable experiences for me. Debattle was one of the best things that happened to me because it made me feel more confident, empowered, and capable of expressing my thoughts without fear. Beyond the competition itself, what made it truly special was the people I met along the way. Participating helped me sharpen so many important skills: it improved my critical thinking, taught me how to speak confidently under pressure, and helped me work better as part of a team. To the newcomers who might be hesitant: just go for it!',
  },
  {
    name: 'Muhit',
    role: 'Debattle 1.0 Champion',
    avatar: muhitPhoto,
    position: 'center 25%',
    quote:
      'It was a wonderful journey. When we signed up and practiced for debate, I never thought we’d win. The most memorable part was having my teammates support each other throughout all stages. The debate helped me get the courage to speak confidently, work as a team, and take responsibilities. For the newcomers, I’d say please try it. Make a good team and go for it. You’ll learn so many things: teamwork, patience, confidence... just name it!',
  },
] as const

const RUNNERS_UP = [
  {
    name: 'Wasia Wahid',
    role: 'Debattle 1.0 Runner-up & Top Speaker',
    avatar: wasiaPhoto,
    position: 'center 25%',
    quote:
      'As someone naturally soft-spoken, debate was never something I imagined for myself. Debattle 1.0 was one of the most unexpected yet unforgettable experiences of my university life. I had only started learning debate 2–3 days before the tournament, but with the support of incredible mentors, our team went from complete newbies to runners-up among 30 teams, and I was honored to be one of the top speakers. Debattle helped me discover confidence, teamwork, and potential I never knew I had in me. Let it be your leap of faith!',
  },
  {
    name: 'Faiza Tasneem',
    role: 'Debattle 1.0 Runner-up & Top Speaker',
    avatar: faizaPhoto,
    position: 'center 20%',
    quote:
      'Debattle 1.0, which I so hesitantly joined as someone who had never debated or properly given speeches in her life, was a turning point. From stressful calls with my team before prep time to moments of triumph, everything felt worth it. It polished my critical thinking, helped me stay calmer in hectic situations, and work under pressure. My confidence was positively impacted upon receiving recognition as one of the best speakers. I realized the more I pushed myself out of my bubble, the more doubts I had about myself were diminished.',
  },
  {
    name: 'Nidhi',
    role: 'Debattle 1.0 Runner-up',
    avatar: nidhiPhoto,
    position: 'center 25%',
    quote:
      'Debattle 1.0 was a really fun and memorable experience. Before joining, I had never debated before, so it was something completely new and exciting. Through the tournament, I realized how important it is to have knowledge even about the smallest topics. I learned about teamwork, time management, logical thinking, and how to speak confidently within a limited time. To anyone feeling hesitant, just give it a try. Do not be afraid of trying something new and you will learn a lot while enjoying the journey!',
  },
] as const

export function Testimonials() {
  const [activeTab, setActiveTab] = useState<'champions' | 'runners_up'>('champions')

  const currentQuotes = activeTab === 'champions' ? CHAMPIONS : RUNNERS_UP

  return (
    <section id="testimonials" className="section-padding section-surface-clear relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute left-1/2 top-1/2 -z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-bright/5 opacity-[0.05] blur-[120px]" />

      <div className="section-container relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Voices of the Fleet"
            title="Tales from the Grand Line"
            description="Read the wholesome reflections and inspiring stories from the champions and runners-up who conquered the inaugural voyage of Debattle 1.0."
          />
        </Reveal>

        {/* Coherent Purple Tabs */}
        <Reveal delay={0.08}>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('champions')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === 'champions'
                  ? 'bg-purple-bright text-white shadow-[0_0_16px_rgba(192,132,252,0.4)]'
                  : 'bg-white/5 border border-purple-bright/20 text-ink-muted hover:border-purple-bright/50 hover:text-white'
              }`}
            >
              👑 The Champions
            </button>
            <button
              onClick={() => setActiveTab('runners_up')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === 'runners_up'
                  ? 'bg-purple-bright text-white shadow-[0_0_16px_rgba(192,132,252,0.4)]'
                  : 'bg-white/5 border border-purple-bright/20 text-ink-muted hover:border-purple-bright/50 hover:text-white'
              }`}
            >
              🥈 The Runners-up
            </button>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
          {currentQuotes.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div
                className={`flex flex-col h-full rounded-2xl p-6 bg-white/5 backdrop-blur-md border transition-all duration-500 hover:-translate-y-1 ${
                  activeTab === 'champions'
                    ? 'border-purple-bright/20 hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(251,191,36,0.1)]'
                    : 'border-purple-bright/20 hover:border-purple-bright/40 hover:shadow-[0_8px_32px_rgba(192,132,252,0.15)]'
                }`}
              >
                {/* Profile info & Picture (Highlighted) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                  <div className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 shadow-lg ${
                    activeTab === 'champions' ? 'border-gold/50 bg-gold/10' : 'border-purple-bright/60 bg-purple-bright/10'
                  }`}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: item.position || 'center' }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight">{item.name}</h4>
                    <p className={`mt-1 text-xs font-medium leading-tight ${
                      activeTab === 'champions' ? 'text-gold' : 'text-[#e9d5ff]'
                    }`}>{item.role}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-5 border-t border-purple-bright/10" />

                {/* Quote Text */}
                <div className="relative flex-grow mt-2">
                  <span className={`absolute -top-6 -left-3 text-6xl leading-none select-none font-serif ${
                    activeTab === 'champions' ? 'text-gold/20' : 'text-purple-bright/20'
                  }`}>“</span>
                  <p className="relative z-10 text-sm text-ink leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
