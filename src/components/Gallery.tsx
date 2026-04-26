import { motion } from 'motion/react';

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    label: "Mirror Reflection"
  },
  {
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
    label: "Signature Finish"
  },
  {
    image: "https://images.unsplash.com/photo-1542362567-b05486f69246?auto=format&fit=crop&q=80&w=800",
    label: "Ceramic Depth"
  },
  {
    image: "https://images.unsplash.com/photo-1517524008410-b44c605edaba?auto=format&fit=crop&q=80&w=800",
    label: "Detail Precision"
  },
  {
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    label: "Showroom Shine"
  },
  {
    image: "/gallery-6.jpg",
    label: "Premium Wash"
  },
  {
    image: "/gallery-7.jpg",
    label: "Paint Correction"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="border-b border-white/10 bg-stealth-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {galleryItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`group relative h-96 border-r border-b border-white/10 overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2 h-full min-h-[500px]' : index >= 5 ? 'lg:col-span-2' : ''}`}
          >
            <img 
              src={item.image} 
              alt={item.label}
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Finish Portfolio</span>
              <span className="text-white text-xl font-serif italic">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
