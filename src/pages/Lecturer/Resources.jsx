import { useState, useEffect } from 'react';
import { HiUpload, HiTrash } from 'react-icons/hi';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function LecturerResources() {
  const { profile } = useAuth();
  const [resources, setResources] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [fileType, setFileType] = useState('PDF');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { fetch(); }, []);

  async function fetch() {
    const { data } = await supabase.from('resources').select('*').eq('author_id', profile?.id).order('created_at', { ascending: false });
    setResources(data || []);
    setLoading(false);
  }

  async function handleCreate(e) {
    e.preventDefault();
    setError(''); setUploading(true);
    let fileUrl = null;

    if (file) {
      const ext = file.name.split('.').pop();
      const path = `resources/${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from('uploads').upload(path, file);
      if (upErr) { setError(upErr.message); setUploading(false); return; }
      const { data: urlData } = supabase.storage.from('uploads').getPublicUrl(path);
      fileUrl = urlData.publicUrl;
    }

    const { error: err } = await supabase.from('resources').insert({ title, description, course, file_type: fileType, file_url: fileUrl, campus: profile?.campus, author_id: profile?.id });
    if (err) { setError(err.message); setUploading(false); return; }
    setTitle(''); setDescription(''); setCourse(''); setFile(null); setShowForm(false); setUploading(false);
    fetch();
  }

  async function handleDelete(id) {
    await supabase.from('resources').delete().eq('id', id);
    fetch();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Resources</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Upload notes, slides, videos, and past papers.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="button-primary"><HiUpload className="h-4 w-4" /> Upload</button>
      </div>

      {error && <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">{error}</div>}

      {showForm && (
        <form onSubmit={handleCreate} className="card p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resource title" className="input-field" required />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
              <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course name" className="input-field" required />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief description" className="input-field" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Type</label>
              <select value={fileType} onChange={(e) => setFileType(e.target.value)} className="input-field">
                <option>PDF</option><option>PPTX</option><option>Video</option><option>Document</option><option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">File</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} className="input-field text-xs" />
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={uploading} className="button-primary disabled:opacity-50">{uploading ? 'Uploading...' : 'Upload Resource'}</button>
            <button type="button" onClick={() => setShowForm(false)} className="button-secondary">Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="card p-6 text-center text-sm text-slate-400">Loading...</div>
      ) : resources.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No resources uploaded yet.</div>
      ) : (
        <div className="space-y-3">
          {resources.map((r) => (
            <div key={r.id} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-white">{r.title}</h2>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{r.course} • {r.file_type}</p>
              </div>
              <div className="flex items-center gap-3">
                {r.file_url && <a href={r.file_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:text-primary-600">Download</a>}
                <button onClick={() => handleDelete(r.id)} className="text-slate-400 hover:text-red-500 transition"><HiTrash className="h-5 w-5" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LecturerResources;
