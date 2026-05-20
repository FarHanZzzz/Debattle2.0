import { Compass } from './Compass'

export function SectionDivider() {
  return (
    <div className="divider-compass text-purple" aria-hidden>
      <span className="h-px w-12 bg-purple/20" />
      <Compass />
      <span className="h-px w-12 bg-purple/20" />
    </div>
  )
}
