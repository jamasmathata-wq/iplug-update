const colleges = [
  { name: 'Springs Campus', code: 'SPR', departments: 5, courses: 12, students: 3200, status: 'Active' },
  { name: 'Kwa-Thema Campus', code: 'KWT', departments: 4, courses: 9, students: 2800, status: 'Active' },
  { name: 'Benoni Campus', code: 'BEN', departments: 3, courses: 8, students: 2100, status: 'Active' },
  { name: 'Daveyton Campus', code: 'DAV', departments: 3, courses: 7, students: 1900, status: 'Active' }
];

function CollegeManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">College Management</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Manage campuses, departments, courses, and subjects.</p>
        </div>
        <button className="button-primary">+ Add Campus</button>
      </div>

      {/* Campus Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {colleges.map((c) => (
          <div key={c.code} className="card p-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-white">{c.name}</h2>
                <p className="mt-0.5 font-mono text-xs text-slate-400">{c.code}</p>
              </div>
              <span className="rounded-lg bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">{c.status}</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{c.departments}</p>
                <p className="text-xs text-slate-400">Depts</p>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{c.courses}</p>
                <p className="text-xs text-slate-400">Courses</p>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{c.students}</p>
                <p className="text-xs text-slate-400">Students</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollegeManagement;
