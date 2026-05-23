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
  'Department of Accounting',
  'Department of Computer Science and Engineering',
  'Department of Economics',
  'Department of Electrical and Electronic Engineering',
  'Department of English and Modern Languages',
  'Department of Environmental Science and Management',
  'Department of Finance',
  'Department of General Management',
  'Department of Global Studies and Governance',
  'Department of Human Resource Management',
  'Department of International Business',
  'Department of Law',
  'Department of Life Sciences',
  'Department of Management Information Systems',
  'Department of Marketing',
  'Department of Media and Communication',
  'Department of Pharmacy',
  'Department of Physical Sciences',
  'Department of Public Health',
  'Department of Social Sciences and Humanities',
] as const

export const SCHEDULE_DAY1 = [
  { time: '8:30 AM', event: 'Reporting & Registration' },
  { time: '9:00 AM', event: 'Round 1: Motion Release & Debate' },
  { time: '11:00 AM', event: 'Round 2: Motion Release & Debate' },
  { time: '1:00 PM', event: 'Lunch & Prayer Break' },
  { time: '2:00 PM', event: 'Round 3: Motion Release & Debate' },
  { time: '4:00 PM', event: 'Round 4: Motion Release & Debate' },
  { time: '6:30 PM', event: 'Tabulation & Break Announcement' },
  { time: '8:00 PM', event: 'Ending' },
] as const

export const SCHEDULE_DAY2 = [
  { time: '10:00 AM', event: 'Reporting' },
  { time: '10:30 AM', event: 'Pre-Semifinals: Motion Release & Debate' },
  { time: '12:00 PM', event: 'Semifinals: Motion Release & Debate' },
  { time: '2:00 PM', event: 'Lunch Break' },
  { time: '3:00 PM', event: 'Finals: Motion Release & Debate' },
  { time: '5:30 PM', event: 'Award Ceremony & Closing Speech' },
  { time: '8:00 PM', event: 'Grand Dinner' },
] as const

export const PRIZE_POOL_TOTAL = 'BDT 50,000'

export const PRIZES = [
  {
    tier: 'Champions',
    highlight: 'BDT 15,000',
    subHighlight: 'Per Segment (English & Bangla)',
    items: ['Championship Trophy', 'Team Prize Pool', 'IUBDC Champion Medallions'],
    accent: 'gold' as const,
    featured: true,
  },
  {
    tier: 'Runners-up',
    highlight: 'BDT 10,000',
    subHighlight: 'Per Segment (English & Bangla)',
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
