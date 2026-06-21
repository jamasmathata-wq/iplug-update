const campuses = [
  { name: 'Springs Campus', address: 'Springs, Ekurhuleni', phone: '011 730 6600', departments: 5 },
  { name: 'Kwa-Thema Campus', address: 'Kwa-Thema, Springs', phone: '011 730 6700', departments: 4 },
  { name: 'Benoni Campus', address: 'Benoni, Ekurhuleni', phone: '011 421 6800', departments: 3 },
  { name: 'Daveyton Campus', address: 'Daveyton, Ekurhuleni', phone: '011 421 6900', departments: 3 }
];

function GuestCampuses() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Our Campuses</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Ekurhuleni East TVET College campus locations.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {campuses.map((c) => (
          <div key={c.name} className="card p-5">
            <h2 className="font-semibold text-slate-900 dark:text-white">{c.name}</h2>
            <div className="mt-3 space-y-1 text-sm text-slate-500 dark:text-slate-400">
              <p>📍 {c.address}</p>
              <p>📞 {c.phone}</p>
              <p>🏢 {c.departments} Departments</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestCampuses;
