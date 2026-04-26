import { motion } from 'motion/react';
import { Car } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-stealth-black border-b border-white/10 px-12 py-8 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <Car className="text-red" size={24} />
        <span className="text-red text-2xl font-serif tracking-tighter font-bold uppercase">Wax by Jay</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold opacity-60">
        <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
        <a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a>
        <a href="sms:3343220554" className="hover:text-red transition-colors text-red opacity-100 italic">Book Now</a>
      </div>
    </motion.nav>
  );
}
