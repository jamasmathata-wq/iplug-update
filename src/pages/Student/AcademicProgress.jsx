const subjects = [
  { name: 'Data Structures', mark: 72, attendance: 88, credits: 15, status: 'In Progress' },
  { name: 'Web Development', mark: 81, attendance: 95, credits: 15, status: 'In Progress' },
  { name: 'Database Systems', mark: 65, attendance: 78, credits: 10, status: 'In Progress' },
  { name: 'Software Engineering', mark: 77, attendance: 92, credits: 15, status: 'In Progress' },
  { name: 'Professional Practice', mark: 85, attendance: 100, credits: 5, status: 'Completed' }
];

const totalCredits = 120;
const earnedCredits = subjects.reduce((sum, s) => sum + (s.status === 'Completed' ? s.credits : 0), 0);
const inProgressCredits = subjects.reduce((sum, s) => sum + (s.status === 'In Progress' ? s.credits : 0), 0);
const overallAvg = Math.round(subjects.reduce((sum, s) => sum + s.mark, 0) / subjects.length);

function AcademicProgress() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Academic Progress</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Track your marks, attendance, and credit progress.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Overall Average</p>
          <p className="mt-1 text-2xl font-bold text-primary">{overallAvg}%</p>
        </div>
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Credits Earned</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">{earnedCredits}/{totalCredits}</p>
        </div>
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">In Progress</p>
          <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">{inProgressCredits} credits</p>
        </div>
        <div className="card p-5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Subjects</p>
          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{subjects.length}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Credit Progress</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{earnedCredits + inProgressCredits}/{totalCredits}</p>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-3 rounded-full bg-primary" style={{ width: `${((earnedCredits + inProgressCredits) / totalCredits) * 100}%` }} />
        </div>
      </div>

      {/* Subjects Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Subject</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mark</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Attendance</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Credits</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {subjects.map((s) => (
                <tr key={s.name} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900 dark:text-white">{s.name}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`font-semibold ${s.mark >= 75 ? 'text-emerald-600 dark:text-emerald-400' : s.mark >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'}`}>{s.mark}%</span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.attendance}%</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.credits}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${s.status === 'Completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>{s.status}</span>
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

export default AcademicProgress;
