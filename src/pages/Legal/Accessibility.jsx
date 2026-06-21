function Accessibility() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <span className="section-label">Legal</span>
        <h1 className="mt-3 section-title">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: June 2026</p>
      </div>

      <div className="card p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Our Commitment</h2>
          <p>iPLUG YAMA CAMPUS is committed to ensuring that our Platform is accessible to all users, including those with disabilities. We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Accessibility Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keyboard navigation support throughout the Platform.</li>
            <li>Semantic HTML structure for screen reader compatibility.</li>
            <li>Sufficient colour contrast ratios in both light and dark modes.</li>
            <li>Focus indicators on all interactive elements.</li>
            <li>Accessible form labels and error messages.</li>
            <li>Responsive design that adapts to different screen sizes and zoom levels.</li>
            <li>ARIA attributes where appropriate to enhance assistive technology support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Known Limitations</h2>
          <p>We are continuously working to improve accessibility. Some older content or third-party integrations may not yet fully meet WCAG 2.1 AA standards. We are actively addressing these gaps.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Feedback</h2>
          <p>If you encounter any accessibility barriers while using iPLUG YAMA CAMPUS, please contact us through our support page. We welcome feedback and are committed to addressing concerns promptly.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Legal Framework</h2>
          <p>This commitment aligns with the Constitution of the Republic of South Africa (Section 9 — Equality) and the Promotion of Equality and Prevention of Unfair Discrimination Act (PEPUDA).</p>
        </section>
      </div>
    </div>
  );
}

export default Accessibility;
