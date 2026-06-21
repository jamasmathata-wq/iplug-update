import { NavLink } from 'react-router-dom';
import { HiX, HiCube, HiClipboardList, HiBell, HiCalendar, HiBookOpen, HiBriefcase, HiDownload, HiUser, HiChartBar, HiOutlineOfficeBuilding, HiUsers, HiAcademicCap, HiDocumentText, HiTemplate, HiCog, HiTrendingUp, HiClipboardCheck, HiCollection, HiPresentationChartBar } from 'react-icons/hi';

const menus = {
  student: [
    { label: 'Dashboard', to: '/student', icon: HiCube },
    { label: 'Announcements', to: '/student/announcements', icon: HiBell },
    { label: 'Assignments', to: '/student/assignments', icon: HiClipboardList },
    { label: 'Tests & Exams', to: '/student/tests', icon: HiAcademicCap },
    { label: 'Timetable', to: '/student/timetable', icon: HiCalendar },
    { label: 'Subject Resources', to: '/student/resources', icon: HiBookOpen },
    { label: 'Academic Progress', to: '/student/progress', icon: HiTrendingUp },
    { label: 'Downloads', to: '/student/downloads', icon: HiDownload },
    { label: 'Internships & Careers', to: '/student/internships', icon: HiBriefcase },
    { label: 'Profile', to: '/student/profile', icon: HiUser }
  ],
  lecturer: [
    { label: 'Dashboard', to: '/lecturer', icon: HiCube },
    { label: 'Manage Students', to: '/lecturer/manage-students', icon: HiUsers },
    { label: 'Assignments', to: '/lecturer/assignments', icon: HiClipboardList },
    { label: 'Grading', to: '/lecturer/grading', icon: HiClipboardCheck },
    { label: 'Resources', to: '/lecturer/resources', icon: HiBookOpen },
    { label: 'Timetable', to: '/lecturer/timetable', icon: HiCalendar },
    { label: 'Announcements', to: '/lecturer/announcements', icon: HiBell },
    { label: 'Attendance', to: '/lecturer/attendance', icon: HiDocumentText },
    { label: 'Reports', to: '/lecturer/reports', icon: HiPresentationChartBar },
    { label: 'Profile', to: '/lecturer/profile', icon: HiUser }
  ],
  admin: [
    { label: 'Dashboard', to: '/admin', icon: HiCube },
    { label: 'User Management', to: '/admin/users', icon: HiUsers },
    { label: 'College Management', to: '/admin/colleges', icon: HiOutlineOfficeBuilding },
    { label: 'Timetable Management', to: '/admin/timetables', icon: HiCalendar },
    { label: 'Content Management', to: '/admin/content', icon: HiCollection },
    { label: 'Analytics', to: '/admin/analytics', icon: HiChartBar },
    { label: 'Reports', to: '/admin/reports', icon: HiPresentationChartBar },
    { label: 'Announcements', to: '/admin/announcements', icon: HiBell },
    { label: 'Settings', to: '/admin/settings', icon: HiCog },
    { label: 'Profile', to: '/admin/profile', icon: HiUser }
  ],
  guest: [
    { label: 'Explore', to: '/guest', icon: HiCube },
    { label: 'Announcements', to: '/guest/announcements', icon: HiBell },
    { label: 'Courses', to: '/guest/courses', icon: HiTemplate },
    { label: 'Calendar', to: '/guest/calendar', icon: HiCalendar },
    { label: 'Campuses', to: '/guest/campuses', icon: HiOutlineOfficeBuilding },
    { label: 'Downloads', to: '/guest/downloads', icon: HiDownload },
    { label: 'FAQs', to: '/guest/faqs', icon: HiBookOpen }
  ]
};

function Sidebar({ role, isOpen, onClose }) {
  const items = menus[role] || [];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={onClose} aria-hidden="true" />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200/60 bg-white p-5 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 md:static md:z-auto md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold shadow-sm">iP</div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">iPLUG YAMA CAMPUS</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white capitalize">{role} Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 md:hidden" aria-label="Close sidebar">
            <HiX className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === `/${role}`}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`
                }
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
