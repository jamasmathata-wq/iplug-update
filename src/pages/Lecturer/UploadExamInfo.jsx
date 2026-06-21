function UploadExamInfo() {
  return (
    <div className="card mx-auto max-w-2xl p-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Upload Exam Information</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Configure exam details, instructions, and study resources.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Exam Title</label>
          <input type="text" placeholder="Exam title" className="input-field" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Exam Date</label>
            <input type="date" className="input-field" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Duration</label>
            <input type="text" placeholder="e.g. 2 hours" className="input-field" />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Instructions</label>
          <textarea rows="4" placeholder="Exam instructions" className="input-field resize-none"></textarea>
        </div>
        <button type="submit" className="button-primary w-full">Save Exam Information</button>
      </form>
    </div>
  );
}

export default UploadExamInfo;
