import { motion } from 'motion/react';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Contact({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="contact" className="py-32 px-12 bg-stealth-charcoal relative">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">Direct Access</span>
        <h2 className="text-6xl md:text-8xl font-serif mb-20 leading-[0.9]">Ready for the <br/><span className="italic">Showroom?</span></h2>
        
        <div className="grid md:grid-cols-2 gap-1 px-4 mb-20">
          <motion.div 
            whileHover={{ backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
            className="p-12 border border-white/10 flex flex-col items-center group"
          >
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-4 font-bold">Call or Text</span>
            <span className="text-xl md:text-2xl font-mono text-white tracking-tighter">[Your Phone Number Here]</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
            className="p-12 border border-white/10 flex flex-col items-center group"
          >
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-4 font-bold">Inquiries</span>
            <span className="text-xl md:text-2xl font-mono text-white tracking-tighter">jay@waxbyjay.com</span>
          </motion.div>
        </div>
        
        <button 
          onClick={onBookClick}
          className="px-20 py-8 bg-gold text-black font-bold uppercase tracking-[0.5em] text-xs hover:bg-white transition-all shadow-[20px_20px_0px_rgba(255,215,0,0.1)]"
        >
          Book Your Session
        </button>
      </div>
    </section>
  );
}
