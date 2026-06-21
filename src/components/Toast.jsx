function Toast({ message, variant = 'info' }) {
  const variants = {
    info: 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900',
    success: 'bg-emerald-600 text-white',
    warning: 'bg-amber-500 text-slate-900',
    error: 'bg-rose-600 text-white'
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${variants[variant]}`}>
      {message}
    </div>
  );
}

export default Toast;
