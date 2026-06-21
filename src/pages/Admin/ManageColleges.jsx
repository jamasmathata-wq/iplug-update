const colleges = [
  { name: 'Western Business College', code: 'WBC', province: 'Gauteng', students: 2800, lecturers: 85, status: 'Active' },
  { name: 'Coastal Tech Institute', code: 'CTI', province: 'Western Cape', students: 1740, lecturers: 58, status: 'Active' },
  { name: 'Northern Arts University', code: 'NAU', province: 'Limpopo', students: 1140, lecturers: 39, status: 'Pending' }
];

function ManageColleges() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Colleges</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Review, edit, or add colleges to the network.</p>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">College</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Code</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Province</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Students</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Lecturers</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {colleges.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900 dark:text-white">{c.name}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{c.code}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{c.province}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{c.students}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{c.lecturers}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${c.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>{c.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Add College</h2>
        <form className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">College Name</label>
            <input type="text" placeholder="College name" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">College Code</label>
            <input type="text" placeholder="Code" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Province</label>
            <input type="text" placeholder="Province" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Contact Email</label>
            <input type="email" placeholder="email@college.edu" className="input-field" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="button-primary w-full">Add College</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageColleges;
