/** Stylized One Piece–inspired SVG environment art (silhouettes & motifs, not character artwork) */

export function ShipSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 95 Q80 75 160 82 Q240 88 300 78 L300 95 L20 95 Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M60 82 L100 25 L140 82 Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path d="M100 25 L100 8 L108 25 Z" fill="currentColor" opacity="0.22" />
      <path
        d="M55 82 Q100 70 145 82"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
        fill="none"
      />
      <rect x="85" y="55" width="30" height="27" rx="2" fill="currentColor" opacity="0.1" />
      <circle cx="100" cy="68" r="3" fill="currentColor" opacity="0.2" />
    </svg>
  )
}

export function AdventurerSilhouette({
  variant = 'left',
  className = '',
}: {
  variant?: 'left' | 'right' | 'center'
  className?: string
}) {
  const paths = {
    left: 'M40 110 L55 45 L70 110 M55 45 L75 25 L90 55 M55 70 L35 95 M55 70 L80 100',
    right: 'M60 110 L75 40 L90 110 M75 40 L55 20 L45 50 M75 65 L95 90 M75 65 L50 105',
    center: 'M50 110 L65 35 L80 110 M65 35 L85 15 L95 48 M65 58 L45 85 M65 58 L88 95',
  }
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden>
      <path
        d={paths[variant]}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.14"
      />
    </svg>
  )
}

export function CloudPuff({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 48" aria-hidden>
      <ellipse cx="35" cy="28" rx="28" ry="14" fill="currentColor" opacity="0.08" />
      <ellipse cx="65" cy="24" rx="32" ry="16" fill="currentColor" opacity="0.1" />
      <ellipse cx="90" cy="30" rx="22" ry="12" fill="currentColor" opacity="0.07" />
    </svg>
  )
}

export function HakiRing({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden>
      <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.8" opacity="0.15" fill="none" />
      <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" opacity="0.1" fill="none" strokeDasharray="4 8" />
      <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1" opacity="0.2" fill="none" />
      <path
        d="M100 30 Q130 100 100 170 Q70 100 100 30"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.08"
        fill="none"
      />
    </svg>
  )
}

export function IslandHorizon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden>
      <path
        d="M0 60 Q50 20 100 45 Q150 70 200 35 Q280 10 320 50 Q360 65 400 40 L400 80 L0 80 Z"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  )
}

export function CompassRoseLarge({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
      <path
        d="M100 18 L106 100 L100 182 L94 100 Z M18 100 L100 94 L182 100 L100 106 Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path d="M100 32 L103 100 L100 168 L97 100 Z" fill="currentColor" opacity="0.18" />
      <text x="100" y="26" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.35">
        N
      </text>
    </svg>
  )
}

export function FloatingRune({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
        transform="rotate(45 24 24)"
      />
      <text x="24" y="29" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.25" fontFamily="serif">
        D
      </text>
    </svg>
  )
}

export function SailFragment({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" aria-hidden>
      <path d="M30 5 Q50 40 30 75 Q10 40 30 5" fill="currentColor" opacity="0.08" />
      <path d="M30 5 L30 75" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
    </svg>
  )
}
