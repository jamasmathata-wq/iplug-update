import { useState, useEffect } from 'react';
import { HiPlus, HiTrash } from 'react-icons/hi';
import { supabase } from '../../services/supabase';

function UserManagement() {
  const [tab, setTab] = useState('lecturers');
  const [lecturers, setLecturers] = useState([]);
  const [students, setStudents] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [campus, setCampus] = useState('springs');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => { fetchAll(); }, []);

  async function fetchAll() {
    const { data: l } = await supabase.from('verified_lecturers').select('*').order('created_at', { ascending: false });
    const { data: s } = await supabase.from('verified_students').select('*').order('created_at', { ascending: false });
    setLecturers(l || []);
    setStudents(s || []);
    setLoading(false);
  }

  async function addLecturer() {
    const num = newNumber.trim().toUpperCase();
    if (!num) return;
    setError(''); setSuccess('');
    const { error: err } = await supabase.from('verified_lecturers').insert({ employee_number: num, campus, department });
    if (err) { setError(err.code === '23505' ? `${num} already exists.` : err.message); return; }
    setSuccess(`Lecturer ${num} added.`);
    setNewNumber(''); setDepartment('');
    fetchAll();
  }

  async function addStudent() {
    const num = newNumber.trim().toUpperCase();
    if (!num) return;
    setError(''); setSuccess('');
    const { error: err } = await supabase.from('verified_students').insert({ student_number: num, campus, course });
    if (err) { setError(err.code === '23505' ? `${num} already exists.` : err.message); return; }
    setSuccess(`Student ${num} added.`);
    setNewNumber(''); setCourse('');
    fetchAll();
  }

  async function deleteLecturer(id) {
    await supabase.from('verified_lecturers').delete().eq('id', id);
    fetchAll();
  }

  async function deleteStudent(id) {
    await supabase.from('verified_students').delete().eq('id', id);
    fetchAll();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">User Management</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Add lecturers and students to the system so they can register.</p>
      </div>

      {error && <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>}
      {success && <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400">{success}</div>}

      {/* Tabs */}
      <div className="flex gap-2">
        <button onClick={() => setTab('lecturers')} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${tab === 'lecturers' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>👨‍🏫 Lecturers</button>
        <button onClick={() => setTab('students')} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${tab === 'students' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>🎓 Students</button>
      </div>

      {/* Add Form */}
      <div className="card p-6 space-y-4">
        <h2 className="font-semibold text-slate-900 dark:text-white">{tab === 'lecturers' ? 'Add Lecturer' : 'Add Student'}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">{tab === 'lecturers' ? 'Employee Number' : 'Student Number'}</label>
            <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} placeholder={tab === 'lecturers' ? 'EMP202501' : 'ST123456'} className="input-field" onKeyDown={(e) => e.key === 'Enter' && (tab === 'lecturers' ? addLecturer() : addStudent())} />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Campus</label>
            <select value={campus} onChange={(e) => setCampus(e.target.value)} className="input-field">
              <option value="springs">Springs</option>
              <option value="kwa-thema">Kwa-Thema</option>
              <option value="benoni">Benoni</option>
              <option value="daveyton">Daveyton</option>
            </select>
          </div>
          {tab === 'lecturers' ? (
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Department</label>
              <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g. IT" className="input-field" />
            </div>
          ) : (
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Course</label>
              <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="e.g. Software Engineering" className="input-field" />
            </div>
          )}
          <div className="flex items-end">
            <button onClick={tab === 'lecturers' ? addLecturer : addStudent} className="button-primary w-full"><HiPlus className="h-4 w-4" /> Add</button>
          </div>
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="card p-6 text-center text-sm text-slate-400">Loading...</div>
      ) : tab === 'lecturers' ? (
        <div className="card overflow-hidden">
          <div className="border-b border-slate-200/60 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{lecturers.length} Lecturers</p>
          </div>
          {lecturers.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-400">No lecturers added yet.</div>
          ) : (
            <div className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {lecturers.map((l) => (
                <div key={l.id} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">{l.employee_number}</span>
                    <span className="text-xs text-slate-400">{l.campus} • {l.department}</span>
                  </div>
                  <button onClick={() => deleteLecturer(l.id)} className="text-slate-400 hover:text-red-500 transition"><HiTrash className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="card overflow-hidden">
          <div className="border-b border-slate-200/60 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{students.length} Students</p>
          </div>
          {students.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-400">No students added yet.</div>
          ) : (
            <div className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {students.map((s) => (
                <div key={s.id} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">{s.student_number}</span>
                    <span className="text-xs text-slate-400">{s.campus} • {s.course}</span>
                  </div>
                  <button onClick={() => deleteStudent(s.id)} className="text-slate-400 hover:text-red-500 transition"><HiTrash className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserManagement;
