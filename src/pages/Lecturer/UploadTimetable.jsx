function UploadTimetable() {
  return (
    <div className="card mx-auto max-w-2xl p-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Upload Timetable</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Publish or update the timetable for your students.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Course</label>
          <input type="text" placeholder="Course name" className="input-field" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Timetable File</label>
          <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">Drop timetable file here</div>
        </div>
        <button type="submit" className="button-primary w-full">Publish Timetable</button>
      </form>
    </div>
  );
}

export default UploadTimetable;
