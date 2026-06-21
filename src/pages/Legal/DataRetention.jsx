function DataRetention() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <span className="section-label">Legal</span>
        <h1 className="mt-3 section-title">Data Retention & Deletion Policy</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: June 2026</p>
      </div>

      <div className="card p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">1. Retention Periods</h2>
          <p>We retain your personal information only for as long as necessary:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Active accounts:</strong> Data is retained while your account is active and you remain enrolled or employed at a participating campus.</li>
            <li><strong>Inactive accounts:</strong> Accounts inactive for more than 24 months may be flagged for review and potential deletion.</li>
            <li><strong>After graduation/departure:</strong> Data may be retained for up to 12 months after leaving the college, unless you request earlier deletion.</li>
            <li><strong>Legal obligations:</strong> Certain records may be retained longer if required by law or regulation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">2. What Gets Deleted</h2>
          <p>Upon account deletion, the following is removed:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Your profile information and login credentials.</li>
            <li>Personal messages and notifications.</li>
            <li>Session data and preferences.</li>
          </ul>
          <p className="mt-2">Academic records uploaded by lecturers (timetables, assignments) may be retained as institutional records independent of your personal account.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">3. Requesting Deletion</h2>
          <p>You may request deletion of your account and personal data by contacting us through the support page. We will process your request within 30 days, subject to any legal obligations that require continued retention.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">4. POPIA Compliance</h2>
          <p>This policy is designed in accordance with the retention limitation condition under Section 14 of POPIA, which requires that personal information must not be kept longer than necessary for the purpose for which it was collected.</p>
        </section>
      </div>
    </div>
  );
}

export default DataRetention;
