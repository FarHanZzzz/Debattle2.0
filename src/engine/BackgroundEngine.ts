export type BgSection =
  | 'hero'
  | 'about'
  | 'format'
  | 'stats'
  | 'departments'
  | 'schedule'
  | 'prizes'
  | 'register'
  | 'gallery'
  | 'footer'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  phase: number
  gold?: boolean
}

type HakiWisp = {
  points: { x: number; y: number }[]
  life: number
  maxLife: number
}

export class BackgroundEngine {
  private ctx: CanvasRenderingContext2D
  private canvas: HTMLCanvasElement
  private width = 0
  private height = 0
  private dpr = 1
  private particles: Particle[] = []
  private goldParticles: Particle[] = []
  private hakiWisps: HakiWisp[] = []
  private scrollProgress = 0
  private section: BgSection = 'hero'
  private mouseX = 0.5
  private mouseY = 0.5
  private time = 0
  private rafId = 0
  private running = false
  private reducedMotion = false
  private particleCount = 220
  private shipRock = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) throw new Error('Canvas 2D not supported')
    this.ctx = ctx
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cores = navigator.hardwareConcurrency ?? 4
    if (cores < 4) this.particleCount = 100
    if (window.innerWidth < 768) this.particleCount = Math.floor(this.particleCount * 0.5)
    this.initParticles()
    this.initGoldParticles()
  }

  private initParticles() {
    this.particles = Array.from({ length: this.particleCount }, () => this.makeParticle())
  }

  private initGoldParticles() {
    this.goldParticles = Array.from({ length: 35 }, () => ({
      ...this.makeParticle(),
      gold: true,
      y: Math.random(),
    }))
  }

  private makeParticle(): Particle {
    return {
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00012,
      size: 0.5 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
    }
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2)
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width * this.dpr
    this.canvas.height = this.height * this.dpr
    this.canvas.style.width = `${this.width}px`
    this.canvas.style.height = `${this.height}px`
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
  }

  setScrollProgress(p: number) {
    this.scrollProgress = Math.max(0, Math.min(1, p))
  }

  setSection(s: BgSection) {
    this.section = s
  }

  setMouse(nx: number, ny: number) {
    this.mouseX = nx
    this.mouseY = ny
  }

  start() {
    if (this.running) return
    this.running = true
    this.resize()
    const loop = (t: number) => {
      if (!this.running) return
      const dt = this.reducedMotion ? 0 : Math.min((t - this.time) / 1000, 0.05)
      this.time = t
      this.tick(dt)
      this.rafId = requestAnimationFrame(loop)
    }
    this.rafId = requestAnimationFrame(loop)
  }

  stop() {
    this.running = false
    cancelAnimationFrame(this.rafId)
  }

  private tick(dt: number) {
    if (!this.reducedMotion) {
      this.shipRock += dt
      this.updateParticles(dt)
      this.maybeSpawnHaki()
      this.updateHaki(dt)
    }
    this.render()
  }

  private updateParticles(_dt: number) {
    const repulse = window.innerWidth >= 768
    for (const p of this.particles) {
      if (repulse) {
        const px = p.x * this.width
        const py = p.y * this.height
        const mx = this.mouseX * this.width
        const my = this.mouseY * this.height
        const dx = px - mx
        const dy = py - my
        const dist = Math.hypot(dx, dy)
        if (dist < 80 && dist > 0) {
          p.vx += (dx / dist) * 0.0004
          p.vy += (dy / dist) * 0.0004
        }
      }
      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.995
      p.vy *= 0.995
      if (p.x < 0 || p.x > 1) p.vx *= -1
      if (p.y < 0 || p.y > 1) p.vy *= -1
      p.x = Math.max(0, Math.min(1, p.x))
      p.y = Math.max(0, Math.min(1, p.y))
    }

    if (this.section === 'prizes') {
      for (const g of this.goldParticles) {
        g.y -= 0.00008
        g.x += Math.sin(this.time * 0.001 + g.phase) * 0.00002
        if (g.y < 0) {
          g.y = 1
          g.x = Math.random()
        }
      }
    }
  }

  private maybeSpawnHaki() {
    if (Math.random() > 0.003 || this.hakiWisps.length > 2) return
    const cx = 0.3 + Math.random() * 0.4
    const cy = 0.2 + Math.random() * 0.4
    const points = Array.from({ length: 5 }, () => ({
      x: cx + (Math.random() - 0.5) * 0.15,
      y: cy + (Math.random() - 0.5) * 0.15,
    }))
    this.hakiWisps.push({ points, life: 0, maxLife: 2 + Math.random() })
  }

  private updateHaki(_dt: number) {
    this.hakiWisps = this.hakiWisps.filter((w) => {
      w.life += _dt
      return w.life < w.maxLife
    })
  }

  private parallax(speed: number) {
    return this.scrollProgress * this.height * speed
  }

  private render() {
    const { ctx, width: w, height: h } = this
    ctx.clearRect(0, 0, w, h)

    const warmShift = this.section === 'prizes' ? 0.15 : 0
    const mx = (this.mouseX - 0.5) * (window.innerWidth >= 768 ? 15 : 0)
    const my = (this.mouseY - 0.5) * (window.innerWidth >= 768 ? 15 : 0)

    this.renderNebula(w, h, warmShift, mx * 0.05, my * 0.05)
    this.renderOcean(w, h)
    this.renderFog(w, h)
    this.renderSilhouettes(w, h)
    this.renderLightShafts(w, h)
    this.renderParticles(w, h)
    if (this.section === 'prizes') this.renderGoldParticles(w, h)
    this.renderHaki(w, h)
    this.renderCompassWatermark(w, h)
  }

  private renderNebula(w: number, h: number, warm: number, ox: number, oy: number) {
    const { ctx } = this
    const breath = this.reducedMotion ? 0 : Math.sin(this.time * 0.0008) * 0.5 + 0.5
    const cx = w * 0.55 + ox
    const cy = h * 0.35 + oy - this.parallax(0.05)

    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.75)
    g.addColorStop(0, `rgba(${45 + warm * 40},${16 + warm * 20},${84 + warm * 30},${0.55 + breath * 0.15})`)
    g.addColorStop(0.4, `rgba(26,10,46,${0.4 + breath * 0.1})`)
    g.addColorStop(1, '#06020f')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)

    const g2 = ctx.createRadialGradient(w * 0.2, h * 0.6, 0, w * 0.2, h * 0.6, w * 0.5)
    g2.addColorStop(0, 'rgba(107,33,168,0.25)')
    g2.addColorStop(1, 'transparent')
    ctx.fillStyle = g2
    ctx.fillRect(0, 0, w, h)

    if (warm > 0) {
      const g3 = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.45)
      g3.addColorStop(0, `rgba(251,191,36,${warm * 0.12})`)
      g3.addColorStop(1, 'transparent')
      ctx.fillStyle = g3
      ctx.fillRect(0, 0, w, h)
    }
  }

  private renderOcean(w: number, h: number) {
    const { ctx } = this
    const yOff = this.parallax(0.1)
    const grad = ctx.createLinearGradient(0, h * 0.55 - yOff, 0, h)
    grad.addColorStop(0, 'transparent')
    grad.addColorStop(0.4, 'rgba(6,78,99,0.15)')
    grad.addColorStop(1, 'rgba(45,16,84,0.45)')
    ctx.fillStyle = grad
    ctx.fillRect(0, h * 0.5 - yOff, w, h * 0.5 + yOff)
  }

  private renderFog(w: number, h: number) {
    const { ctx } = this
    const drift = this.reducedMotion ? 0 : Math.sin(this.time * 0.0003) * 40
    ctx.save()
    ctx.globalAlpha = 0.06
    for (let fi = 0; fi < 3; fi++) {
      const y = h * (0.3 + fi * 0.2) - this.parallax(0.2) + drift * (fi + 1) * 0.3
      const fg = ctx.createRadialGradient(w * 0.5 + drift, y, 0, w * 0.5, y, w * 0.6)
      fg.addColorStop(0, 'rgba(192,132,252,0.3)')
      fg.addColorStop(1, 'transparent')
      ctx.fillStyle = fg
      ctx.fillRect(0, 0, w, h)
    }
    ctx.restore()
  }

  private renderSilhouettes(w: number, h: number) {
    const { ctx } = this
    const rock = Math.sin(this.shipRock * 0.8) * 6
    const silY = this.parallax(0.3)

    ctx.save()
    ctx.strokeStyle = 'rgba(192,132,252,0.08)'
    ctx.fillStyle = 'rgba(192,132,252,0.06)'
    ctx.lineWidth = 1.5

    // Island horizon
    ctx.beginPath()
    ctx.moveTo(0, h * 0.72 - silY)
    ctx.quadraticCurveTo(w * 0.25, h * 0.65 - silY, w * 0.5, h * 0.68 - silY)
    ctx.quadraticCurveTo(w * 0.75, h * 0.7 - silY, w, h * 0.66 - silY)
    ctx.lineTo(w, h)
    ctx.lineTo(0, h)
    ctx.closePath()
    ctx.fill()

    // Ship (right)
    const sx = w * 0.72
    const sy = h * 0.58 - silY + rock
    ctx.save()
    ctx.translate(sx, sy)
    ctx.beginPath()
    ctx.moveTo(-60, 30)
    ctx.lineTo(60, 30)
    ctx.lineTo(40, 10)
    ctx.lineTo(-40, 10)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(0, 10)
    ctx.lineTo(0, -50)
    ctx.lineTo(8, 10)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(-5, -50)
    ctx.lineTo(35, -20)
    ctx.lineTo(-5, -20)
    ctx.closePath()
    ctx.fill()
    ctx.restore()

    // Clouds
    ctx.fillStyle = 'rgba(192,132,252,0.07)'
    const cloudDrift = this.reducedMotion ? 0 : (this.time * 0.01) % w
    for (let c = 0; c < 4; c++) {
      const cx = ((c * w) / 4 + cloudDrift) % (w + 200) - 100
      const cy = h * (0.12 + c * 0.04)
      ctx.beginPath()
      ctx.ellipse(cx, cy, 80, 25, 0, 0, Math.PI * 2)
      ctx.ellipse(cx + 50, cy + 8, 60, 20, 0, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.restore()
  }

  private renderLightShafts(w: number, h: number) {
    const { ctx } = this
    const pulse = this.reducedMotion ? 0.06 : 0.04 + Math.sin(this.time * 0.0008) * 0.03
    ctx.save()
    ctx.translate(w, 0)
    ctx.rotate((25 * Math.PI) / 180)
    const lg = ctx.createLinearGradient(0, 0, w * 0.6, 0)
    lg.addColorStop(0, `rgba(192,132,252,${pulse})`)
    lg.addColorStop(1, 'transparent')
    ctx.fillStyle = lg
    ctx.fillRect(-w, 0, w * 0.8, h * 1.5)
    ctx.restore()
  }

  private renderParticles(w: number, h: number) {
    const { ctx } = this
    const yOff = this.parallax(0.4)
    for (const p of this.particles) {
      const tw = this.reducedMotion
        ? p.opacity
        : p.opacity * (0.6 + Math.sin(this.time * 0.002 + p.phase) * 0.4)
      const px = p.x * w
      const py = p.y * h - yOff
      ctx.beginPath()
      const cyan = Math.sin(p.phase * 3) > 0.85
      ctx.fillStyle = p.gold
        ? `rgba(251,191,36,${tw})`
        : cyan
          ? `rgba(6,182,212,${tw * 0.8})`
          : `rgba(192,132,252,${tw})`
      ctx.arc(px, py, p.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  private renderGoldParticles(w: number, h: number) {
    const { ctx } = this
    for (const g of this.goldParticles) {
      ctx.beginPath()
      ctx.fillStyle = `rgba(251,191,36,${g.opacity * 0.7})`
      ctx.arc(g.x * w, g.y * h, 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  private renderHaki(w: number, h: number) {
    const { ctx } = this
    for (const wisp of this.hakiWisps) {
      const alpha = (1 - wisp.life / wisp.maxLife) * 0.08
      ctx.strokeStyle = `rgba(6,182,212,${alpha})`
      ctx.lineWidth = 1
      ctx.beginPath()
      const pts = wisp.points
      ctx.moveTo(pts[0].x * w, pts[0].y * h)
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1]
        const curr = pts[i]
        ctx.quadraticCurveTo(
          prev.x * w,
          prev.y * h,
          (prev.x + curr.x) * 0.5 * w,
          (prev.y + curr.y) * 0.5 * h,
        )
      }
      ctx.stroke()
    }
  }

  private renderCompassWatermark(w: number, h: number) {
    if (this.section !== 'hero' && this.section !== 'footer') return
    const { ctx } = this
    const rot = this.reducedMotion ? 0 : this.time * 0.0001
    const cx = this.section === 'footer' ? w * 0.5 : w * 0.85
    const cy = this.section === 'footer' ? h * 0.7 : h * 0.2
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(rot)
    ctx.globalAlpha = 0.1
    ctx.strokeStyle = 'rgba(192,132,252,0.5)'
    ctx.lineWidth = 0.8
    for (let r = 40; r <= 100; r += 30) {
      ctx.beginPath()
      ctx.arc(0, 0, r, 0, Math.PI * 2)
      ctx.stroke()
    }
    ctx.beginPath()
    ctx.moveTo(0, -90)
    ctx.lineTo(0, 90)
    ctx.moveTo(-90, 0)
    ctx.lineTo(90, 0)
    ctx.stroke()
    ctx.restore()
  }
}
