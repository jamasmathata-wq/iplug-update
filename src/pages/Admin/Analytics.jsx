function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Platform usage, engagement, and performance metrics.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Active Users (Today)', value: '3,241', change: '+12%' },
          { label: 'Logins (This Week)', value: '18,450', change: '+8%' },
          { label: 'Assignments Submitted', value: '2,130', change: '+23%' },
          { label: 'Storage Used', value: '4.2 GB', change: '42%' }
        ].map((m) => (
          <div key={m.label} className="card p-5">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{m.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{m.value}</p>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{m.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Breakdown */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">Activity by Role</h2>
          <div className="mt-4 space-y-3">
            {[
              { role: 'Students', pct: 78, color: 'bg-primary' },
              { role: 'Lecturers', pct: 18, color: 'bg-secondary' },
              { role: 'Admins', pct: 4, color: 'bg-accent' }
            ].map((r) => (
              <div key={r.role}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">{r.role}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{r.pct}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className={`h-2 rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">Campus Engagement</h2>
          <div className="mt-4 space-y-3">
            {[
              { campus: 'Springs', users: 3200, pct: 85 },
              { campus: 'Kwa-Thema', users: 2800, pct: 72 },
              { campus: 'Benoni', users: 2100, pct: 68 },
              { campus: 'Daveyton', users: 1900, pct: 61 }
            ].map((c) => (
              <div key={c.campus} className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{c.campus}</p>
                  <p className="text-xs text-slate-400">{c.users} users</p>
                </div>
                <span className="text-sm font-bold text-primary">{c.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
