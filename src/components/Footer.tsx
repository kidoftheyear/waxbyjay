import { Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="grid grid-cols-12 border-t border-white/10 bg-stealth-black">
      <div className="col-span-12 md:col-span-4 p-12 border-b md:border-b-0 md:border-r border-white/10">
        <span className="text-[10px] uppercase tracking-widest text-gold mb-6 block font-bold">Jay's Touch</span>
        <p className="text-xs leading-loose opacity-60 max-w-xs uppercase tracking-widest">
          Mobile luxury detailing that prioritizes precision over speed. We come to you, but we take our time.
        </p>
      </div>
      <div className="col-span-12 md:col-span-8 p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-wrap gap-12">
          <div>
            <span className="block text-[9px] uppercase opacity-40 mb-2 font-bold tracking-widest">Phone</span>
            <span className="text-sm md:text-lg text-white font-mono">+1 (555) 012-9900</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase opacity-40 mb-2 font-bold tracking-widest">Email</span>
            <span className="text-sm md:text-lg text-white font-mono lowercase italic">jay@waxbyjay.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 border border-white/10 text-[10px] uppercase tracking-[0.4em] hover:bg-gold hover:text-black hover:border-gold transition-all font-bold">
            Coming Soon
          </button>
        </div>
      </div>
      
      <div className="col-span-12 p-8 border-t border-white/10 flex justify-between items-center bg-stealth-charcoal">
        <div className="text-[10px] opacity-30 uppercase tracking-widest font-bold">© 2026 Wax by Jay</div>
        <div className="text-[10px] opacity-30 uppercase tracking-widest font-bold hidden md:block">Hand-Finished Excellence</div>
      </div>
    </footer>
  );
}
