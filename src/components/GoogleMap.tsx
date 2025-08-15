import React from 'react'
import { useTranslation } from 'react-i18next'

interface GoogleMapProps {
  latitude: number
  longitude: number
  zoom?: number
  height?: string
  className?: string
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  latitude, 
  longitude, 
  zoom = 17,
  height = '400px',
  className = ''
}) => {
  const { t } = useTranslation()
  
  // Construct Google Maps embed URL using coordinates
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=${zoom}&output=embed`
  
  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t('contact.map.title', 'Ubicación de Friendsoft')}
      />
    </div>
  )
}

export default GoogleMap