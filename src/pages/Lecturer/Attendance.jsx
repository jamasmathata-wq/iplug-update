import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function Attendance() {
  const { profile } = useAuth();
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => { fetchStudents(); }, []);

  async function fetchStudents() {
    const { data } = await supabase.from('verified_students').select('*').eq('campus', profile?.campus);
    setStudents(data || []);
    const defaultAtt = {};
    (data || []).forEach(s => { defaultAtt[s.student_number] = 'present'; });
    setAttendance(defaultAtt);
    setLoading(false);
  }

  function toggle(number) {
    setAttendance(prev => ({ ...prev, [number]: prev[number] === 'present' ? 'absent' : 'present' }));
  }

  async function saveAttendance() {
    if (!subject) return;
    setSaving(true); setSuccess('');
    // Get student profiles by user_id
    const { data: profiles } = await supabase.from('profiles').select('id, user_id').in('user_id', Object.keys(attendance));
    const records = (profiles || []).map(p => ({
      student_id: p.id,
      lecturer_id: profile?.id,
      subject,
      status: attendance[p.user_id] || 'present',
      campus: profile?.campus
    }));
    if (records.length) {
      await supabase.from('attendance').insert(records);
    }
    setSuccess(`Attendance saved for ${records.length} students.`);
    setSaving(false);
  }

  const presentCount = Object.values(attendance).filter(v => v === 'present').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Attendance</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Record attendance per class session.</p>
      </div>

      {success && <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">{success}</div>}

      {/* Session Info */}
      <div className="card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. Data Structures" className="input-field" />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{presentCount}</p>
              <p className="text-xs text-slate-400">Present</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">{students.length - presentCount}</p>
              <p className="text-xs text-slate-400">Absent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Student List */}
      {loading ? (
        <div className="card p-6 text-center text-sm text-slate-400">Loading...</div>
      ) : students.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No students found. Add student numbers first.</div>
      ) : (
        <div className="card overflow-hidden">
          <div className="divide-y divide-slate-200/60 dark:divide-slate-700">
            {students.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-4 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${attendance[s.student_number] === 'present' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                  <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">{s.student_number}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setAttendance(prev => ({ ...prev, [s.student_number]: 'present' }))} className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${attendance[s.student_number] === 'present' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>Present</button>
                  <button onClick={() => setAttendance(prev => ({ ...prev, [s.student_number]: 'absent' }))} className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${attendance[s.student_number] === 'absent' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>Absent</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button onClick={saveAttendance} disabled={saving || !subject} className="button-primary w-full disabled:opacity-50">
        {saving ? 'Saving...' : 'Save Attendance'}
      </button>
    </div>
  );
}

export default Attendance;
