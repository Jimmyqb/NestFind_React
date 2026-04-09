import { useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function ResizeMap() {
  const map = useMap()
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize()
    }, 300)
  }, [map])
  return null
}

function PropertyMap({ lat, lng, title }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* Default Map */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64">
        <MapContainer
          center={[lat, lng]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom="center"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© OpenStreetMap'
          />
          <Marker position={[lat, lng]}>
            <Popup>{title}</Popup>
          </Marker>
        </MapContainer>

        {/* Expand Button */}
        <button
          onClick={() => setExpanded(true)}
          className="absolute bottom-3 right-3 z-1000 bg-white hover:bg-gray-50 border border-gray-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md cursor-pointer transition-all flex items-center gap-1.5"
        >
          ⛶ Expand
        </button>
      </div>

      {/* Modal Overlay */}
      <div
        onClick={() => setExpanded(false)}
        className={`fixed inset-0 z-2000 flex items-center justify-center transition-all duration-300 ${
          expanded
            ? 'bg-black/60 backdrop-blur-sm pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Expanded Map */}
        <div
          onClick={e => e.stopPropagation()}
          className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
            expanded ? 'w-[80vw] h-[70vh] scale-100 opacity-100' : 'w-64 h-64 scale-75 opacity-0'
          }`}
        >
          <MapContainer
            center={[lat, lng]}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© OpenStreetMap'
            />
            <Marker position={[lat, lng]}>
              <Popup>{title}</Popup>
            </Marker>
            <ResizeMap />
          </MapContainer>

          {/* Close Button */}
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-3 right-3 z-1000 bg-white hover:bg-gray-50 border border-gray-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md cursor-pointer transition-all flex items-center gap-1.5"
          >
            ✕ Minimize
          </button>
        </div>
      </div>
    </>
  )
}

export default PropertyMap