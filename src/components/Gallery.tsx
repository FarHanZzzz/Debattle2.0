import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import { Reveal } from './ui/Reveal'
import { SectionHeader } from './ui/SectionHeader'

const GALLERY_PHOTOS = [
  {
    src: gallery1,
    title: 'Grand Final Stage',
    caption: 'Debattle 1.0 — The house was packed for championship night.',
  },
  {
    src: gallery2,
    title: 'Opening Fleet',
    caption: 'Departments assembled for the inaugural clash of minds.',
  },
  {
    src: gallery3,
    title: 'Adjudication Circle',
    caption: 'Expert panels delivered rigorous AP feedback.',
  },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="section-padding section-surface-lavender relative overflow-hidden">
      <div className="section-container-wide relative z-[5]">
        <Reveal>
          <SectionHeader
            eyebrow="Memories"
            title="Debattle 1.0"
            description="Highlights from our inaugural voyage — setting the stage for an even grander clash."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GALLERY_PHOTOS.map((photo, i) => (
            <Reveal key={photo.title} delay={i * 0.08}>
              <article className="gallery-card group">
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
                  <h3 className="gallery-card__title text-lg">{photo.title}</h3>
                  <p className="mt-2 text-base text-[#e9d5ff]">{photo.caption}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
