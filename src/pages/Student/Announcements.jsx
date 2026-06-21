import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase.from('announcements').select('*').order('created_at', { ascending: false });
      setAnnouncements(data || []);
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) return <div className="card p-6 text-center text-sm text-slate-400">Loading announcements...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Announcements</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Latest communications from your lecturers and campus.</p>
      </div>

      {announcements.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No announcements yet.</div>
      ) : (
        <div className="space-y-3">
          {announcements.map((a) => (
            <div key={a.id} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-slate-900 dark:text-white">{a.title}</h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{a.content}</p>
                </div>
                <span className="shrink-0 text-xs text-slate-400">{new Date(a.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Announcements;
