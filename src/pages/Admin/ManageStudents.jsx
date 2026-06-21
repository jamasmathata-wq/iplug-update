const students = [
  { name: 'Ayesha Khumalo', id: 'S212334', course: 'Software Engineering', college: 'Western Business College', status: 'Active' },
  { name: 'Sipho Mokoena', id: 'S214557', course: 'Digital Marketing', college: 'Coastal Tech Institute', status: 'Active' }
];

function ManageStudents() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Students</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">View and manage student records across all colleges.</p>
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Student #</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Course</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">College</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {students.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900 dark:text-white">{s.name}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.id}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.course}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.college}</td>
                  <td className="whitespace-nowrap px-4 py-3"><span className="rounded-lg bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageStudents;
