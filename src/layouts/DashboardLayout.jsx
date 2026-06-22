import { useState } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { HiBell, HiOutlineSearch, HiOutlineMenu, HiMoon, HiSun, HiUser, HiLogout, HiCog } from 'react-icons/hi';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';
import { useAuth } from '../contexts/AuthContext';

const pageTitles = { student: 'Student Portal', lecturer: 'Lecturer Portal', admin: 'Admin Console', guest: 'Guest Access' };

function DashboardLayout({ role, darkMode, setDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
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

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
                  aria-label="User menu"
                >
                  <HiUser className="h-5 w-5" />
                </button>
                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                    <div className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                      <div className="border-b border-slate-200/60 px-3 py-2 dark:border-slate-700">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile?.first_name} {profile?.last_name}</p>
                        <p className="text-xs text-slate-400">{profile?.user_id} • {profile?.campus}</p>
                      </div>
                      <Link to={`/${role}/profile`} onClick={() => setUserMenuOpen(false)} className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                        <HiUser className="h-4 w-4" /> Profile
                      </Link>
                      <Link to={`/${role === 'admin' ? 'admin/settings' : role + '/profile'}`} onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                        <HiCog className="h-4 w-4" /> Settings
                      </Link>
                      <button onClick={handleLogout} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                        <HiLogout className="h-4 w-4" /> Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
