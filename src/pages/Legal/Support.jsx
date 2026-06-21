function Support() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <span className="section-label">Support</span>
        <h1 className="mt-3 section-title">Contact & Support</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Get help, report issues, or submit a request.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">🐛 Report a Bug</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Found something broken? Let us know so we can fix it quickly.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">💡 Feedback</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Have ideas for improving the Platform? We'd love to hear from you.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">🔒 Privacy Request</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Request access to, correction of, or deletion of your personal information under POPIA.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 dark:text-white">⚠️ Report Abuse</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Report harassment, inappropriate content, or policy violations confidentially.</p>
        </div>
      </div>

      <div className="card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Send us a message</h2>
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input id="name" type="text" placeholder="Your name" className="input-field" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="input-field" />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
            <select id="category" className="input-field">
              <option>Bug Report</option>
              <option>Feedback</option>
              <option>Privacy Request</option>
              <option>Report Abuse</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea id="message" rows="4" placeholder="Describe your issue or request..." className="input-field resize-none"></textarea>
          </div>
          <button type="submit" className="button-primary w-full">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default Support;
