import { Link } from 'react-router-dom';

function Forbidden() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <p className="text-6xl font-bold text-secondary">403</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Access Denied</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">You don't have permission to view this page.</p>
      <Link to="/" className="button-primary mt-6">Go Home</Link>
    </div>
  );
}

export default Forbidden;
