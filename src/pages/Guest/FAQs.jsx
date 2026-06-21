const faqs = [
  { q: 'How do I register for an account?', a: 'Your lecturer must first add your student number to the system. Once added, you can register at the registration page using your student number.' },
  { q: 'Which campuses are supported?', a: 'Springs, Kwa-Thema, Benoni, and Daveyton campuses are all active on the platform.' },
  { q: 'Can I access course materials as a guest?', a: 'No. Course materials, assignments, and marks are only accessible to registered and verified users.' },
  { q: 'How do I reset my password?', a: 'Click "Forgot Password?" on the login page and follow the instructions sent to your registered email.' },
  { q: 'Who do I contact for technical support?', a: 'Visit the Support page or contact your campus administration office.' },
  { q: 'Is my personal information safe?', a: 'Yes. We comply with POPIA (Protection of Personal Information Act) and implement industry-standard security measures.' }
];

function GuestFAQs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Common questions about iPLUG YAMA CAMPUS.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.q} className="card p-5">
            <h2 className="font-semibold text-slate-900 dark:text-white">{faq.q}</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestFAQs;
