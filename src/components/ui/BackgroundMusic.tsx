import { useEffect, useRef, useState } from 'react'

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioSrc = '/videoplayback.mp3'

  useEffect(() => {
    audioRef.current = new Audio(audioSrc)
    audioRef.current.loop = true
    audioRef.current.volume = 0.25

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((err) => {
          console.log("Autoplay blocked by browser. User interaction required first.", err)
        })
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex items-center gap-2 rounded-full bg-purple-void/85 border border-purple-bright/30 px-3 py-2 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-gold/50 group">
      <button
        onClick={togglePlay}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-glow text-white shadow-lg transition-transform duration-300 active:scale-95 cursor-pointer hover:bg-purple-bright"
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-4 w-4 translate-x-[2px]" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 pr-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
            {isPlaying ? 'Playing' : 'Music'}
          </span>
          
          {isPlaying && (
            <div className="flex items-end gap-[2px] h-2.5 w-3">
              <span className="w-[2px] bg-gold rounded-full animate-pulse h-full" style={{ animationDelay: '0.1s', animationDuration: '0.6s' }} />
              <span className="w-[2px] bg-purple-bright rounded-full animate-pulse h-2/3" style={{ animationDelay: '0.3s', animationDuration: '0.8s' }} />
              <span className="w-[2px] bg-cyan rounded-full animate-pulse h-1/2" style={{ animationDelay: '0.5s', animationDuration: '0.5s' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
