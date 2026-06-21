import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Support', to: '/support' }
  ],
  Legal: [
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Acceptable Use', to: '/acceptable-use' },
    { label: 'Disclaimer', to: '/disclaimer' },
    { label: 'Copyright', to: '/copyright' }
  ],
  Resources: [
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Data Retention', to: '/data-retention' },
    { label: 'Community Guidelines', to: '/community-guidelines' }
  ]
};

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">iP</div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">iPLUG YAMA CAMPUS</span>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Ekurhuleni East TVET College — Modern academic portal for multi-campus networks.</p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-500 transition hover:text-primary dark:text-slate-400 dark:hover:text-primary">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200/60 pt-6 dark:border-slate-800">
          <p className="text-xs text-slate-400 dark:text-slate-500">© {new Date().getFullYear()} iPLUG YAMA CAMPUS. All rights reserved. Built for South African TVET colleges.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
