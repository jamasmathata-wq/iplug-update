function NotificationCard({ title, message, time }) {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{message}</p>
        </div>
        <span className="shrink-0 rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">{time}</span>
      </div>
    </div>
  );
}

export default NotificationCard;
