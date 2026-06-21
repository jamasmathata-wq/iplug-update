const courses = [
  { course: 'Software Engineering', code: 'SE101', college: 'Western Business College', status: 'Active' },
  { course: 'Cyber Security', code: 'CY201', college: 'Coastal Tech Institute', status: 'Active' },
  { course: 'Visual Communication', code: 'VC301', college: 'Northern Arts University', status: 'Draft' }
];

function ManageCourses() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Courses</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Configure course details, modules, and active status.</p>
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Course</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Code</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">College</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {courses.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900 dark:text-white">{c.course}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{c.code}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{c.college}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${c.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>{c.status}</span>
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

export default ManageCourses;
