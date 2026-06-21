import { HiBell, HiClipboardList, HiAcademicCap, HiBriefcase, HiCalendar, HiTrendingUp } from 'react-icons/hi';
import DashboardCard from '../../components/DashboardCard';

function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">👋 Welcome back, Ayesha</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Software Engineering • Springs Campus • Semester 2</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Active</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">ST212334</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Assignments Due" value="4" description="This week" icon={<HiClipboardList className="h-5 w-5" />} />
        <DashboardCard title="Upcoming Tests" value="2" description="Next 7 days" icon={<HiAcademicCap className="h-5 w-5" />} />
        <DashboardCard title="Attendance" value="91%" description="This semester" icon={<HiCalendar className="h-5 w-5" />} />
        <DashboardCard title="Average Mark" value="76%" description="Current progress" icon={<HiTrendingUp className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Upcoming Classes */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Today's Classes</h2>
            <div className="mt-4 space-y-3">
              {[
                { time: '08:00', name: 'Data Structures', room: 'Room B2', lecturer: 'Dr. Ndlovu' },
                { time: '10:30', name: 'Web Development', room: 'Lab C1', lecturer: 'Ms. Patel' },
                { time: '13:00', name: 'Database Systems', room: 'Room D5', lecturer: 'Mr. Mokoena' }
              ].map((c) => (
                <div key={c.time} className="flex items-center gap-4 rounded-xl border border-slate-200/60 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                  <span className="text-xs font-bold text-primary">{c.time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{c.name}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{c.room} • {c.lecturer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Announcements</h2>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Campus Orientation', desc: 'New semester orientation Monday 9 AM.', time: '2h ago', author: 'Registrar' },
                { title: 'Assignment Extended', desc: 'Project 2 deadline extended by 2 days.', time: 'Yesterday', author: 'Dr. Ndlovu' }
              ].map((a) => (
                <div key={a.title} className="rounded-xl border border-slate-200/60 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{a.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{a.desc}</p>
                    </div>
                    <span className="shrink-0 text-xs text-slate-400">{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Assignment Deadlines */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Due Soon</h2>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Database Project', due: 'Tomorrow', urgent: true },
                { name: 'SE Report', due: 'In 3 days', urgent: false },
                { name: 'UI Portfolio', due: 'In 5 days', urgent: false }
              ].map((a) => (
                <div key={a.name} className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{a.name}</p>
                  <span className={`text-xs font-semibold ${a.urgent ? 'text-red-600 dark:text-red-400' : 'text-slate-500 dark:text-slate-400'}`}>{a.due}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {['Timetable', 'Assignments', 'Resources', 'Progress'].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200/60 bg-slate-50 p-3 text-center text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Notifications</h2>
            <div className="mt-4 space-y-2">
              {[
                { text: 'Marks released for Web Dev Assignment 3', time: '1h' },
                { text: 'New resource uploaded: SQL Reference Guide', time: '3h' },
                { text: 'Career fair registration closes Friday', time: '1d' }
              ].map((n) => (
                <div key={n.text} className="flex items-start justify-between gap-2 rounded-lg p-2">
                  <p className="text-xs text-slate-600 dark:text-slate-300">{n.text}</p>
                  <span className="shrink-0 text-xs text-slate-400">{n.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
