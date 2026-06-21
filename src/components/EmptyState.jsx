function EmptyState({ title, message }) {
  return (
    <div className="card flex flex-col items-center justify-center gap-4 p-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">📭</div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">{message}</p>
    </div>
  );
}

export default EmptyState;
