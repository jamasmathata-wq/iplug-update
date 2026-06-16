import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX, HiMoon, HiSun, HiUserCircle } from 'react-icons/hi';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Student Login', to: '/student-login' },
  { label: 'Lecturer Login', to: '/lecturer-login' }
];

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/95 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-primary dark:text-white">
          <img src="https://www.ccbc.co.za/media/com_mtree/images/listings/o/4398.jpg" alt="iPLUG YAMA CAMPUS" className="h-7 w-auto rounded-sm object-contain" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/160x40?text=iPLUG+YAMA+Campus'; }} />
          <span>iPLUG YAMA CAMPUS</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition border-b-2 pb-1 ${isActive ? 'text-primary border-secondary' : 'text-slate-600 hover:text-primary border-transparent dark:text-slate-300'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:hidden"
            aria-label="Open menu"
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/80 bg-white px-6 py-4 dark:border-slate-700/80 dark:bg-slate-950">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition ${isActive ? 'text-primary' : 'text-slate-700 hover:text-primary dark:text-slate-300'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
