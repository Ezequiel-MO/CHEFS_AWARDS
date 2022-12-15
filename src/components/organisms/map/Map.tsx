import { useMemo } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import './map.css'

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

export const Map = () => {
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 41.390205, lng: 2.154007 }),
    []
  )
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true
    }),
    []
  )
  return (
    <GoogleMap
      zoom={14}
      center={center}
      options={options}
      mapContainerClassName='map-container'
    >
      <Marker
        position={center}
        icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      />
    </GoogleMap>
  )
}
