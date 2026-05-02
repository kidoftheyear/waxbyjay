import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import emailjs from '@emailjs/browser';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { name: 'Level 1 Basic', carPrice: 80, truckPrice: 115 },
  { name: 'Level 2 Standard', carPrice: 130, truckPrice: 150 },
  { name: 'Level 3 Deluxe', carPrice: 190, truckPrice: 215 },
  { name: 'Paint Protection / Ceramic', carPrice: 0, truckPrice: 0, manual: true },
  { name: 'Other / Inquiry', carPrice: 0, truckPrice: 0, manual: true }
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Level 1 Basic',
    vehicleType: 'Car',
    hasDogHair: false,
    date: undefined as Date | undefined
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(80);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const selectedService = services.find(s => s.name === formData.service);
    if (!selectedService || selectedService.manual) {
      setTotalPrice(0);
      return;
    }

    let base = formData.vehicleType === 'Car' ? selectedService.carPrice : selectedService.truckPrice;
    if (formData.hasDogHair) base += 50;
    setTotalPrice(base);
  }, [formData.service, formData.vehicleType, formData.hasDogHair]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date) {
      alert("Please select a date");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service_type: formData.service,
      vehicle_type: formData.vehicleType,
      date: format(formData.date, 'PPP'),
      dog_hair: formData.hasDogHair ? 'YES' : 'NO',
      total_price: totalPrice > 0 ? `$${totalPrice}` : 'Manual Quote Required',
      to_name: 'Jay'
    };

    try {
      // NOTE: You will need to replace these with your own EmailJS keys
      // Service ID, Template ID, and Public Key
      await emailjs.send(
        'service_id', 
        'template_id', 
        templateParams, 
        'public_key'
      );

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Level 1 Basic',
          vehicleType: 'Car',
          hasDogHair: false,
          date: undefined
        });
      }, 4000);
    } catch (error) {
      console.error('Email error:', error);
      // Even if it fails, we'll show success for the demo or advise the user
      alert('To finish the email setup, you just need to add your EmailJS keys in the code!');
    } finally {
      setIsSubmitting(false);
    }
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
            className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-10 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-red-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            {isSuccess ? (
              <div className="py-20 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle2 className="text-black w-10 h-10" />
                </motion.div>
                <h3 className="text-3xl font-serif text-white uppercase italic mb-4">Request Sent!</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">
                  Jay has been notified. <br/>
                  He will contact you shortly to confirm your booking.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-red-600 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Precision Booking</span>
                  <h3 className="text-4xl font-serif text-white uppercase italic">Reserve Your <br/>Detail</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Full Name</label>
                      <input 
                        required
                        type="text"
                        className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-red-600/50 outline-none transition-colors uppercase tracking-widest"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Vehicle Type</label>
                      <select 
                        className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-red-600/50 outline-none transition-colors uppercase tracking-widest appearance-none"
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                      >
                        <option>Car</option>
                        <option>Truck / SUV</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Email Address</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-red-600/50 outline-none transition-colors uppercase tracking-widest"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel"
                        className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-red-600/50 outline-none transition-colors uppercase tracking-widest"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Type of Service</label>
                    <select 
                      className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-red-600/50 outline-none transition-colors uppercase tracking-widest appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      {services.map(s => <option key={s.name}>{s.name}</option>)}
                    </select>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Preferred Date</label>
                    <button
                      type="button"
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-red-600/50 outline-none transition-colors uppercase tracking-widest flex items-center justify-between"
                    >
                      {formData.date ? format(formData.date, 'PPP') : 'Select a date'}
                      <CalendarIcon size={18} className="text-red-600" />
                    </button>
                    
                    {showCalendar && (
                      <div className="absolute z-10 mt-2 bg-[#0A0A0A] border border-white/10 p-4 shadow-2xl right-0 left-0 md:left-auto">
                        <DayPicker
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => {
                            setFormData({...formData, date});
                            setShowCalendar(false);
                          }}
                          disabled={{ before: new Date() }}
                          styles={{
                            caption: { color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' },
                            head_cell: { color: 'rgba(255,255,255,0.4)', fontSize: '10px' },
                            day: { color: 'white' },
                            day_selected: { backgroundColor: '#D40000', color: 'black', fontWeight: 'bold' },
                            day_today: { color: '#D40000', fontWeight: 'bold' }
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
                    <input 
                      type="checkbox"
                      id="dogHair"
                      className="w-5 h-5 accent-red-600"
                      checked={formData.hasDogHair}
                      onChange={(e) => setFormData({...formData, hasDogHair: e.target.checked})}
                    />
                    <label htmlFor="dogHair" className="text-[10px] uppercase tracking-widest font-bold text-white/60 cursor-pointer">
                      Excessive Dog Hair Removal (+$50)
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-6 border-t border-white/10">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold block">Estimated Total</span>
                      <span className="text-4xl font-serif text-white italic">
                        {totalPrice > 0 ? `$${totalPrice}` : 'Quote Req.'}
                      </span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-6 bg-red-600 text-black font-black uppercase tracking-[0.5em] text-[10px] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,0,0,0.2)] flex items-center gap-3 group disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Request to Book'}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
