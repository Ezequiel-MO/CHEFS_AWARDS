import { useLoadScript } from '@react-google-maps/api'
import { Spinner } from '../../atoms'
import { Map } from './Map'

export const MapWrapper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string
  })

  if (!isLoaded) return <Spinner />
  return <Map />
}
