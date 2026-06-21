function Privacy() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <span className="section-label">Legal</span>
        <h1 className="mt-3 section-title">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: June 2026</p>
      </div>

      <div className="card p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">1. Introduction</h2>
          <p>iPLUG YAMA CAMPUS ("we", "us") is committed to protecting the personal information of students, lecturers, and administrators who use our Platform. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the Protection of Personal Information Act, 2013 (POPIA).</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name, student/employee number, and contact details provided during registration.</li>
            <li>Campus and account type selection.</li>
            <li>Academic information relevant to your role (course enrolments, timetables, announcements).</li>
            <li>Login activity and usage data for security and platform improvement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">3. Purpose of Processing</h2>
          <p>We process your personal information to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Verify your identity and provide access to the Platform.</li>
            <li>Deliver academic services including announcements, timetables, and resources.</li>
            <li>Enable communication between students, lecturers, and administrators.</li>
            <li>Ensure the security and integrity of the Platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">4. Legal Basis</h2>
          <p>We process your personal information under POPIA on the following grounds: your consent at registration, the legitimate interest of providing academic services, and compliance with legal obligations.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">5. Data Sharing</h2>
          <p>We do not sell your personal information. We may share information with your college's administration as required for verification and academic administration. We will not share your data with third parties without your consent unless required by law.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">6. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, alteration, or destruction. These include encryption, secure authentication, and access controls.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">7. Your Rights Under POPIA</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>The right to access your personal information we hold.</li>
            <li>The right to request correction of inaccurate information.</li>
            <li>The right to request deletion of your information where appropriate.</li>
            <li>The right to object to processing in certain circumstances.</li>
            <li>The right to lodge a complaint with the Information Regulator.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">8. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. See our Data Retention Policy for details.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">9. Contact the Information Officer</h2>
          <p>To exercise your rights or raise a privacy concern, please contact us through the Platform's support page. You may also contact the Information Regulator of South Africa at <span className="text-primary">inforeg.org.za</span>.</p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
