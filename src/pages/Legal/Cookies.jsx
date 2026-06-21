function Cookies() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <span className="section-label">Legal</span>
        <h1 className="mt-3 section-title">Cookie Policy</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: June 2026</p>
      </div>

      <div className="card p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">2. How We Use Cookies and Local Storage</h2>
          <p>iPLUG YAMA CAMPUS uses the following technologies:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Local Storage:</strong> To save your theme preference (light/dark mode) and session information.</li>
            <li><strong>Authentication Tokens:</strong> To maintain your signed-in status securely.</li>
            <li><strong>Analytics (future):</strong> We may introduce analytics to understand usage patterns. These will be disclosed before activation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">3. Types of Data Stored</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential:</strong> Theme preference, authentication session. Required for the Platform to function.</li>
            <li><strong>Functional:</strong> Campus and role selection remembered during a session.</li>
            <li><strong>Analytics (future):</strong> Anonymous usage data to improve the Platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">4. Third-Party Cookies</h2>
          <p>We do not currently use third-party cookies. If this changes, we will update this policy and notify users accordingly.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">5. Managing Your Preferences</h2>
          <p>You can clear local storage and cookies through your browser settings. Note that clearing essential storage may require you to sign in again or reset your preferences.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">6. Contact</h2>
          <p>For questions about our use of cookies and storage technologies, please contact us through our support page.</p>
        </section>
      </div>
    </div>
  );
}

export default Cookies;
