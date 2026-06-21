import { Link } from 'react-router-dom';

function GuestExplore() {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 p-6 dark:from-primary/10 dark:to-secondary/10">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Welcome to iPLUG YAMA CAMPUS</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Explore our platform as a guest. Create an account to access the full student or lecturer experience.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/login" className="button-primary">Sign In</Link>
          <Link to="/register" className="button-secondary">Register</Link>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Campuses', value: '4' },
          { label: 'Courses', value: '36' },
          { label: 'Students', value: '10,000+' },
          { label: 'Lecturers', value: '450+' }
        ].map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <p className="text-2xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Public Announcements */}
      <div className="card p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white">Public Announcements</h2>
        <div className="mt-4 space-y-3">
          {[
            { title: 'Semester 2 Registration Open', date: 'Jun 15', desc: 'Registration for Semester 2 2026 is now open for all campuses.' },
            { title: 'Career Fair — July 2026', date: 'Jun 10', desc: 'Annual career fair at Springs Campus. All welcome.' },
            { title: 'New Courses Available', date: 'Jun 5', desc: 'Check out our newly accredited programmes starting 2027.' }
          ].map((a) => (
            <div key={a.title} className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{a.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{a.desc}</p>
                </div>
                <span className="shrink-0 text-xs text-slate-400">{a.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuestExplore;
