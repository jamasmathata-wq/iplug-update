function Settings() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card p-6">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">System preferences and portal defaults.</p>
        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Portal Theme</p>
            <p className="mt-1 text-sm text-slate-900 dark:text-white">Light / Dark mode support for admin users.</p>
          </div>
          <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">College Settings</p>
            <p className="mt-1 text-sm text-slate-900 dark:text-white">Manage defaults for new college provisioning.</p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Notifications</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Alert preferences for system events.</p>
        <div className="mt-6 space-y-3">
          {['Verification Alerts', 'New Registration Alerts', 'System Health Updates'].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-sm font-medium text-slate-900 dark:text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
