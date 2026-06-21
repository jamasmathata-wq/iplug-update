function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Reports</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Activity summaries and performance dashboards.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">User Engagement</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Track active users, logins, and portal access across campuses.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">Verification Reports</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Monitor student and lecturer verification requests and approvals.</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
