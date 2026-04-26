import { motion } from 'motion/react';
import { Sparkles, Shield, Droplets } from 'lucide-react';

const services = [
  {
    title: "The Express Gloss",
    price: "$99",
    description: "Premium hand wash, clay bar treatment, and a high-shine spray sealant. Perfect for weekly maintenance.",
    icon: Droplets,
    features: ["Hand Dried", "Tire Dressing", "Interior Vacuum"]
  },
  {
    title: "The Signature Wax",
    price: "$249",
    description: "Multi-stage paint decontamination followed by Jay's exclusive hand-laid carnauba wax finish.",
    icon: Sparkles,
    features: ["Mirror Polish", "Jewelled Finish", "Light Interior Detail", "Signed Perfection"],
    featured: true
  },
  {
    title: "The Ceramic Shield",
    price: "$599",
    description: "9H Hardness ceramic coating for ultimate protection and hydrophobicity. The ultimate long-term care.",
    icon: Shield,
    features: ["2 Year Protection", "Salt/UV Resistance", "Extreme Beading", "Full Interior Restoration"]
  }
];

export default function Services({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="services" className="border-b border-white/10 bg-stealth-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Intro Panel */}
        <div className="lg:w-1/3 p-12 lg:border-r border-white/10 flex flex-col justify-center bg-stealth-charcoal">
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6">Service Menu</span>
          <h2 className="text-5xl font-serif mb-8">The Signature Tiers</h2>
          <p className="text-sm text-white/40 leading-relaxed uppercase tracking-widest">
            Meticulous hand-detailing using premium carnauba blends. Each stage represents a higher level of optical clarity.
          </p>
        </div>

        {/* Services List Panel */}
        <div className="lg:w-2/3 grid grid-cols-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-12 border-b last:border-b-0 border-white/10 group cursor-pointer hover:bg-gold/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-8 ${service.featured ? 'bg-gold/[0.02]' : ''}`}
              onClick={onBookClick}
            >
              <div className="flex-1">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Stage 0{index + 1}</span>
                <h3 className="text-3xl font-serif text-white mb-2">{service.title}</h3>
                <p className="text-white/40 text-sm italic max-w-md">{service.description}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="text-4xl font-serif text-white">{service.price}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all">Book This Finish →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
