import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX, HiMoon, HiSun } from 'react-icons/hi';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Guest Access', to: '/guest' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' }
];

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-bold text-primary dark:text-primary-200">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-sm">iP</div>
          <span className="hidden sm:inline">iPLUG YAMA CAMPUS</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-72 border-l border-slate-200/60 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:hidden">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Menu</p>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <HiOutlineX className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 border-t border-slate-200/60 pt-4 dark:border-slate-700">
              <button
                onClick={() => { setDarkMode(!darkMode); }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {darkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
