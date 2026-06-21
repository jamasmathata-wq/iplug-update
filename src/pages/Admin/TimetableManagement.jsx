function TimetableManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Timetable Management</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Create and manage timetables, assign rooms and lecturers.</p>
        </div>
        <button className="button-primary">+ Create Timetable</button>
      </div>

      {/* Active Timetables */}
      <div className="space-y-3">
        {[
          { name: 'SE Year 1 — Semester 2', campus: 'Springs', classes: 18, status: 'Published' },
          { name: 'SE Year 2 — Semester 2', campus: 'Springs', classes: 15, status: 'Published' },
          { name: 'IT Year 1 — Semester 2', campus: 'Kwa-Thema', classes: 20, status: 'Draft' },
          { name: 'Business Studies Year 1', campus: 'Benoni', classes: 16, status: 'Published' }
        ].map((t) => (
          <div key={t.name} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">{t.name}</h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.campus} • {t.classes} sessions/week</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${t.status === 'Published' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>{t.status}</span>
              <button className="text-xs font-semibold text-primary hover:text-primary-600">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimetableManagement;
