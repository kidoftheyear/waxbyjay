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
          <div className="absolute -top-16 left-0 h-1 w-24 bg-red"></div>
          
          <h1 className="text-[72px] md:text-[100px] leading-[0.85] font-serif font-bold mb-8 uppercase">
            Drive <span className="text-red italic">Clean,</span> <br/>
            Drive <span className="text-red italic">Proud.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light italic opacity-80 mb-10 border-l-2 border-red pl-6 max-w-xl leading-relaxed uppercase tracking-tighter">
            "Signed by Jay. Every finish is a masterwork, hand-crafted at your convenience."
          </p>
          
          <a 
            href="sms:3343220554"
            className="w-fit px-12 py-6 bg-red text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-colors"
          >
            Book Your Wax
          </a>
        </motion.div>
      </div>
    </section>
  );
}
