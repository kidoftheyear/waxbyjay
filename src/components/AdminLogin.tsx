import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/admin');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-stealth-black flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-stealth-charcoal border border-white/10 p-10 shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-red/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red/20">
            <Shield className="text-red w-8 h-8" />
          </div>
          <span className="text-red text-[10px] uppercase tracking-[0.5em] font-bold block mb-2">Secure Access</span>
          <h2 className="text-4xl font-serif text-white uppercase italic">Admin Login</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Email Address</label>
            <input 
              required
              type="email"
              className="w-full bg-stealth-black border border-white/10 p-4 text-sm text-white focus:border-red/50 outline-none transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Password</label>
            <input 
              required
              type="password"
              className="w-full bg-stealth-black border border-white/10 p-4 text-sm text-white focus:border-red/50 outline-none transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red text-[10px] uppercase font-bold tracking-widest text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-6 bg-red text-black font-black uppercase tracking-[0.5em] text-[10px] hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
            <Lock size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
