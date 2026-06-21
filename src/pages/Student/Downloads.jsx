import { HiDownload } from 'react-icons/hi';

const downloads = [
  { label: 'Course Syllabus', file: 'PDF' },
  { label: 'Timetable Overview', file: 'PDF' },
  { label: 'Exam Preparation Pack', file: 'ZIP' }
];

function Downloads() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Downloads</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Course materials and resources for your classes.</p>
      </div>
      <div className="space-y-3">
        {downloads.map((item) => (
          <div key={item.label} className="card flex items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HiDownload className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900 dark:text-white">{item.label}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Latest version available</p>
              </div>
            </div>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item.file}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Downloads;
