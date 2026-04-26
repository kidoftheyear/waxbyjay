import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact({ onBookClick }: { onBookClick: () => void }) {
  const contactInfo = [
    {
      icon: Phone,
      label: "Call or Text",
      value: "(334) 322-0554",
      sub: "Jaylon Young",
      action: "tel:3343220554"
    },
    {
      icon: Mail,
      label: "Inquiries",
      value: "waxbyj19@gmail.com",
      sub: "Official Email",
      action: "mailto:waxbyj19@gmail.com"
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Prattville & Montgomery",
      sub: "Millbrook, AL",
      action: "https://maps.google.com/?q=Millbrook,AL"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-stealth-charcoal border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-red text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Get In Touch</span>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.9]">
              Connect with <br/>
              <span className="text-red italic">the Owner.</span>
            </h2>
            <p className="text-lg text-white/40 uppercase tracking-widest leading-relaxed mb-12 max-w-md">
              Available 7 days a week for inquiries and serious paint protection consultations.
            </p>
            
            <button 
              onClick={onBookClick}
              className="px-12 py-6 bg-red text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-white transition-all shadow-[15px_15px_0px_rgba(212,0,0,0.1)]"
            >
              Request A Quote
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((info, i) => (
              <a 
                key={i}
                href={info.action}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 border border-white/10 bg-stealth-black/50 hover:border-red/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:bg-red/10 transition-colors">
                    <info.icon className="w-6 h-6 text-red" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold block mb-1">{info.label}</span>
                    <span className="text-xl font-serif text-white block mb-1">{info.value}</span>
                    <span className="text-[10px] uppercase tracking-widest text-red font-black italic">{info.sub}</span>
                  </div>
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-red group-hover:text-black transition-all">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
