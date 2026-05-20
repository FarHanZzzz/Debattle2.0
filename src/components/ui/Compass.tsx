export function Compass({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
    >
      <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.6" />
      <path
        d="M14 4 L15.5 14 L14 24 L12.5 14 Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M4 14 L14 12.5 L24 14 L14 15.5 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <text x="14" y="6" textAnchor="middle" fontSize="3" fill="currentColor" opacity="0.5">
        N
      </text>
    </svg>
  )
}
