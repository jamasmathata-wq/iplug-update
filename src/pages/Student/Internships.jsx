const internships = [
  { company: 'TechWorks', role: 'Software Developer Intern', duration: '3 months' },
  { company: 'Campus Media', role: 'Digital Marketing Intern', duration: '2 months' },
  { company: 'EduLabs', role: 'Research Intern', duration: '4 months' }
];

function Internships() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Internships</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Opportunities curated for multi-college learners.</p>
      </div>
      <div className="space-y-3">
        {internships.map((item) => (
          <div key={item.company} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">{item.company}</h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </div>
            <span className="inline-flex w-fit rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{item.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
