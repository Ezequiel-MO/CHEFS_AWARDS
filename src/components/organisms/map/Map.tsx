import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api'
import { Typography } from '@mui/material'
import './map.css'

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

type ILocation = {
  place: string
  coords: LatLngLiteral
}

export const Map = () => {
  const [map, setMap] = useState<google.maps.Map>()
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

  const options = useMemo<MapOptions>(
    () => ({
      mapId: '37537533e1cc90',
      zoom: 14,
      center: ValenciaCityCenterLocation,
      controlSize: 25,
      disableDefaultUI: true,
      clickableIcons: false,
      zoomControl: true,
      mapTypeControl: true,
      streetViewControl: false,
      scaleControl: true,
      rotateControl: false,
      fullscreenControl: true
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

  useEffect(() => {
    if (map) {
      map.panTo(location.coords)
    }
  }, [location])

  const onLoad = useCallback((map: google.maps.Map) => {
    return setMap(map)
  }, [])

  return (
    <div className='flex w-[1000px] h-[400px] xl:h-[600px] -mt-10'>
      <div className='controls bg-med_blue opacity-60'>
        <div
          className='cursor-pointer p-2 text-center'
          onClick={() =>
            setLocation({
              place: 'Valencia City Center',
              coords: ValenciaCityCenterLocation
            })
          }
        >
          Valencia City Center
        </div>
        <div
          className='cursor-pointer p-2 text-center'
          onClick={() =>
            setLocation({
              place: 'City of Arts & Sciences',
              coords: CACLocation
            })
          }
        >
          City of Arts & Sciences
        </div>
        <div
          className='cursor-pointer p-2 text-center'
          onClick={() =>
            setLocation({
              place: 'Campo Anibal',
              coords: CampoAnibalLocation
            })
          }
        >
          Campo Anibal
        </div>
      </div>
      <div className='map'>
        <GoogleMap
          options={options}
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
            <div className='bg-med_white border-2 border-med_green rounded-lg p-10'>
              <Typography className='cursor-pointer' variant='h6'>
                {location.place}
              </Typography>
            </div>
          </InfoWindowF>
          <MarkerF
            position={location.coords as LatLngLiteral}
            onLoad={onLoad as any}
            icon={CACIcon}
          />
        </GoogleMap>
      </div>
    </div>
  )
}
