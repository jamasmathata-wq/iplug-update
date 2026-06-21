function LoadingSkeleton({ lines = 4 }) {
  return (
    <div className="animate-pulse space-y-3 rounded-2xl border border-slate-200/60 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      {Array.from({ length: lines }, (_, i) => (
        <div key={i} className={`h-4 rounded-lg bg-slate-200 dark:bg-slate-700 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
      ))}
    </div>
  );
}

export default LoadingSkeleton;
