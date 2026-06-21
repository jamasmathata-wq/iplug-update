const submissions = [
  { student: 'Ayesha Khumalo', number: 'ST123456', assignment: 'Database Project', submitted: 'Jun 15', status: 'Submitted', mark: null },
  { student: 'Sipho Mokoena', number: 'ST123457', assignment: 'Database Project', submitted: 'Jun 15', status: 'Submitted', mark: null },
  { student: 'Thandi Nkosi', number: 'ST123460', assignment: 'Database Project', submitted: 'Jun 14', status: 'Graded', mark: 78 },
  { student: 'James Molefe', number: 'ST123461', assignment: 'Database Project', submitted: '—', status: 'Not Submitted', mark: null }
];

function Grading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Grading</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Review submissions, grade work, and provide feedback.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Awaiting Grading</p>
          <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">2</p>
        </div>
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Graded</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">1</p>
        </div>
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Not Submitted</p>
          <p className="mt-1 text-2xl font-bold text-red-600 dark:text-red-400">1</p>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Student</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Number</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Submitted</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mark</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {submissions.map((s) => (
                <tr key={s.number} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900 dark:text-white">{s.student}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">{s.number}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.submitted}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${s.status === 'Graded' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : s.status === 'Submitted' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>{s.status}</span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900 dark:text-white">{s.mark ? `${s.mark}%` : '—'}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {s.status === 'Submitted' && <button className="text-xs font-semibold text-primary hover:text-primary-600">Grade</button>}
                    {s.status === 'Graded' && <button className="text-xs font-semibold text-slate-400 hover:text-slate-600">Edit</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grading;
