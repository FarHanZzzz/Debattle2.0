/** Cinematic wipe overlays triggered by GSAP ScrollTrigger */
export function SectionTransitions() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <div
        data-transition="wave"
        className="section-transition section-transition--wave"
      />
      <div
        data-transition="haki"
        className="section-transition section-transition--haki"
      />
      <div
        data-transition="gold"
        className="section-transition section-transition--gold"
      />
      <div
        data-transition="fog"
        className="section-transition section-transition--fog"
      />
    </div>
  )
}
