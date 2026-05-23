import luffyFormat from '../assets/luffy_format.png'
import zoroSchedule from '../assets/zoro_schedule.png'
import namiPrizes from '../assets/nami_prizes.png'
import sanjiRegister from '../assets/sanji_register.png'
import robinGallery from '../assets/robin_gallery.png'
import lokiEquity from '../assets/loki_equity.jpg'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Format', href: '#format', character: 'Monkey D. Luffy', image: luffyFormat },
  { label: 'Equity', href: '#equity', character: 'Prince Loki', image: lokiEquity },
  { label: 'Schedule', href: '#schedule', character: 'Roronoa Zoro', image: zoroSchedule },
  { label: 'Prizes', href: '#prizes', character: 'Nami', image: namiPrizes },
  { label: 'Register', href: '#register', character: 'Sanji', image: sanjiRegister },
  { label: 'Gallery', href: '#gallery', character: 'Nico Robin', image: robinGallery },
] as const

export const FORMAT_STEPS = [
  {
    title: '3v3 Asian Parliamentary',
    description: 'Teams of three compete in structured AP rounds with government and opposition benches.',
  },
  {
    title: 'Bangla & English Segments',
    description: 'Dual-language tracks celebrate rhetoric across Bengali and English parliamentary debate.',
  },
  {
    title: 'Preliminary Rounds',
    description: 'Opening day features pool matches across departments to determine advancing teams.',
  },
  {
    title: 'Semifinals',
    description: 'Top teams clash in high-stakes elimination rounds on day two.',
  },
  {
    title: 'Finals',
    description: 'The Grand Line culminates in championship debates before the full house.',
  },
] as const

export const STATS = [
  { value: 60, suffix: '+', label: 'Teams' },
  { value: 180, suffix: '+', label: 'Debaters' },
  { value: 40, suffix: '+', label: 'Adjudicators' },
  { value: 20, suffix: '', label: 'Departments' },
  { value: 50000, prefix: 'BDT ', label: 'Prize Pool', format: true },
] as const

export const DEPARTMENTS = [
  'School of Business & Entrepreneurship',
  'School of Engineering & Technology',
  'School of Environment & Life Sciences',
  'School of Liberal Arts & Social Sciences',
  'School of Pharmacy',
  'Department of Computer Science',
  'Department of Economics',
  'Department of English',
  'Department of Law',
  'Department of Mathematics',
  'Department of Media & Communication',
  'Department of Public Health',
  'Department of Sociology',
  'Department of Environmental Science',
  'Department of Biotechnology',
  'Department of Electrical & Electronic Engineering',
  'Department of Civil Engineering',
  'Department of Architecture',
  'Department of Accounting',
  'Department of Finance',
] as const

export const SCHEDULE_DAY1 = [
  { time: '08:30 AM', event: 'Registration & Check-in' },
  { time: '09:30 AM', event: 'Opening Ceremony' },
  { time: '10:30 AM', event: 'Preliminary Round 1 (English)' },
  { time: '12:30 PM', event: 'Lunch Break' },
  { time: '01:30 PM', event: 'Preliminary Round 2 (Bangla)' },
  { time: '03:30 PM', event: 'Preliminary Round 3 (English)' },
  { time: '05:00 PM', event: 'Day 1 Closing & Announcements' },
] as const

export const SCHEDULE_DAY2 = [
  { time: '09:00 AM', event: 'Semifinal Round 1' },
  { time: '11:00 AM', event: 'Semifinal Round 2' },
  { time: '12:30 PM', event: 'Lunch Break' },
  { time: '02:00 PM', event: 'Grand Final (English)' },
  { time: '04:00 PM', event: 'Grand Final (Bangla)' },
  { time: '05:30 PM', event: 'Awards Ceremony & Closing' },
] as const

export const PRIZE_POOL_TOTAL = 'BDT 50,000'

export const PRIZES = [
  {
    tier: 'Champions',
    highlight: 'BDT 25,000',
    items: ['Championship Trophy', 'Team Prize Pool', 'IUBDC Champion Medallions'],
    accent: 'gold' as const,
    featured: true,
  },
  {
    tier: 'Runners-up',
    highlight: 'BDT 15,000',
    items: ['Runner-up Trophy', 'Team Prize Pool', 'Recognition Certificates'],
    accent: 'purple' as const,
    featured: false,
  },
  {
    tier: 'Individual Awards',
    items: ['Best Speaker (EN)', 'Best Speaker (BN)', 'Best Adjudicator', 'Rising Star Award'],
    accent: 'red' as const,
    featured: false,
  },
] as const

export const GALLERY_ITEMS = [
  {
    title: 'Grand Final Stage',
    caption: 'Debattle 1.0, where the house was packed for championship night.',
    gradient: 'from-purple-soft/80 to-white',
  },
  {
    title: 'Opening Fleet',
    caption: 'Departments assembled for the inaugural clash of minds.',
    gradient: 'from-cream-warm to-purple-soft/50',
  },
  {
    title: 'Adjudication Circle',
    caption: 'Expert panels delivered rigorous AP feedback.',
    gradient: 'from-white to-cream-warm',
  },
  {
    title: 'Victory Harbor',
    caption: 'Champions crowned at the close of an unforgettable voyage.',
    gradient: 'from-purple-soft/60 to-white',
  },
] as const

export const SEGMENTS = ['English', 'Bangla'] as const
