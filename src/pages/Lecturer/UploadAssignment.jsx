function UploadAssignment() {
  return (
    <div className="card mx-auto max-w-2xl p-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Upload Assignment</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Prepare assignment details and upload supporting files.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Assignment Title</label>
          <input type="text" placeholder="Assignment title" className="input-field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
          <input type="text" placeholder="Course name" className="input-field" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Due Date</label>
            <input type="date" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Upload PDF</label>
            <div className="flex h-[42px] items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">Drop file here</div>
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
          <textarea rows="3" placeholder="Assignment details" className="input-field resize-none"></textarea>
        </div>
        <button type="submit" className="button-primary w-full">Upload Assignment</button>
      </form>
    </div>
  );
}

export default UploadAssignment;
