import React, { Suspense, lazy } from 'react'
import ClientOnly from '../../ssr/ClientOnly'

// Lazy load the Map component
const Map = lazy(() => import('./Map'))
const GoogleMap = lazy(() => import('./GoogleMap'))

// Loading fallback for maps
const MapLoader = ({ height = '400px' }: { height?: string }) => (
  <div 
    className="flex items-center justify-center bg-gray-100 rounded-lg"
    style={{ height }}
  >
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
      <p className="text-gray-600 text-sm">Cargando mapa...</p>
    </div>
  </div>
)

// Props interfaces
interface MapProps {
  latitude: number
  longitude: number
  zoom?: number
  height?: string
  className?: string
}

// Lazy Leaflet Map Component
export const LazyLeafletMap: React.FC<MapProps> = (props) => {
  return (
    <ClientOnly fallback={<MapLoader height={props.height} />}>
      <Suspense fallback={<MapLoader height={props.height} />}>
        <Map {...props} />
      </Suspense>
    </ClientOnly>
  )
}

// Lazy Google Map Component
export const LazyGoogleMap: React.FC<MapProps> = (props) => {
  return (
    <ClientOnly fallback={<MapLoader height={props.height} />}>
      <Suspense fallback={<MapLoader height={props.height} />}>
        <GoogleMap {...props} />
      </Suspense>
    </ClientOnly>
  )
}

// Default export for backward compatibility
export default LazyLeafletMap