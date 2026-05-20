import { Compass } from './ui/Compass'



export function Footer() {
  return (
    <footer id="footer" className="relative z-[2] border-t border-purple-bright/15 bg-[rgba(6,2,15,0.9)] py-12 backdrop-blur-md">
      <div className="section-container px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white">Debattle 2.0</p>
            <p className="mt-1 text-xs text-ink-muted">
              Clash of Departments · June 19–20, 2026
            </p>
            <p className="mt-1 text-xs text-ink-muted">
              Independent University, Bangladesh
            </p>
          </div>

          <div className="flex items-center gap-4 text-purple/40">
            <Compass />
          </div>

          <div className="hidden md:block w-32">
            {/* Empty space to balance the flex container so compass stays centered if needed, or just let compass be at end */}
          </div>
        </div>

        <p className="mt-10 text-center text-[11px] text-ink-muted/70">
          © 2026 IUB Debate Club. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
