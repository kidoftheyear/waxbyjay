import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Level 1 Basic'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Booking Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `sms:3343220554?body=${encodedMessage}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-stealth-charcoal border border-white/10 p-8 md:p-12 max-w-xl w-full shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-red transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="mb-8">
              <span className="text-red text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Request Service</span>
              <h3 className="text-4xl font-serif text-white uppercase italic">Book Your <br/>Session</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-stealth-black border border-white/10 p-4 text-sm text-white focus:border-red/50 outline-none transition-colors uppercase tracking-widest"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Email Address</label>
                  <input 
                    required
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-stealth-black border border-white/10 p-4 text-sm text-white focus:border-red/50 outline-none transition-colors uppercase tracking-widest"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel"
                    placeholder="(000) 000-0000"
                    className="w-full bg-stealth-black border border-white/10 p-4 text-sm text-white focus:border-red/50 outline-none transition-colors uppercase tracking-widest"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Type of Service</label>
                <select 
                  className="w-full bg-stealth-black border border-white/10 p-4 text-sm text-white focus:border-red/50 outline-none transition-colors uppercase tracking-widest appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Level 1 Basic</option>
                  <option>Level 2 Standard</option>
                  <option>Level 3 Deluxe</option>
                  <option>Paint Protection / Ceramic</option>
                  <option>Other / Inquiry</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-red text-black font-black uppercase tracking-[0.5em] text-[10px] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,0,0,0.2)] flex items-center justify-center gap-3 group"
              >
                Send Request
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
