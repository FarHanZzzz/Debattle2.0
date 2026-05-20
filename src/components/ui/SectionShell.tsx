import type { ReactNode } from 'react'

type SectionShellProps = {
  id?: string
  children: ReactNode
  variant?: 'light' | 'lavender' | 'clear'
  className?: string
}

const variants = {
  light: 'section-surface',
  lavender: 'section-surface-lavender',
  clear: 'section-surface-clear',
}

export function SectionShell({
  id,
  children,
  variant = 'light',
  className = '',
}: SectionShellProps) {
  return (
    <section id={id} className={`section-padding relative ${variants[variant]} ${className}`}>
      <div className="section-container relative z-[2]">{children}</div>
    </section>
  )
}
