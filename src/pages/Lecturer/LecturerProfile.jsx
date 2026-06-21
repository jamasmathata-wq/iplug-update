import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function LecturerProfile() {
  const { profile } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name || '');
      setLastName(profile.last_name || '');
      setPhone(profile.phone || '');
    }
  }, [profile]);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true); setSuccess('');
    await supabase.from('profiles').update({ first_name: firstName, last_name: lastName, phone }).eq('id', profile.id);
    setSuccess('Profile updated!');
    setSaving(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Profile</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Manage your lecturer profile.</p>
      </div>

      {success && <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">{success}</div>}

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleSave} className="card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Personal Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-field" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input-field" />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" />
          </div>
          <button type="submit" disabled={saving} className="button-primary disabled:opacity-50">{saving ? 'Saving...' : 'Save Changes'}</button>
        </form>

        <div className="card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Account Details</h2>
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Employee Number</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">{profile?.user_id || '—'}</p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Role</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white capitalize">{profile?.role || '—'}</p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Campus</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white capitalize">{profile?.campus || '—'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerProfile;
