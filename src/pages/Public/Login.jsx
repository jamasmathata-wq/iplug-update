import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../services/supabase';

const accountTypes = [
  { value: 'student', label: '🎓 Student', idLabel: 'Student Number', placeholder: 'e.g. ST123456' },
  { value: 'lecturer', label: '👨‍🏫 Lecturer', idLabel: 'Employee Number', placeholder: 'e.g. EMP202501' },
  { value: 'admin', label: '🏢 Administrator', idLabel: 'Admin Email', placeholder: 'admin@email.com' }
];

const campuses = [
  { value: 'springs', label: 'Springs Campus' },
  { value: 'kwa-thema', label: 'Kwa-Thema Campus' },
  { value: 'benoni', label: 'Benoni Campus' },
  { value: 'daveyton', label: 'Daveyton Campus' }
];

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [campus, setCampus] = useState('springs');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const activeType = accountTypes.find((t) => t.value === role);
  const activeCampus = campuses.find((c) => c.value === campus);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let email = userId;

      if (role !== 'admin') {
        // Look up email using the database function
        const { data, error: rpcError } = await supabase.rpc('get_email_by_user_id', { uid: userId.toUpperCase() });
        if (rpcError || !data) {
          setError('Account not found. Please register first.');
          setLoading(false);
          return;
        }
        email = data;
      }

      await login(email, password);

      // Update status to 'active' for tracking
      if (role === 'student') {
        await supabase.from('verified_students').update({ status: 'active' }).eq('student_number', userId.toUpperCase());
      } else if (role === 'lecturer') {
        await supabase.from('verified_lecturers').update({ status: 'active' }).eq('employee_number', userId.toUpperCase());
      }

      // Redirect based on actual profile role
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: prof } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
        navigate(`/${prof?.role || role}`);
      } else {
        navigate(`/${role}`);
      }
    } catch (err) {
      setError('Invalid credentials. Check your ID/email and password.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-md">
      <div className="card p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-sm">iP</div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Ekurhuleni East TVET College</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Welcome Back</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Sign in to your iPLUG YAMA CAMPUS account.</p>
          <p className="mt-2 text-xs text-primary font-medium">Current Campus: {activeCampus?.label}</p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Account Type</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field">
              {accountTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Campus</label>
            <select value={campus} onChange={(e) => setCampus(e.target.value)} className="input-field">
              {campuses.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{activeType?.idLabel}</label>
            <input type={role === 'admin' ? 'email' : 'text'} value={userId} onChange={(e) => setUserId(e.target.value)} placeholder={activeType?.placeholder} className="input-field" required />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" className="input-field pr-11" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition">
                {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="button-primary w-full disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
          Don't have an account? <Link to="/register" className="font-semibold text-primary hover:text-primary-600">Register here</Link>
        </p>
      </div>
    </motion.div>
  );
}

export default Login;
