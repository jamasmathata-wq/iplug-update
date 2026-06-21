import DashboardCard from '../../components/DashboardCard';
import { HiOutlineOfficeBuilding, HiUsers, HiAcademicCap, HiChartBar } from 'react-icons/hi';

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Total Colleges" value="15" description="Multi-college network" icon={<HiOutlineOfficeBuilding className="h-5 w-5" />} />
        <DashboardCard title="Total Students" value="12,000" description="Portal users" icon={<HiUsers className="h-5 w-5" />} />
        <DashboardCard title="Total Lecturers" value="450" description="Faculty accounts" icon={<HiAcademicCap className="h-5 w-5" />} />
        <DashboardCard title="Active Users" value="3,200" description="Online now" icon={<HiChartBar className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">College Growth</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Platform usage and adoption overview.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Multi-College Support', 'Verification Engine', 'Real-time Alerts', 'Student Engagement'].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm font-medium text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Summary</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Admin tools scale from one college to nationwide networks.</p>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl bg-primary/5 p-4 text-sm text-primary dark:bg-primary/10">Set up verified colleges and keep student records secure.</div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">Manage lecturers, courses, and reports in a unified console.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
