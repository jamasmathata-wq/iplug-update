const subjects = [
  { title: 'Algorithms', description: 'Core data structures, algorithm design, and optimization strategies.' },
  { title: 'Database Systems', description: 'Relational models, SQL operations, and query optimization.' },
  { title: 'Software Engineering', description: 'Agile processes, version control, and system design principles.' },
  { title: 'Web Development', description: 'Frontend frameworks, responsive styling, and UX fundamentals.' }
];

function SubjectScope() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Subject Scope</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Learning scope for each course and department area.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => (
          <div key={s.title} className="card p-5">
            <h2 className="font-semibold text-slate-900 dark:text-white">{s.title}</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectScope;
