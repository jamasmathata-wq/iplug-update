function LecturerReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Reports</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Generate reports for attendance, submissions, and performance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: 'Attendance Report', desc: 'Attendance records per class session, weekly and monthly summaries.', action: 'Generate' },
          { title: 'Submission Report', desc: 'Assignment submission rates, late submissions, and missing work.', action: 'Generate' },
          { title: 'Pass Rate Report', desc: 'Pass/fail rates per subject and assessment.', action: 'Generate' },
          { title: 'Student Performance', desc: 'Individual student progress across all assessments.', action: 'Generate' }
        ].map((r) => (
          <div key={r.title} className="card p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">{r.title}</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{r.desc}</p>
            </div>
            <button className="button-secondary mt-4 w-full">{r.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LecturerReports;
