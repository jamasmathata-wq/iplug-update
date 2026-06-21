const events = [
  { date: 'Jul 1', title: 'Semester 2 Begins', type: 'Academic' },
  { date: 'Jul 5', title: 'Career Fair — Springs Campus', type: 'Event' },
  { date: 'Jul 14', title: 'Last Day to Register', type: 'Deadline' },
  { date: 'Aug 9', title: 'Women\'s Day — No Classes', type: 'Holiday' },
  { date: 'Sep 15', title: 'Mid-Semester Assessments Begin', type: 'Academic' },
  { date: 'Sep 24', title: 'Heritage Day — No Classes', type: 'Holiday' },
  { date: 'Nov 1', title: 'Final Examinations Begin', type: 'Academic' },
  { date: 'Dec 6', title: 'Semester 2 Ends', type: 'Academic' }
];

function GuestCalendar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Academic Calendar</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Key dates for the 2026 academic year.</p>
      </div>

      <div className="space-y-3">
        {events.map((e) => (
          <div key={e.title} className="card flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-center">
              <span className="text-xs font-bold text-primary">{e.date}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900 dark:text-white">{e.title}</p>
            </div>
            <span className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${e.type === 'Holiday' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : e.type === 'Deadline' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : e.type === 'Event' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-primary/10 text-primary'}`}>{e.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestCalendar;
