import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import properties from '../data/properties.json'
import PropertyMap from '../components/PropertyMap'

function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find(p => p.id === Number(id))

  if (!property) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="text-center pt-40">
        <p className="text-slate-400 text-xl">Property not found.</p>
        <Link to="/" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
          ← Back to listings
        </Link>
      </div>
    </div>
  )

  const { title, price, city, country, type, bedrooms, bathrooms, sqft, image, description } = property

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Back */}
        <Link to="/" className="text-blue-600 text-sm font-semibold hover:underline mb-6 inline-block">
          ← Back to listings
        </Link>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden h-80 mb-8 shadow-md">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{type}</span>
                <span className="text-lg">{country === 'MX' ? '🇲🇽' : '🇺🇸'}</span>
              </div>
              <h1 className="text-3xl font-black text-slate-800 mb-1">{title}</h1>
              <p className="text-slate-400 text-sm">📍 {city}</p>
            </div>

            <p className="text-blue-600 font-black text-4xl">${price.toLocaleString()}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <p className="text-2xl mb-1">🛏</p>
                <p className="text-slate-800 font-bold">{bedrooms}</p>
                <p className="text-slate-400 text-xs">Bedrooms</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <p className="text-2xl mb-1">🚿</p>
                <p className="text-slate-800 font-bold">{bathrooms}</p>
                <p className="text-slate-400 text-xs">Bathrooms</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <p className="text-2xl mb-1">📐</p>
                <p className="text-slate-800 font-bold">{sqft.toLocaleString()}</p>
                <p className="text-slate-400 text-xs">ft²</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-black text-slate-800 mb-2">About this property</h2>
              <p className="text-slate-500 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Right — Contact */}
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-slate-800 font-black mb-4">Contact Agent</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                  JR
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">James Rivera</p>
                  <p className="text-slate-400 text-xs">NestFind Agent</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer mb-2">
                Schedule a Tour
              </button>
              <button className="w-full border border-gray-200 hover:border-blue-300 text-slate-700 font-semibold py-3 rounded-xl transition-colors cursor-pointer">
                Send Message
              </button>
            </div>
            {/* Map */}
<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
  <h3 className="text-slate-800 font-black mb-4">Location</h3>
  <PropertyMap lat={property.lat} lng={property.lng} title={property.title} />
</div>
          </div>
        
          
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail