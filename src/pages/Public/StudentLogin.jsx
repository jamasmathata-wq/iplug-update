import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function StudentLogin() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-md">
      <div className="card p-8">
        <div className="mb-6 text-center">
          <span className="section-label">Student Login</span>
          <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Access your dashboard</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Log in with your student number to view announcements, assignments, and your timetable.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Student Number</label>
            <input type="text" placeholder="e.g. S1234567" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <input type="password" placeholder="Your password" className="input-field" />
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" />
              Remember Me
            </label>
            <Link to="/" className="text-sm font-medium text-primary hover:text-primary-600">Forgot Password?</Link>
          </div>
          <button type="submit" className="button-primary w-full">Sign In</button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
          No account? <Link to="/student-register" className="font-semibold text-primary hover:text-primary-600">Register here</Link>
        </p>
      </div>
    </motion.div>
  );
}

export default StudentLogin;
