import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import { useTranslation } from 'react-i18next'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Create custom purple marker icon
const createCustomIcon = () => {
  const svgIcon = `
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z" fill="#7B43D6"/>
      <circle cx="12.5" cy="12.5" r="6" fill="white"/>
      <circle cx="12.5" cy="12.5" r="3" fill="#7B43D6"/>
    </svg>
  `
  
  return new L.DivIcon({
    html: svgIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    className: 'custom-purple-marker'
  })
}

interface MapProps {
  latitude: number
  longitude: number
  zoom?: number
  height?: string
  className?: string
}

const Map: React.FC<MapProps> = ({ 
  latitude, 
  longitude, 
  zoom = 19, // Increased zoom for much closer view
  height = '400px',
  className = ''
}) => {
  const { t } = useTranslation()
  const customIcon = createCustomIcon()

  return (
    <div className={`map-container relative ${className}`} style={{ height }}>
      {/* Address overlay container */}
      <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-3 h-3 bg-[#7B43D6] rounded-full mt-1"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Friendsoft
            </h3>
            <p className="text-xs text-gray-600 mb-2">
              {t('contact.info.address.location')}
            </p>
            <p className="text-xs text-[#7B43D6] font-medium">
              {t('contact.map.popup.description')}
            </p>
          </div>
        </div>
      </div>

      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <strong className="text-[#7B43D6]">Friendsoft</strong>
              <br />
              {t('contact.map.popup.description')}
              <br />
              <small className="text-gray-600">{t('contact.info.address.location')}</small>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map