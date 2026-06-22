import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="button-primary mt-6">Go Home</Link>
    </div>
  );
}

export default NotFound;
