import { Car } from 'lucide-react';

export default function Footer({ onBookClick }: { onBookClick: () => void }) {
  return (
    <footer className="grid grid-cols-12 border-t border-white/10 bg-stealth-black">
      <div className="col-span-12 md:col-span-4 p-12 border-b md:border-b-0 md:border-r border-white/10">
        <span className="text-[10px] uppercase tracking-widest text-red mb-6 block font-bold">Jay's Touch</span>
        <p className="text-xs leading-loose opacity-60 max-w-xs uppercase tracking-widest">
          Mobile luxury detailing that prioritizes precision over speed. We come to you, but we take our time.
        </p>
      </div>
      <div className="col-span-12 md:col-span-8 p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-wrap gap-12">
          <div>
            <span className="block text-[9px] uppercase opacity-40 mb-2 font-bold tracking-widest">Phone</span>
            <a href="tel:3343220554" className="text-sm md:text-lg text-white font-mono hover:text-red transition-colors font-bold tracking-tighter">(334) 322-0554</a>
          </div>
          <div>
            <span className="block text-[9px] uppercase opacity-40 mb-2 font-bold tracking-widest">Email</span>
            <a href="mailto:waxbyj19@gmail.com" className="text-sm md:text-lg text-white font-mono lowercase italic hover:text-red transition-colors">waxbyj19@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={onBookClick}
            className="px-8 py-4 border border-white/10 text-[10px] uppercase tracking-[0.4em] hover:bg-red hover:text-black hover:border-red transition-all font-bold"
          >
            Request Quote
          </button>
        </div>
      </div>
      
      <div className="col-span-12 p-8 border-t border-white/10 flex justify-between items-center bg-stealth-charcoal">
        <div className="text-[10px] opacity-30 uppercase tracking-widest font-bold">© 2026 Wax by Jay | Millbrook, AL</div>
        <div className="text-[10px] opacity-30 uppercase tracking-widest font-bold hidden md:block">Hand-Finished Excellence</div>
      </div>
    </footer>
  );
}
