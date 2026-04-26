import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-white/10 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-12 w-full">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-8 flex flex-col justify-center relative"
        >
          <div className="absolute -top-16 left-0 h-1 w-24 bg-gold"></div>
          
          <h1 className="text-[72px] md:text-[100px] leading-[0.85] font-serif font-bold mb-8">
            The Gold <br/>
            <span className="text-gold">Standard</span> <br/>
            of Shine.
          </h1>
          
          <p className="text-xl md:text-2xl font-light italic opacity-80 mb-10 border-l-2 border-gold pl-6 max-w-xl leading-relaxed">
            "Signed by Jay. Every finish is a masterwork, hand-crafted at your convenience."
          </p>
          
          <button 
            onClick={onBookClick}
            className="w-fit px-12 py-6 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-colors"
          >
            Book Your Wax
          </button>
        </motion.div>
      </div>
    </section>
  );
}
