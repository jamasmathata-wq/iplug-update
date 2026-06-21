function StatsCard({ value, label, accentColor = 'primary' }) {
  const colors = {
    primary: 'border-l-4 border-primary text-primary',
    secondary: 'border-l-4 border-secondary text-secondary',
    accent: 'border-l-4 border-accent text-accent'
  };
  const cls = colors[accentColor] || colors.primary;

  return (
    <div className={`card p-6 ${cls.split(' ').slice(0, 2).join(' ')}`}>
      <p className={`text-3xl font-bold ${cls.split(' ').slice(2).join(' ')}`}>{value}</p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default StatsCard;
