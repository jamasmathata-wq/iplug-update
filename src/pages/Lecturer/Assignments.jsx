import { useState, useEffect } from 'react';
import { HiPlus, HiTrash } from 'react-icons/hi';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function LecturerAssignments() {
  const { profile } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => { fetch(); }, []);

  async function fetch() {
    const { data } = await supabase.from('assignments').select('*').eq('author_id', profile?.id).order('created_at', { ascending: false });
    setAssignments(data || []);
    setLoading(false);
  }

  async function handleCreate(e) {
    e.preventDefault();
    setError('');
    const { error: err } = await supabase.from('assignments').insert({ title, description, course, due_date: dueDate, campus: profile?.campus, author_id: profile?.id });
    if (err) { setError(err.message); return; }
    setTitle(''); setDescription(''); setCourse(''); setDueDate(''); setShowForm(false);
    fetch();
  }

  async function handleDelete(id) {
    await supabase.from('assignments').delete().eq('id', id);
    fetch();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Assignments</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Create and manage assignments for your classes.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="button-primary"><HiPlus className="h-4 w-4" /> New Assignment</button>
      </div>

      {error && <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>}

      {showForm && (
        <form onSubmit={handleCreate} className="card p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Assignment title" className="input-field" required />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
              <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course name" className="input-field" required />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Assignment details..." rows={3} className="input-field resize-none" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Due Date</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="input-field" required />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="button-primary">Create Assignment</button>
            <button type="button" onClick={() => setShowForm(false)} className="button-secondary">Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="card p-6 text-center text-sm text-slate-400">Loading...</div>
      ) : assignments.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No assignments yet.</div>
      ) : (
        <div className="space-y-3">
          {assignments.map((a) => (
            <div key={a.id} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-white">{a.title}</h2>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{a.course} • Due: {a.due_date}</p>
                {a.description && <p className="mt-1 text-xs text-slate-400">{a.description}</p>}
              </div>
              <button onClick={() => handleDelete(a.id)} className="shrink-0 text-slate-400 hover:text-red-500 transition"><HiTrash className="h-5 w-5" /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LecturerAssignments;
