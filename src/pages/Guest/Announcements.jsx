const announcements = [
  { title: 'Semester 2 Registration Open', date: 'Jun 15', desc: 'Registration for Semester 2 2026 is now open for all campuses. Visit your campus admin office or register online.' },
  { title: 'Career Fair — July 2026', date: 'Jun 10', desc: 'Annual career fair at Springs Campus on 5 July. Industry partners, internship opportunities, and CV workshops.' },
  { title: 'New Programmes 2027', date: 'Jun 5', desc: 'Newly accredited programmes in Cybersecurity and Data Science starting in 2027. Applications open soon.' },
  { title: 'Campus Maintenance Notice', date: 'Jun 1', desc: 'Kwa-Thema Campus library will be closed 10-12 June for renovation upgrades.' }
];

function GuestAnnouncements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Public Announcements</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">News and updates from Ekurhuleni East TVET College.</p>
      </div>

      <div className="space-y-3">
        {announcements.map((a) => (
          <div key={a.title} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold text-slate-900 dark:text-white">{a.title}</h2>
              <span className="shrink-0 text-xs text-slate-400">{a.date}</span>
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestAnnouncements;
