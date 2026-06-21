function AcceptableUse() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <span className="section-label">Legal</span>
        <h1 className="mt-3 section-title">Acceptable Use Policy</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: June 2026</p>
      </div>

      <div className="card p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">1. Purpose</h2>
          <p>This Acceptable Use Policy outlines the behaviours and activities that are prohibited on the iPLUG YAMA CAMPUS platform. All users—students, lecturers, and administrators—are expected to comply with this policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">2. Prohibited Activities</h2>
          <p>You must not:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Engage in harassment, bullying, or discrimination against other users.</li>
            <li>Upload or share academic work that is not your own (plagiarism).</li>
            <li>Upload malicious files, viruses, or harmful content.</li>
            <li>Attempt to gain unauthorised access to other users' accounts or Platform systems.</li>
            <li>Impersonate another student, lecturer, or administrator.</li>
            <li>Use the Platform for commercial purposes unrelated to academic activity.</li>
            <li>Share login credentials with any other person.</li>
            <li>Distribute copyrighted materials without proper authorisation.</li>
            <li>Post offensive, obscene, or inappropriate content.</li>
            <li>Interfere with the normal operation of the Platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">3. Academic Integrity</h2>
          <p>The Platform supports academic honesty. Any use of the Platform to facilitate cheating, plagiarism, or other forms of academic dishonesty may result in account suspension and referral to your college's disciplinary process.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">4. Consequences of Violation</h2>
          <p>Violations of this policy may result in warnings, temporary suspension, permanent account termination, or referral to college authorities or law enforcement where appropriate.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">5. Reporting Violations</h2>
          <p>If you witness or experience behaviour that violates this policy, please report it through the Platform's support channels. Reports will be treated confidentially.</p>
        </section>
      </div>
    </div>
  );
}

export default AcceptableUse;
