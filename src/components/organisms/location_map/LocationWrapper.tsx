import { useLoadScript } from '@react-google-maps/api'
import { Spinner } from '../../atoms'
import { LocationMap } from './LocationMap'

interface ILocation {
  venue: string
}

export const LocationWrapper = ({ venue }: ILocation) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string
  })

  if (!isLoaded) return <Spinner />
  return <LocationMap venue={venue} />
}
