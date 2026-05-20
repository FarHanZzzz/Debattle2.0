import { motion, AnimatePresence } from 'framer-motion'
import { Compass } from './ui/Compass'

type LoadingScreenProps = {
  visible: boolean
}

export function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at center, #2d1054 0%, #06020f 70%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="text-purple-bright"
            >
              <Compass className="h-12 w-12" />
            </motion.div>
            <div className="text-center">
              <p className="eyebrow mb-2">Charting the course</p>
              <p className="heading-section text-2xl">Debattle 2.0</p>
            </div>
            <div className="h-px w-32 overflow-hidden rounded-full bg-purple-bright/20">
              <motion.div
                className="h-full bg-purple-bright/70"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
