import { HiDownload } from 'react-icons/hi';

const downloads = [
  { title: 'College Prospectus 2026', desc: 'Full programme guide and campus information.', type: 'PDF' },
  { title: 'Application Form', desc: 'Download and complete your application.', type: 'PDF' },
  { title: 'Academic Calendar 2026', desc: 'Key dates, holidays, and exam periods.', type: 'PDF' },
  { title: 'Fee Structure', desc: 'Tuition fees and payment information.', type: 'PDF' },
  { title: 'Student Handbook', desc: 'Rules, policies, and campus guide.', type: 'PDF' }
];

function GuestDownloads() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Downloads</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Public documents available for download.</p>
      </div>

      <div className="space-y-3">
        {downloads.map((d) => (
          <div key={d.title} className="card flex items-center gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HiDownload className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-slate-900 dark:text-white">{d.title}</h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{d.desc}</p>
            </div>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{d.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestDownloads;
