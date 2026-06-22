import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import DashboardLayout from '../layouts/DashboardLayout';
// Public
import Home from '../pages/Public/Home';
import About from '../pages/Public/About';
import Contact from '../pages/Public/Contact';
import Login from '../pages/Public/Login';
import Register from '../pages/Public/Register';
// Legal
import Terms from '../pages/Legal/Terms';
import Privacy from '../pages/Legal/Privacy';
import Cookies from '../pages/Legal/Cookies';
import AcceptableUse from '../pages/Legal/AcceptableUse';
import Disclaimer from '../pages/Legal/Disclaimer';
import Copyright from '../pages/Legal/Copyright';
import Accessibility from '../pages/Legal/Accessibility';
import DataRetention from '../pages/Legal/DataRetention';
import CommunityGuidelines from '../pages/Legal/CommunityGuidelines';
import Support from '../pages/Legal/Support';
// Student
import StudentDashboard from '../pages/Student/StudentDashboard';
import StudentAnnouncements from '../pages/Student/Announcements';
import StudentAssignments from '../pages/Student/Assignments';
import Tests from '../pages/Student/Tests';
import StudentTimetable from '../pages/Student/Timetable';
import SubjectResources from '../pages/Student/SubjectResources';
import AcademicProgress from '../pages/Student/AcademicProgress';
import StudentDownloads from '../pages/Student/Downloads';
import Internships from '../pages/Student/Internships';
import StudentProfile from '../pages/Student/StudentProfile';
// Lecturer
import LecturerDashboard from '../pages/Lecturer/LecturerDashboard';
import ManageStudents from '../pages/Lecturer/ManageStudents';
import LecturerAssignments from '../pages/Lecturer/Assignments';
import Grading from '../pages/Lecturer/Grading';
import LecturerResources from '../pages/Lecturer/Resources';
import LecturerTimetable from '../pages/Lecturer/Timetable';
import LecturerAnnouncements from '../pages/Lecturer/Announcements';
import Attendance from '../pages/Lecturer/Attendance';
import LecturerReports from '../pages/Lecturer/Reports';
import LecturerProfile from '../pages/Lecturer/LecturerProfile';
// Admin
import AdminDashboard from '../pages/Admin/AdminDashboard';
import UserManagement from '../pages/Admin/UserManagement';
import CollegeManagement from '../pages/Admin/CollegeManagement';
import TimetableManagement from '../pages/Admin/TimetableManagement';
import ContentManagement from '../pages/Admin/ContentManagement';
import Analytics from '../pages/Admin/Analytics';
import AdminReports from '../pages/Admin/Reports';
import Settings from '../pages/Admin/Settings';
// Guest
import GuestExplore from '../pages/Guest/Explore';
import GuestAnnouncements from '../pages/Guest/Announcements';
import GuestCourses from '../pages/Guest/Courses';
import GuestCalendar from '../pages/Guest/Calendar';
import GuestCampuses from '../pages/Guest/Campuses';
import GuestDownloads from '../pages/Guest/Downloads';
import GuestFAQs from '../pages/Guest/FAQs';

import NotFound from '../pages/Public/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';

function AppRoutes({ darkMode, setDarkMode }) {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/acceptable-use" element={<AcceptableUse />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/data-retention" element={<DataRetention />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/support" element={<Support />} />
        {/* Legacy redirects */}
        <Route path="/student-login" element={<Navigate to="/login" replace />} />
        <Route path="/student-register" element={<Navigate to="/register" replace />} />
        <Route path="/lecturer-login" element={<Navigate to="/login" replace />} />
        <Route path="/lecturer-register" element={<Navigate to="/register" replace />} />
      </Route>

      {/* Student */}
      <Route path="/student" element={<ProtectedRoute allowedRoles={['student']}><DashboardLayout role="student" setDarkMode={setDarkMode} darkMode={darkMode} /></ProtectedRoute>}>
        <Route index element={<StudentDashboard />} />
        <Route path="announcements" element={<StudentAnnouncements />} />
        <Route path="assignments" element={<StudentAssignments />} />
        <Route path="tests" element={<Tests />} />
        <Route path="timetable" element={<StudentTimetable />} />
        <Route path="resources" element={<SubjectResources />} />
        <Route path="progress" element={<AcademicProgress />} />
        <Route path="downloads" element={<StudentDownloads />} />
        <Route path="internships" element={<Internships />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      {/* Lecturer */}
      <Route path="/lecturer" element={<ProtectedRoute allowedRoles={['lecturer']}><DashboardLayout role="lecturer" setDarkMode={setDarkMode} darkMode={darkMode} /></ProtectedRoute>}>
        <Route index element={<LecturerDashboard />} />
        <Route path="manage-students" element={<ManageStudents />} />
        <Route path="assignments" element={<LecturerAssignments />} />
        <Route path="grading" element={<Grading />} />
        <Route path="resources" element={<LecturerResources />} />
        <Route path="timetable" element={<LecturerTimetable />} />
        <Route path="announcements" element={<LecturerAnnouncements />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="reports" element={<LecturerReports />} />
        <Route path="profile" element={<LecturerProfile />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin" setDarkMode={setDarkMode} darkMode={darkMode} /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="colleges" element={<CollegeManagement />} />
        <Route path="timetables" element={<TimetableManagement />} />
        <Route path="content" element={<ContentManagement />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Guest */}
      <Route path="/guest" element={<DashboardLayout role="guest" setDarkMode={setDarkMode} darkMode={darkMode} />}>
        <Route index element={<GuestExplore />} />
        <Route path="announcements" element={<GuestAnnouncements />} />
        <Route path="courses" element={<GuestCourses />} />
        <Route path="calendar" element={<GuestCalendar />} />
        <Route path="campuses" element={<GuestCampuses />} />
        <Route path="downloads" element={<GuestDownloads />} />
        <Route path="faqs" element={<GuestFAQs />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
