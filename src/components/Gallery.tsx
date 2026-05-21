import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import { Reveal } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

const GALLERY_PHOTOS = [
  {
    src: gallery1,
    title: 'Grand Final Stage',
    caption: 'Debattle 1.0, where the house was packed for championship night. Click to view photo drive.',
    link: 'https://drive.google.com/drive/folders/1kQATjjtqsJV3wl5K2MzRYGBwmSgd-ZRI?usp=sharing',
  },
  {
    src: gallery2,
    title: 'Opening Fleet',
    caption: 'Departments assembled for the inaugural clash of minds. Click to view photo drive.',
    link: 'https://drive.google.com/drive/folders/1DPM9_ZEoJ71QV9Q5jC8PAJJNm98n4rBe?usp=sharing',
  },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="section-padding section-surface-lavender relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Memories"
            title="Debattle 1.0 Memories"
            description="Relive the wholesome moments from our inaugural voyage. Click on the cards below to view the official Google Drive folders."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {GALLERY_PHOTOS.map((photo, i) => (
            <Reveal key={photo.title} delay={i * 0.08}>
              <a
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-card group block transition-all duration-300 hover:ring-2 hover:ring-gold/50 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06020f]/90 via-[#2d1054]/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="gallery-card__title text-lg group-hover:text-gold transition-colors">{photo.title}</h3>
                  <p className="mt-2 text-base text-[#e9d5ff]">{photo.caption}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
