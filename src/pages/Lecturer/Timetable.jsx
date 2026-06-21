const schedule = [
  { day: 'Monday', time: '08:00', subject: 'Data Structures', room: 'Room B2', class: 'SE Year 2' },
  { day: 'Monday', time: '10:30', subject: 'Web Development', room: 'Lab C1', class: 'SE Year 1' },
  { day: 'Tuesday', time: '09:00', subject: 'Database Systems', room: 'Room D5', class: 'IT Year 2' },
  { day: 'Wednesday', time: '08:00', subject: 'Data Structures', room: 'Room B2', class: 'SE Year 2' },
  { day: 'Thursday', time: '13:00', subject: 'Web Development', room: 'Lab C1', class: 'SE Year 1' },
  { day: 'Friday', time: '10:00', subject: 'Database Systems', room: 'Room D5', class: 'IT Year 2' }
];

function LecturerTimetable() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Timetable</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Your teaching schedule, venues, and class groups.</p>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Day</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Time</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Subject</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Room</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Class</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-700">
              {schedule.map((s, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900 dark:text-white">{s.day}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs font-bold text-primary">{s.time}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.subject}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.room}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{s.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LecturerTimetable;
