function ContentManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Content Management</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Manage announcements, resources, downloads, and news across all campuses.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Announcements', count: 24, desc: 'Active announcements' },
          { title: 'Resources', count: 156, desc: 'Uploaded files' },
          { title: 'Downloads', count: 18, desc: 'Public documents' },
          { title: 'News', count: 8, desc: 'Published articles' }
        ].map((c) => (
          <div key={c.title} className="card p-5 text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{c.count}</p>
            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{c.title}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Recent Content */}
      <div className="card p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white">Recent Content</h2>
        <div className="mt-4 space-y-3">
          {[
            { title: 'Semester 2 Welcome', type: 'Announcement', campus: 'All Campuses', date: 'Today' },
            { title: 'Academic Calendar 2026', type: 'Download', campus: 'All Campuses', date: 'Yesterday' },
            { title: 'New Lab Equipment', type: 'News', campus: 'Springs', date: '2 days ago' },
            { title: 'Exam Guidelines PDF', type: 'Resource', campus: 'All Campuses', date: '3 days ago' }
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-slate-200/60 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700 dark:bg-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.campus} • {item.date}</p>
              </div>
              <span className="inline-flex w-fit rounded-lg bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentManagement;
