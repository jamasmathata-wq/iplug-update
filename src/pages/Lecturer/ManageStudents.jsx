import { useState, useEffect } from 'react';
import { HiPlus, HiTrash } from 'react-icons/hi';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function ManageStudents() {
  const { profile } = useAuth();
  const [students, setStudents] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [bulkText, setBulkText] = useState('');
  const [tab, setTab] = useState('single');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => { fetchStudents(); }, []);

  async function fetchStudents() {
    const { data } = await supabase.from('verified_students').select('*').order('created_at', { ascending: false });
    setStudents(data || []);
    setLoading(false);
  }

  async function addStudent(number) {
    const trimmed = number.trim().toUpperCase();
    if (!trimmed) return;
    setError(''); setSuccess('');
    const { error: err } = await supabase.from('verified_students').insert({
      student_number: trimmed,
      campus: profile?.campus || 'springs',
      added_by: profile?.id
    });
    if (err) {
      if (err.code === '23505') setError(`${trimmed} already exists.`);
      else setError(err.message);
      return;
    }
    setSuccess(`${trimmed} added.`);
    setNewNumber('');
    fetchStudents();
  }

  async function addBulk() {
    setError(''); setSuccess('');
    const numbers = bulkText.split('\n').map(n => n.trim().toUpperCase()).filter(Boolean);
    if (!numbers.length) return;
    const rows = numbers.map(n => ({ student_number: n, campus: profile?.campus || 'springs', added_by: profile?.id }));
    const { error: err } = await supabase.from('verified_students').insert(rows);
    if (err) { setError(err.message); return; }
    setSuccess(`${numbers.length} students added.`);
    setBulkText('');
    fetchStudents();
  }

  async function removeStudent(id) {
    await supabase.from('verified_students').delete().eq('id', id);
    fetchStudents();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Students</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Add student numbers to allow registration. Only listed students can create accounts.</p>
      </div>

      {error && <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>}
      {success && <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">{success}</div>}

      {/* Add Student Numbers */}
      <div className="card p-6">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('single')} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${tab === 'single' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>Add Single</button>
          <button onClick={() => setTab('bulk')} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${tab === 'bulk' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>Bulk Add</button>
        </div>

        {tab === 'single' && (
          <div className="flex gap-3">
            <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} placeholder="e.g. ST123456" className="input-field flex-1" onKeyDown={(e) => e.key === 'Enter' && addStudent(newNumber)} />
            <button onClick={() => addStudent(newNumber)} className="button-primary shrink-0"><HiPlus className="h-4 w-4" /> Add</button>
          </div>
        )}

        {tab === 'bulk' && (
          <div className="space-y-3">
            <textarea value={bulkText} onChange={(e) => setBulkText(e.target.value)} placeholder={"Paste student numbers, one per line:\nST123460\nST123461\nST123462"} rows={4} className="input-field resize-none font-mono text-xs" />
            <button onClick={addBulk} className="button-primary w-full"><HiPlus className="h-4 w-4" /> Add All</button>
          </div>
        )}
      </div>

      {/* Student List */}
      <div className="card overflow-hidden">
        <div className="border-b border-slate-200/60 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{students.length} Student Numbers Added</p>
        </div>
        {loading ? (
          <div className="p-6 text-center text-sm text-slate-400">Loading...</div>
        ) : students.length === 0 ? (
          <div className="p-6 text-center text-sm text-slate-400">No student numbers added yet.</div>
        ) : (
          <div className="divide-y divide-slate-200/60 dark:divide-slate-700">
            {students.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-4 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">{s.student_number}</span>
                  <span className="text-xs text-slate-400">{s.campus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${s.status === 'active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : s.status === 'registered' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>{s.status || 'pending'}</span>
                  <button onClick={() => removeStudent(s.id)} className="text-slate-400 hover:text-red-500 transition" aria-label="Remove">
                    <HiTrash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageStudents;
