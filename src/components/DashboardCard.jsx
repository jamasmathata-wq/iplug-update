function DashboardCard({ title, value, description, icon }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
          {description && <p className="text-xs text-slate-400 dark:text-slate-500">{description}</p>}
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
