import { motion } from 'motion/react';
import { Check, Info, ShieldCheck, Zap } from 'lucide-react';

const tiers = [
  {
    name: "Level 1 Basic",
    carPrice: "$80",
    truckPrice: "$115",
    note: "Please only book this service if your vehicle has been professionally detailed within the last 1-2 months. If it's been longer than that, no worries! Just book a Level 2 or Level 3 Detail!",
    includes: [
      "Interior Vacuuming (seats, Carpets, Mats and trunk)",
      "Wipe Down of all surfaces",
      "Cleaned windows (inside and outside)",
      "Exterior hand wash and dry",
      "Wheel and tire cleaning",
      "Bug and tar removal",
      "Protective sealant for lasting shine (up to 3 to 6 months)"
    ]
  },
  {
    name: "Level 2 Standard",
    carPrice: "$130",
    truckPrice: "$150",
    description: "The ultimate inside and outside refresh for your vehicle / perfect for those wanting a deeper clean and long lasting protection.",
    sections: [
      {
        title: "Exterior Process",
        items: [
          "Full hand wash for a spotless rinse",
          "Bug removal",
          "6 months paint n window protection",
          "Full wheel cleaning and protection",
          "Tire and fender dressing",
          "Door and trunk jams clean",
          "Streak free window cleaning"
        ]
      },
      {
        title: "Interior Process",
        items: [
          "Deep vacuum (trunk included if empty)",
          "Cup holder Cleaning",
          "Deep scrub of seats and interior panels",
          "Conditioning treatment for seats",
          "Vent Cleaning",
          "Window cleaning"
        ]
      }
    ]
  },
  {
    name: "Level 3 Deluxe",
    carPrice: "$190",
    truckPrice: "$215",
    description: "A complete deep clean and protection package / perfect for restoring and protecting your vehicle inside/out.",
    sections: [
      {
        title: "Exterior Process",
        items: [
          "Pre rinse, foam bath and hand wash",
          "Paint decontamination and clay bar treatment (smooth paint finished)",
          "Microfiber hand dry (complete Vehicle)",
          "Full wheel cleaning and protection",
          "Tire and fending cleaning/dressing",
          "6-12 Months spy ceramic coating (paint and windows included)"
        ]
      },
      {
        title: "Interior Process",
        items: [
          "Full interior Vacuum",
          "Seats and carpets shampoo",
          "Jambs cleaned",
          "Deep scrub of leather and plastics (6 months protection)",
          "Cup hold Cleaning",
          "Vents cleaning",
          "Window cleaning n protection (6 months)"
        ]
      }
    ],
    featured: true
  }
];

const additional = [
  { name: "Headlight Restoration", price: "$50" },
  { name: "Engine Bay Cleaning", price: "$60" },
  { name: "Odor Removal", price: "$30" }
];

export default function Services({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="services" className="py-24 bg-stealth-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-red text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">Precision Detailing</span>
          <h2 className="text-6xl md:text-8xl font-serif mb-8">Package <span className="text-red italic">Information</span></h2>
          <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
            <span>Car Pricing</span>
            <div className="w-12 h-px bg-white/20"></div>
            <span>Truck/SUV Pricing</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 border border-white/10 flex flex-col h-full bg-stealth-charcoal/50 hover:border-red/30 transition-all group ${tier.featured ? 'border-red/50 shadow-[0_0_50px_rgba(212,0,0,0.1)]' : ''}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red text-black text-[10px] font-black uppercase px-4 py-1 tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-3xl font-serif mb-6 text-white">{tier.name}</h3>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-4xl font-serif text-white">{tier.carPrice}</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Car</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-serif text-white">{tier.truckPrice}</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">Truck / SUV</span>
                </div>
              </div>

              {tier.note && (
                <div className="flex gap-3 p-4 bg-white/5 border-l-2 border-red mb-8">
                  <Info className="w-5 h-5 text-red shrink-0" />
                  <p className="text-[10px] uppercase font-bold tracking-wider leading-relaxed text-white/60">
                    {tier.note}
                  </p>
                </div>
              )}

              {tier.description && (
                <p className="text-sm italic text-white/40 mb-8 border-l border-white/10 pl-4">
                  {tier.description}
                </p>
              )}

              <div className="space-y-8 flex-1">
                {tier.includes ? (
                  <ul className="space-y-4">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs uppercase tracking-wider font-bold text-white/70">
                        <Check className="w-4 h-4 text-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  tier.sections?.map((section, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-red mb-4">{section.title}</h4>
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-xs uppercase tracking-wider font-bold text-white/70">
                            <Check className="w-4 h-4 text-red shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>

              <button 
                onClick={onBookClick}
                className="mt-12 w-full py-4 border border-red/30 text-red text-[10px] font-black uppercase tracking-[0.4em] hover:bg-red hover:text-black transition-all"
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional & Terms */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="p-12 border border-white/10 bg-stealth-charcoal/30">
            <h3 className="text-3xl font-serif mb-10">Additional <span className="text-red italic">Services</span></h3>
            <div className="space-y-6">
              {additional.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 group hover:border-red/20 transition-colors">
                  <span className="uppercase tracking-widest font-bold text-sm text-white/60 group-hover:text-white transition-colors">{item.name}</span>
                  <span className="text-2xl font-serif text-red">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 border-2 border-red/10 bg-red/5">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-red mb-3">Paint Protection</h4>
              <p className="text-sm font-bold uppercase tracking-widest leading-loose">
                Any ceramic coatings or Paint correction <br/>
                <span className="text-red">CONTACT OWNER SERIOUS INQUIRES ONLY</span>
              </p>
            </div>
          </div>

          <div className="p-12 border border-white/10 bg-stealth-charcoal/30">
            <h3 className="text-3xl font-serif mb-10">Terms & <span className="text-red italic">Conditions</span></h3>
            <ul className="space-y-6">
              {[
                "These are starting prices if condition is worse there will be an up charge.",
                "We recommend scheduling an appointment.",
                "Additional charges may apply.",
                "Payment is due upon completion of the service.",
                "We accept cash, cash app, and Apple Pay."
              ].map((term, i) => (
                <li key={i} className="flex gap-4 text-xs uppercase tracking-widest font-bold text-white/40 leading-relaxed">
                  <span className="text-red">0{i + 1}</span>
                  {term}
                </li>
              ))}
            </ul>
            
            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-stealth-black bg-stealth-grey flex items-center justify-center">
                    <Zap className="w-5 h-5 text-red" />
                  </div>
                ))}
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">Ready to transform?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
