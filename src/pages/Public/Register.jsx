import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../services/supabase';

const accountTypes = [
  { value: 'student', label: '🎓 Student', idLabel: 'Student Number', placeholder: 'e.g. ST123456', table: 'verified_students', field: 'student_number' },
  { value: 'lecturer', label: '👨‍🏫 Lecturer', idLabel: 'Employee Number', placeholder: 'e.g. EMP202501', table: 'verified_lecturers', field: 'employee_number' }
];

const campuses = [
  { value: 'springs', label: 'Springs Campus' },
  { value: 'kwa-thema', label: 'Kwa-Thema Campus' },
  { value: 'benoni', label: 'Benoni Campus' },
  { value: 'daveyton', label: 'Daveyton Campus' }
];

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [campus, setCampus] = useState('springs');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const activeType = accountTypes.find((t) => t.value === role);
  const activeCampus = campuses.find((c) => c.value === campus);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(''); setSuccess('');

    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
    if (!terms) { setError('You must accept the Terms & Conditions.'); return; }

    setLoading(true);
    try {
      // Verify student/lecturer number exists
      const { data: verified } = await supabase
        .from(activeType.table)
        .select('id')
        .eq(activeType.field, userId.toUpperCase())
        .single();

      if (!verified) {
        setError(`${activeType.idLabel} not found. Contact your ${role === 'student' ? 'lecturer' : 'administrator'} to be added.`);
        setLoading(false);
        return;
      }

      // Register with real email
      await register(email, password, {
        role,
        campus,
        first_name: firstName,
        last_name: lastName,
        user_id: userId.toUpperCase()
      });

      // Update status to 'registered'
      if (role === 'student') {
        await supabase.from('verified_students').update({ status: 'registered' }).eq('student_number', userId.toUpperCase());
      } else {
        await supabase.from('verified_lecturers').update({ status: 'registered' }).eq('employee_number', userId.toUpperCase());
      }

      setSuccess('Account created! You can now sign in.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-lg">
      <div className="card p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-sm">iP</div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Ekurhuleni East TVET College</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Create Account</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Register for your iPLUG YAMA CAMPUS portal.</p>
          <p className="mt-2 text-xs text-primary font-medium">Current Campus: {activeCampus?.label}</p>
        </div>

        {error && <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>}
        {success && <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">{success}</div>}

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Account Type</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field">
              {accountTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Campus</label>
            <select value={campus} onChange={(e) => setCampus(e.target.value)} className="input-field">
              {campuses.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className="input-field" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" className="input-field" required />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input-field" required />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="072 123 4567" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{activeType?.idLabel}</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder={activeType?.placeholder} className="input-field" required />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input-field pr-11" required minLength={6} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition">
                {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
            <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm" className="input-field" required />
          </div>

          <div className="sm:col-span-2">
            <label className="inline-flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" />
              <span>I agree to the <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and acknowledge the <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link></span>
            </label>
          </div>

          <div className="sm:col-span-2 space-y-4">
            <button type="submit" disabled={loading} className="button-primary w-full disabled:opacity-50">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              Already have an account? <Link to="/login" className="font-semibold text-primary">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Register;
