import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);

  if (parts.length <= 1) return null;

  const crumbs = parts.map((part, i) => ({
    label: part.replace(/-/g, ' '),
    path: '/' + parts.slice(0, i + 1).join('/')
  }));

  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
      <Link to="/" className="hover:text-primary transition">Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.path} className="flex items-center gap-1">
          <HiChevronRight className="h-3 w-3" />
          {i === crumbs.length - 1 ? (
            <span className="capitalize text-slate-700 dark:text-slate-200 font-medium">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="capitalize hover:text-primary transition">{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
