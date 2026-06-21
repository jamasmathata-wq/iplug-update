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

const reasons = ['Secure Verification', 'Multi-College Support', 'Real-Time Updates', 'Mobile Friendly', 'Future Ready'];
const stats = [
  { value: '15', label: 'Colleges' },
  { value: '12,000', label: 'Students' },
  { value: '450', label: 'Lecturers' },
  { value: '180', label: 'Courses' }
];

function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label">Unified student portal</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Connecting Students, Lecturers & Colleges
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            A secure academic platform designed to simplify communication, learning and career opportunities across campuses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login" className="button-primary">Sign In</Link>
            <Link to="/register" className="button-secondary">Register</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="card p-8">
          <div className="flex h-80 flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-6 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
            <img src="https://www.ccbc.co.za/media/com_mtree/images/listings/o/4398.jpg" alt="EEC Springs Campus" className="h-20 w-auto rounded-lg object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ''; e.currentTarget.style.display = 'none'; }} />
            <p className="max-w-xs text-center text-sm text-slate-500 dark:text-slate-400">Welcome to iPLUG YAMA CAMPUS — explore student services, announcements and resources.</p>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section>
        <div className="mb-8 text-center">
          <span className="section-label">Platform Features</span>
          <h2 className="mt-3 section-title">Everything you need in one place</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = ['bg-primary/10 text-primary', 'bg-secondary/10 text-secondary', 'bg-accent/10 text-accent'];
            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-5 hover:shadow-card-hover">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[i % 3]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="section-label">Why Choose Us</span>
          <h2 className="mt-3 section-title">Built for modern academics</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">iPLUG YAMA CAMPUS combines secure verification, campus collaboration, and smart workflows into a responsive experience.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <div key={reason} className={`card border-l-4 p-5 ${i % 2 === 0 ? 'border-l-primary' : 'border-l-secondary'}`}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{reason}</h3>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Professional features for academic operations and student engagement.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Trusted Impact</span>
            <h2 className="mt-3 section-title">Accelerating student success</h2>
          </div>
          <p className="text-xs text-slate-400">Mock values for interface presentation.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, i) => (
            <StatsCard key={item.label} value={item.value} label={item.label} accentColor={['primary', 'secondary', 'accent', 'primary'][i]} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
