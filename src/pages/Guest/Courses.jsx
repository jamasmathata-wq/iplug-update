const courses = [
  { name: 'Software Engineering', code: 'SE', duration: '3 years', campus: 'Springs', nqf: 'NQF 6' },
  { name: 'Information Technology', code: 'IT', duration: '3 years', campus: 'Springs, Kwa-Thema', nqf: 'NQF 6' },
  { name: 'Business Management', code: 'BM', duration: '3 years', campus: 'Benoni, Daveyton', nqf: 'NQF 6' },
  { name: 'Electrical Engineering', code: 'EE', duration: '3 years', campus: 'Kwa-Thema', nqf: 'NQF 6' },
  { name: 'Hospitality Management', code: 'HM', duration: '3 years', campus: 'Daveyton', nqf: 'NQF 5' },
  { name: 'Civil Engineering', code: 'CE', duration: '3 years', campus: 'Benoni', nqf: 'NQF 6' }
];

function GuestCourses() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Available Courses</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Explore programmes offered across our campuses.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((c) => (
          <div key={c.code} className="card p-5">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold text-slate-900 dark:text-white">{c.name}</h2>
              <span className="rounded-lg bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{c.nqf}</span>
            </div>
            <div className="mt-3 space-y-1 text-sm text-slate-500 dark:text-slate-400">
              <p>Duration: {c.duration}</p>
              <p>Campus: {c.campus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestCourses;
