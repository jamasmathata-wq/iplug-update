function Contact() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-5">
        <span className="section-label">Contact</span>
        <h1 className="section-title">Start a conversation with our team.</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">Our platform supports multi-college student communities. We can guide your transition from frontend design to full integration.</p>
      </div>
      <form className="card space-y-5 p-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
          <input type="text" placeholder="Your name" className="input-field" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
          <input type="email" placeholder="you@example.com" className="input-field" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
          <textarea rows="4" placeholder="How can we help?" className="input-field resize-none"></textarea>
        </div>
        <button type="submit" className="button-primary w-full">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
