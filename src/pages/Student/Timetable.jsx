const schedule = [
  { time: '08:00', session: 'Math Essentials', location: 'Room B2' },
  { time: '10:30', session: 'Network Architecture', location: 'Room C1' },
  { time: '13:00', session: 'Digital Marketing', location: 'Room D5' },
  { time: '15:00', session: 'Team Collaboration', location: 'Online' }
];

function Timetable() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Timetable</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Your weekly schedule with locations and session times.</p>
      </div>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div key={item.time} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.time}</span>
              <h2 className="font-semibold text-slate-900 dark:text-white">{item.session}</h2>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timetable;
