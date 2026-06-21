function AnnouncementCard({ title, description, date, author }) {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 transition-colors dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xs text-slate-400 dark:text-slate-500">{date}</p>
          {author && <p className="mt-0.5 text-xs font-medium text-primary">{author}</p>}
        </div>
      </div>
    </div>
  );
}

export default AnnouncementCard;
