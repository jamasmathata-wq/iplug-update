import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LecturerRegister() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-lg">
      <div className="card p-8">
        <div className="mb-6 text-center">
          <span className="section-label">Lecturer Registration</span>
          <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Register as verified faculty</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Registration is only permitted if your Lecturer ID exists in the verification database.</p>
        </div>

        <form className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Surname</label>
            <input type="text" placeholder="Surname" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Lecturer ID</label>
            <input type="text" placeholder="L123456" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
            <input type="text" placeholder="Department" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Contact Number</label>
            <input type="text" placeholder="Phone number" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
            <input type="password" placeholder="Confirm password" className="input-field" />
          </div>
          <div className="sm:col-span-2 space-y-4">
            <button type="submit" className="button-primary w-full">Register</button>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">Already have an account? <Link to="/lecturer-login" className="font-semibold text-primary">Sign in</Link></p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default LecturerRegister;
