const resources = [
  { title: 'Lecture Slides', description: 'Slide deck for week 3 sessions.' },
  { title: 'Reading Pack', description: 'Essential reading materials for module assignments.' },
  { title: 'Project Templates', description: 'Templates for coursework submission.' }
];

function UploadResources() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Upload Resources</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Lecture materials and resource packages for your courses.</p>
      </div>
      <div className="space-y-3">
        {resources.map((item) => (
          <div key={item.title} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
            </div>
            <span className="inline-flex w-fit rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">PDF Upload</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadResources;
