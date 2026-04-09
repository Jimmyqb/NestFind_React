function Filters({ filters, onChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-wrap gap-4 items-end mb-8 shadow-sm">

      {/* Search */}
      <div className="flex flex-col gap-1 flex-1 min-w-40">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">City</label>
        <input
          type="text"
          placeholder="Search city..."
          value={filters.search}
          onChange={e => onChange({ ...filters, search: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Type */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</label>
        <select
          value={filters.type}
          onChange={e => onChange({ ...filters, type: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors cursor-pointer"
        >
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
          <option value="Villa">Villa</option>
        </select>
      </div>

      {/* Country */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Country</label>
        <select
          value={filters.country}
          onChange={e => onChange({ ...filters, country: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors cursor-pointer"
        >
          <option value="">All Countries</option>
          <option value="MX">🇲🇽 Mexico</option>
          <option value="US">🇺🇸 USA</option>
        </select>
      </div>

      {/* Bedrooms */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={e => onChange({ ...filters, bedrooms: e.target.value })}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 transition-colors cursor-pointer"
        >
          <option value="">Any</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Max Price */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Max Price: ${Number(filters.maxPrice).toLocaleString()}
        </label>
        <input
          type="range"
          min="200000"
          max="2000000"
          step="50000"
          value={filters.maxPrice}
          onChange={e => onChange({ ...filters, maxPrice: e.target.value })}
          className="w-36 accent-blue-600 cursor-pointer"
        />
      </div>

      {/* Clear */}
      <button
        onClick={() => onChange({ search: '', type: '', country: '', bedrooms: '', maxPrice: 2000000 })}
        className="text-sm text-blue-600 hover:text-blue-800 font-semibold cursor-pointer transition-colors"
      >
        Clear filters
      </button>

    </div>
  )
}

export default Filters