import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { HiBell, HiOutlineSearch, HiOutlineMenu, HiMoon, HiSun, HiLogout } from 'react-icons/hi';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../contexts/AuthContext';

const pageTitles = { student: 'Student Portal', lecturer: 'Lecturer Portal', admin: 'Admin Console', guest: 'Guest Access' };

function DashboardLayout({ role, darkMode, setDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, profile } = useAuth();
  const pageLabel = location.pathname.split('/').pop().replace(/-/g, ' ') || 'Dashboard';

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar role={role} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300 md:hidden"
                aria-label="Open sidebar"
              >
                <HiOutlineMenu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">{pageTitles[role]}</p>
                <h1 className="text-lg font-semibold capitalize text-slate-900 dark:text-white">{pageLabel}</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex dark:border-slate-700 dark:bg-slate-800">
                <HiOutlineSearch className="h-4 w-4 text-slate-400" />
                <input type="search" placeholder="Search..." className="w-32 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 lg:w-48" />
              </div>
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300" aria-label="Notifications">
                <HiBell className="h-5 w-5" />
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-red-400 hover:text-red-500 dark:border-slate-700 dark:text-slate-300"
                aria-label="Logout"
              >
                <HiLogout className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
