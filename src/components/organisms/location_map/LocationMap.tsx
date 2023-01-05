import { useState, useMemo, useCallback, useEffect } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api'
import { Typography } from '@mui/material'
import './map.css'

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

type ILocation = {
  place: string
  coords: LatLngLiteral
}

type IProps = {
  venue: string
}

export const LocationMap = ({ venue }: IProps) => {
  const [map, setMap] = useState<google.maps.Map>()
  const [zoom, setZoom] = useState<number>(14)
  const [location, setLocation] = useState<ILocation>({
    place: 'Valencia City Center',
    coords: {
      lat: 39.4697065,
      lng: -0.3763353
    }
  })

  const ValenciaCityCenterLocation = useMemo<LatLngLiteral>(
    () => ({ lat: 39.4697065, lng: -0.3763353 }),
    []
  )

  const CACLocation = useMemo<LatLngLiteral>(
    () => ({ lat: 39.4527148558, lng: -0.35021693246 }),
    []
  )

  const CampoAnibalLocation = useMemo<LatLngLiteral>(
    () => ({ lat: 39.5887, lng: -0.3033 }),
    []
  )

  const bounds = useMemo<google.maps.LatLngBounds>(() => {
    const bounds = new google.maps.LatLngBounds()
    bounds.extend(ValenciaCityCenterLocation)
    bounds.extend(CACLocation)
    bounds.extend(CampoAnibalLocation)
    return bounds
  }, [])

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  useEffect(() => {
    if (venue === 'CAC') {
      setLocation({
        place: 'City Of Arts & Sciences',
        coords: CACLocation
      })
    } else if (venue === 'Campo Anibal') {
      map?.fitBounds(bounds)
      setZoom(9)
      setLocation({
        place: 'Campo Anibal',
        coords: CampoAnibalLocation
      })
    } else {
      setLocation({
        place: 'Valencia City Center',
        coords: ValenciaCityCenterLocation
      })
    }
  }, [venue, CACLocation, CampoAnibalLocation, ValenciaCityCenterLocation])

  const options = useMemo<MapOptions>(
    () => ({
      mapId: '37537533e1cc90',
      center: ValenciaCityCenterLocation,
      controlSize: 25,
      disableDefaultUI: true,
      clickableIcons: false,
      zoomControl: true,
      mapTypeControl: true,
      streetViewControl: true,
      scaleControl: true,
      rotateControl: false,
      fullscreenControl: false
    }),

    []
  )

  const CACIcon = {
    path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: '#de5b00',
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 4,
    scale: 3,
    anchor: new google.maps.Point(15, 30)
  }

  return (
    <div className='flex justify-center h-[400px] relative my-5'>
      <div className='map'>
        <GoogleMap
          options={options}
          zoom={zoom}
          mapContainerClassName='map-container'
          onLoad={onLoad as any}
        >
          <InfoWindowF
            onLoad={onLoad as any}
            position={location.coords}
            options={{
              pixelOffset: new google.maps.Size(0, -70)
            }}
          >
            <div className='bg-med_white border-2 border-med_green rounded-lg p-5'>
              <Typography className='cursor-pointer' variant='h6'>
                {location.place}
              </Typography>
            </div>
          </InfoWindowF>
          <MarkerF
            position={location.coords as LatLngLiteral}
            icon={CACIcon}
            onLoad={onLoad as any}
          />
        </GoogleMap>
      </div>
    </div>
  )
}
