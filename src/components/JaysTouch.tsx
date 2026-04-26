import { motion } from 'motion/react';

export default function JaysTouch() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-[4/5] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800" 
            alt="Jay at work" 
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-stealth-black pointer-events-none" />
        </motion.div>
        
        <div className="relative">
          <motion.span 
            className="absolute -top-12 -left-8 text-[12rem] font-serif text-white/[0.03] select-none"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Jay
          </motion.span>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red/50" />
              <span className="text-red text-xs uppercase tracking-[0.4em] font-semibold">The Philosophy</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif mb-10 italic">Jay's Touch</h2>
            
            <div className="space-y-6 text-white/70 leading-loose text-lg font-light">
              <p>
                Mobile detailing is often rush-work. I choose the opposite path. 
                For me, every panel is a canvas, and wax is the medium. 
              </p>
              <p>
                Meticulous hand-application ensures a depth of shine that machines simply cannot replicate. 
                I treat every car as if it were my own—looking for the micro-details that 99% of people miss, 
                but 100% of people feel when they see the finished result.
              </p>
              <p className="text-white font-serif italic text-2xl pt-6">
                "It's not just clean. It's curated."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
