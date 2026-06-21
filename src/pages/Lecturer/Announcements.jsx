import { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function LecturerAnnouncements() {
  const { profile } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [audience, setAudience] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => { fetchAnnouncements(); }, []);

  async function fetchAnnouncements() {
    const { data } = await supabase.from('announcements').select('*').eq('author_id', profile?.id).order('created_at', { ascending: false });
    setAnnouncements(data || []);
    setLoading(false);
  }

  async function handleCreate(e) {
    e.preventDefault();
    setError('');
    const { error: err } = await supabase.from('announcements').insert({
      title,
      content,
      audience,
      campus: profile?.campus,
      author_id: profile?.id,
      is_public: audience === 'all'
    });
    if (err) { setError(err.message); return; }
    setTitle(''); setContent(''); setAudience('all'); setShowForm(false);
    fetchAnnouncements();
  }

  async function deleteAnnouncement(id) {
    await supabase.from('announcements').delete().eq('id', id);
    fetchAnnouncements();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Announcements</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Create and manage announcements for your students.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="button-primary"><HiPlus className="h-4 w-4" /> New Announcement</button>
      </div>

      {error && <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>}

      {showForm && (
        <form onSubmit={handleCreate} className="card p-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Announcement title" className="input-field" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your announcement..." rows={3} className="input-field resize-none" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Audience</label>
            <select value={audience} onChange={(e) => setAudience(e.target.value)} className="input-field">
              <option value="all">All Students</option>
              <option value="students">My Students Only</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="button-primary">Publish</button>
            <button type="button" onClick={() => setShowForm(false)} className="button-secondary">Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="card p-6 text-center text-sm text-slate-400">Loading...</div>
      ) : announcements.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No announcements yet. Create your first one!</div>
      ) : (
        <div className="space-y-3">
          {announcements.map((a) => (
            <div key={a.id} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-white">{a.title}</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{a.content}</p>
                <p className="mt-2 text-xs text-slate-400">{new Date(a.created_at).toLocaleDateString()}</p>
              </div>
              <button onClick={() => deleteAnnouncement(a.id)} className="shrink-0 text-xs font-semibold text-red-500 hover:text-red-700">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LecturerAnnouncements;
