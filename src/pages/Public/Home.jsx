import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiAcademicCap, HiClipboardList, HiCalendar, HiDocumentText, HiDownload, HiBriefcase, HiSparkles, HiBookOpen } from 'react-icons/hi';
import StatsCard from '../../components/StatsCard';

const features = [
  { title: 'Academic Announcements', icon: HiAcademicCap },
  { title: 'Assignment Management', icon: HiClipboardList },
  { title: 'Timetable Updates', icon: HiCalendar },
  { title: 'Exam Preparation', icon: HiDocumentText },
  { title: 'Subject Scope Access', icon: HiBookOpen },
  { title: 'Resource Downloads', icon: HiDownload },
  { title: 'Internship Opportunities', icon: HiBriefcase },
  { title: 'Career Opportunities', icon: HiSparkles }
];

const reasons = [
  'Secure Verification',
  'Multi-College Support',
  'Real-Time Updates',
  'Mobile Friendly',
  'Future Ready'
];

const stats = [
  { value: '15', label: 'Colleges' },
  { value: '12,000', label: 'Students' },
  { value: '450', label: 'Lecturers' },
  { value: '180', label: 'Courses' }
];

function Home() {
  return (
    <div className="space-y-24">
      <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">Unified student portal for multi-college learning</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Connecting Students, Lecturers and Colleges
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A secure academic platform designed to simplify communication, learning and career opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/student-login" className="button-primary">Student Login</Link>
            <Link to="/lecturer-login" className="button-secondary">Lecturer Login</Link>
            <Link to="/student-register" className="button-secondary">Register</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative rounded-[32px] bg-secondary/5 p-10 shadow-soft dark:bg-slate-900">
          <div className="h-[420px] rounded-[32px] border border-accent/20 bg-gradient-to-br from-accent/5 via-white to-secondary/5 p-8 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
            <div className="grid h-full place-items-center text-center text-slate-500 dark:text-slate-500">
              <div className="w-full max-w-full">
                <img src="https://www.ccbc.co.za/media/com_mtree/images/listings/o/4398.jpg" alt="EEC Springs Campus" className="mx-auto mb-5 h-24 w-auto rounded-lg object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/160x40?text=EEC+Springs'; }} />
                <p className="max-w-sm text-lg leading-8">Welcome to iPLUG YAMA CAMPUS — explore student services, announcements and resources.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isAccent = index % 3 === 1;
            const isGold = index % 3 === 2;
            const bgColor = isAccent ? 'bg-secondary/10' : isGold ? 'bg-accent/10' : 'bg-primary/10';
            const textColor = isAccent ? 'text-secondary' : isGold ? 'text-accent' : 'text-primary';
            return (
              <motion.div key={feature.title} whileHover={{ y: -4 }} className="card p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-3xl ${bgColor} ${textColor}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Built for modern academics with multi-college scalability.</h2>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">iPLUG YAMA CAMPUS combines secure verification, campus collaboration, and smart workflows into a responsive dashboard experience.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const isAccent = index % 2 === 1;
            const borderColor = isAccent ? 'border-l-4 border-secondary' : 'border-l-4 border-accent';
            return (
              <motion.div key={reason} whileHover={{ y: -3 }} className={`card p-6 ${borderColor}`}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{reason}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Professional system features that support academic operations, student engagement and mobile workflows.</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Trusted Impact</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Accelerating student success across campuses.</h2>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">All numbers are mock values for interface presentation.</div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const accentColors = ['primary', 'secondary', 'accent', 'primary'];
            return (
              <StatsCard key={item.label} value={item.value} label={item.label} accentColor={accentColors[index]} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
