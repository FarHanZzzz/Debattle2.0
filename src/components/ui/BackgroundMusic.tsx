import { useEffect, useRef, useState } from 'react'

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioSrc = '/videoplayback.mp3'

  useEffect(() => {
    const audio = new Audio(audioSrc)
    audio.loop = true
    audio.volume = 0.30
    audioRef.current = audio

    const startAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true)
          cleanup()
        })
        .catch(() => {
          // Autoplay blocked by browser policy, fallback to waiting for interaction
        })
    }

    const handleInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            cleanup()
          })
          .catch((err) => {
            console.log("Failed to play on interaction:", err)
          })
      }
    }

    const cleanup = () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('mousedown', handleInteraction)
      window.removeEventListener('pointerdown', handleInteraction)
    }

    // Try playing immediately
    startAudio()

    // Add listeners as fallback
    window.addEventListener('click', handleInteraction)
    window.addEventListener('keydown', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)
    window.addEventListener('mousedown', handleInteraction)
    window.addEventListener('pointerdown', handleInteraction)

    return () => {
      cleanup()
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
    <div className="fixed bottom-4 left-4 z-[100] flex items-center justify-center rounded-full bg-purple-void/85 border border-purple-bright/40 p-1 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:border-gold/50 hover:scale-105">
      <button
        onClick={togglePlay}
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 active:scale-95 cursor-pointer ${
          isPlaying
            ? 'bg-purple-bright text-purple-void shadow-[0_0_12px_rgba(192,132,252,0.9)] hover:bg-gold hover:shadow-[0_0_12px_rgba(251,191,36,0.9)]'
            : 'bg-purple-glow text-white shadow-[0_0_10px_rgba(147,51,234,0.6)] hover:bg-purple-bright hover:shadow-[0_0_12px_rgba(192,132,252,0.8)]'
        }`}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="h-3 w-3 translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  )
}
