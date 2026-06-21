import { useState, useEffect } from 'react';
import { HiDownload, HiDocumentText, HiPlay, HiBookOpen } from 'react-icons/hi';
import { supabase } from '../../services/supabase';

const icons = { PDF: HiDocumentText, PPTX: HiDocumentText, Video: HiPlay, Document: HiBookOpen, Other: HiDocumentText };

function SubjectResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase.from('resources').select('*').order('created_at', { ascending: false });
      setResources(data || []);
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) return <div className="card p-6 text-center text-sm text-slate-400">Loading resources...</div>;

  // Group by course
  const grouped = resources.reduce((acc, r) => {
    const key = r.course || 'General';
    if (!acc[key]) acc[key] = [];
    acc[key].push(r);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Subject Resources</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Notes, videos, past papers, and tutorials per subject.</p>
      </div>

      {resources.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No resources available yet.</div>
      ) : (
        Object.entries(grouped).map(([course, items]) => (
          <div key={course} className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{course}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((r) => {
                const Icon = icons[r.file_type] || HiDocumentText;
                return (
                  <div key={r.id} className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900 dark:text-white">{r.title}</p>
                      <p className="text-xs text-slate-400">{r.file_type}</p>
                    </div>
                    {r.file_url && (
                      <a href={r.file_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-600">
                        <HiDownload className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SubjectResources;
