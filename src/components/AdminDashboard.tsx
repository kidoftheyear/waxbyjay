import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Check, X, Clock, Calendar, 
  User, Mail, Phone, Car, Scissors, 
  DollarSign, TrendingUp, Filter
} from 'lucide-react';
import { format } from 'date-fns';

interface Booking {
  id: string;
  created_at: string;
  client_name: string;
  email: string;
  phone: string;
  service_type: string;
  vehicle_type: string;
  scheduled_date: string;
  status: 'pending' | 'approved' | 'rejected';
  total_price: number;
  has_dog_hair: boolean;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchBookings();
  }, []);

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
    }
  }

  async function fetchBookings() {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching bookings:', error);
    else setBookings(data || []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: 'approved' | 'rejected') {
    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id);

    if (error) alert('Error updating status');
    else fetchBookings();
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filter);

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    revenue: bookings.filter(b => b.status === 'approved').reduce((acc, b) => acc + b.total_price, 0)
  };

  return (
    <div className="min-h-screen bg-stealth-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-stealth-charcoal/50 p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-red flex items-center justify-center">
            <TrendingUp className="text-black w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-serif uppercase italic">Dashboard</h1>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Wax by Jay Management</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/40 hover:text-red transition-colors"
        >
          Logout <LogOut size={14} />
        </button>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Requests', value: stats.total, icon: Calendar, color: 'text-white' },
            { label: 'Pending Approval', value: stats.pending, icon: Clock, color: 'text-yellow-400' },
            { label: 'Total Revenue', value: `$${stats.revenue}`, icon: DollarSign, color: 'text-green-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-stealth-charcoal border border-white/10 p-8 flex items-center gap-6">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">{stat.label}</p>
                <p className="text-3xl font-serif italic">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3 bg-stealth-charcoal p-1 border border-white/10">
            {['all', 'pending', 'approved', 'rejected'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 text-[10px] uppercase font-black tracking-widest transition-all ${filter === f ? 'bg-red text-black' : 'text-white/40 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <button 
            onClick={fetchBookings}
            className="px-6 py-3 border border-white/10 text-[10px] uppercase font-black tracking-widest hover:bg-white/5 transition-all"
          >
            Refresh Data
          </button>
        </div>

        {/* Bookings Table */}
        <div className="bg-stealth-charcoal border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-[10px] uppercase tracking-widest font-black text-white/40">Client / Vehicle</th>
                  <th className="p-6 text-[10px] uppercase tracking-widest font-black text-white/40">Service / Date</th>
                  <th className="p-6 text-[10px] uppercase tracking-widest font-black text-white/40">Price / Add-ons</th>
                  <th className="p-6 text-[10px] uppercase tracking-widest font-black text-white/40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-20 text-center text-white/40 uppercase tracking-widest text-xs font-bold">Loading Bookings...</td>
                  </tr>
                ) : filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-20 text-center text-white/40 uppercase tracking-widest text-xs font-bold">No Bookings Found</td>
                  </tr>
                ) : (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-red/10 border border-red/20 flex items-center justify-center shrink-0">
                            <User className="text-red w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold uppercase tracking-widest text-sm mb-1">{booking.client_name}</p>
                            <div className="flex items-center gap-3 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                              <span className="flex items-center gap-1"><Mail size={12} /> {booking.email}</span>
                              <span className="flex items-center gap-1"><Phone size={12} /> {booking.phone}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="text-red">
                            <Car size={20} />
                          </div>
                          <div>
                            <p className="font-bold uppercase tracking-widest text-sm mb-1">{booking.service_type}</p>
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest flex items-center gap-2">
                              <Calendar size={12} /> {format(new Date(booking.scheduled_date), 'PPP')}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <p className="text-2xl font-serif italic mb-1">${booking.total_price}</p>
                        <div className="flex items-center gap-2">
                          {booking.has_dog_hair && (
                            <span className="text-[8px] px-2 py-0.5 bg-red/20 text-red border border-red/30 uppercase font-black tracking-widest">Dog Hair Removal</span>
                          )}
                          <span className="text-[8px] px-2 py-0.5 bg-white/5 text-white/60 border border-white/10 uppercase font-black tracking-widest">{booking.vehicle_type}</span>
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {booking.status === 'pending' ? (
                            <>
                              <button 
                                onClick={() => updateStatus(booking.id, 'approved')}
                                className="w-10 h-10 bg-green-500/20 text-green-500 border border-green-500/30 flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
                              >
                                <Check size={18} />
                              </button>
                              <button 
                                onClick={() => updateStatus(booking.id, 'rejected')}
                                className="w-10 h-10 bg-red/20 text-red border border-red/30 flex items-center justify-center hover:bg-red hover:text-black transition-all"
                              >
                                <X size={18} />
                              </button>
                            </>
                          ) : (
                            <span className={`text-[10px] uppercase font-black tracking-widest ${booking.status === 'approved' ? 'text-green-500' : 'text-red'}`}>
                              {booking.status}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
