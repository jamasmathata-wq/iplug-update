function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-5">
        <span className="section-label">About iPLUG YAMA CAMPUS</span>
        <h1 className="section-title">A modern campus portal designed for education systems.</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">iPLUG YAMA CAMPUS is a frontend interface built for academic institutions that need secure verification, real-time updates, and a modern administrative dashboard for students, lecturers, and administrators.</p>
      </div>
      <div className="card p-6 space-y-5">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Interface Highlights</h2>
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />Responsive student and lecturer dashboards with mobile-first navigation.</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />Accessible multi-college management and reporting modules.</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />Clean SaaS dashboard styling with Tailwind CSS.</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />Built as a frontend-only React app ready for Supabase integration.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
