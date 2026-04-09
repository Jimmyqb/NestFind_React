import { Link } from 'react-router-dom'

function PropertyCard({ property }) {
  const { id, title, price, city, country, type, bedrooms, bathrooms, sqft, image } = property

  return (
    <Link to={`/property/${id}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {type}
          </span>
          <span className="absolute top-3 right-3 bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {country === 'MX' ? '🇲🇽' : '🇺🇸'}
          </span>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-blue-600 font-black text-xl mb-1">
            ${price.toLocaleString()}
          </p>
          <h3 className="text-slate-800 font-semibold text-sm mb-1 truncate">
            {title}
          </h3>
          <p className="text-slate-400 text-xs mb-3">
            📍 {city}
          </p>

          {/* Details */}
          <div className="flex items-center gap-3 text-slate-500 text-xs border-t border-gray-100 pt-3">
            <span>🛏 {bedrooms} beds</span>
            <span>🚿 {bathrooms} baths</span>
            <span>📐 {sqft.toLocaleString()} ft²</span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default PropertyCard