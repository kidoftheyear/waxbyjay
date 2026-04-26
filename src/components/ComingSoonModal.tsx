import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative glass-panel p-12 max-w-md w-full text-center rounded-2xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-serif text-gold mb-4">Coming Soon</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Jay is currently perfecting the finish on another masterpiece. 
              Our online booking system will be live shortly.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 gold-gradient text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all uppercase tracking-widest text-xs"
            >
              Return to Shine
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
