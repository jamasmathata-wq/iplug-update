import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../contexts/AuthContext';

function Assignments() {
  const { profile } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    const { data: asgn } = await supabase.from('assignments').select('*').order('due_date', { ascending: true });
    setAssignments(asgn || []);
    const { data: subs } = await supabase.from('submissions').select('*').eq('student_id', profile?.id);
    const subMap = {};
    (subs || []).forEach(s => { subMap[s.assignment_id] = s; });
    setSubmissions(subMap);
    setLoading(false);
  }

  async function handleSubmit(assignmentId) {
    const { error } = await supabase.from('submissions').insert({ assignment_id: assignmentId, student_id: profile?.id, status: 'submitted' });
    if (!error) fetchData();
  }

  if (loading) return <div className="card p-6 text-center text-sm text-slate-400">Loading assignments...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Assignments</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">View assignments and submit your work.</p>
      </div>

      {assignments.length === 0 ? (
        <div className="card p-6 text-center text-sm text-slate-400">No assignments available.</div>
      ) : (
        <div className="space-y-3">
          {assignments.map((a) => {
            const sub = submissions[a.id];
            return (
              <div key={a.id} className="card p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-semibold text-slate-900 dark:text-white">{a.title}</h2>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{a.course} • Due: {a.due_date}</p>
                    {a.description && <p className="mt-1 text-xs text-slate-400">{a.description}</p>}
                  </div>
                  <div className="shrink-0">
                    {sub ? (
                      <div className="text-right">
                        <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${sub.status === 'graded' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                          {sub.status === 'graded' ? `Graded: ${sub.mark}%` : 'Submitted'}
                        </span>
                        {sub.feedback && <p className="mt-1 text-xs text-slate-400">{sub.feedback}</p>}
                      </div>
                    ) : (
                      <button onClick={() => handleSubmit(a.id)} className="button-primary text-xs">Submit</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Assignments;
