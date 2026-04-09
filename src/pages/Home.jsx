import { useState, useMemo, useEffect } from 'react'
import Navbar from '../components/Navbar'
import PropertyCard from '../components/PropertyCard'
import PropertyCardSkeleton from '../components/PropertyCardSkeleton'
import Filters from '../components/Filters'
import properties from '../data/properties.json'

function Home() {
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    country: '',
    bedrooms: '',
    maxPrice: 2000000
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    return properties.filter(p => {
      if (filters.search && !p.city.toLowerCase().includes(filters.search.toLowerCase())) return false
      if (filters.type && p.type !== filters.type) return false
      if (filters.country && p.country !== filters.country) return false
      if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false
      if (p.price > Number(filters.maxPrice)) return false
      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-black text-slate-800 mb-2">Find your next home</h2>
        <p className="text-slate-400 mb-8">
          {loading ? 'Loading properties...' : `Showing ${filtered.length} of ${properties.length} properties`}
        </p>
        <Filters filters={filters} onChange={setFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <PropertyCardSkeleton key={i} />
              ))
            : filtered.length > 0
              ? filtered.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))
              : <p className="text-slate-400 col-span-4 text-center py-20">No properties found. Try adjusting your filters.</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Home