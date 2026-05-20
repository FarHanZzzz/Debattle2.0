type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <header
      className={`section-header w-full ${isCenter ? 'section-header--center' : 'section-header--left'}`}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="heading-section">{title}</h2>
      {description && (
        <div className="section-intro-band mt-6">
          <p className="section-intro-band__text">{description}</p>
        </div>
      )}
    </header>
  )
}
