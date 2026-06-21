const tests = [
  { subject: 'Data Structures', date: 'June 5', time: '10:00 AM' },
  { subject: 'Web Application Development', date: 'June 8', time: '2:00 PM' },
  { subject: 'Accounting Fundamentals', date: 'June 10', time: '9:00 AM' }
];

function Tests() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tests</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Upcoming assessments and exam preparation details.</p>
      </div>
      <div className="space-y-3">
        {tests.map((item) => (
          <div key={item.subject} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">{item.subject}</h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.date} • {item.time}</p>
            </div>
            <span className="inline-flex w-fit rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-700 dark:text-accent-300">Upcoming</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tests;
