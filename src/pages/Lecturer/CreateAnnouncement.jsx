function CreateAnnouncement() {
  return (
    <div className="card mx-auto max-w-2xl p-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Create Announcement</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Share a new announcement with your students.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
          <input type="text" placeholder="Announcement title" className="input-field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
          <input type="text" placeholder="Course name" className="input-field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
          <textarea rows="4" placeholder="Enter announcement details" className="input-field resize-none"></textarea>
        </div>
        <button type="submit" className="button-primary w-full">Publish Announcement</button>
      </form>
    </div>
  );
}

export default CreateAnnouncement;
