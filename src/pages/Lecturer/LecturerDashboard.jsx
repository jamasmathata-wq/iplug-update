import { HiAcademicCap, HiUsers, HiBell, HiDocumentText } from 'react-icons/hi';
import DashboardCard from '../../components/DashboardCard';
import AnnouncementCard from '../../components/AnnouncementCard';

function LecturerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Total Students" value="520" description="Across your modules" icon={<HiUsers className="h-5 w-5" />} />
        <DashboardCard title="Active Courses" value="12" description="Teaching this term" icon={<HiAcademicCap className="h-5 w-5" />} />
        <DashboardCard title="Announcements" value="18" description="Recent updates" icon={<HiBell className="h-5 w-5" />} />
        <DashboardCard title="Resources" value="34" description="Uploaded materials" icon={<HiDocumentText className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Pending Tasks</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white">Assignment Approval</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Review student submissions for module B.</p>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white">Upload Timetable</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Publish next week's lecture schedule.</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Latest Announcement</h2>
            <div className="mt-4">
              <AnnouncementCard title="Course Evaluation" description="Remind students to submit evaluations this week." date="Today" author="Academic Office" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Quick Actions</h2>
          <div className="mt-4 space-y-2">
            {['Create Announcement', 'Upload Assignment', 'Upload Resources', 'Manage Timetable'].map((action) => (
              <div key={action} className="rounded-xl border border-slate-200/60 bg-slate-50 p-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{action}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerDashboard;
