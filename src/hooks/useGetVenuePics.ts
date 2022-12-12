import { useState, useEffect } from 'react'
import { baseAPI } from '../axios/config'

export const useGetVenuePics = (venueId: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pics, setPics] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetchPics = async (venueId: string) => {
      setIsLoading(true)
      const url = `/v1/restaurants/${venueId}`
      try {
        const response = await baseAPI.get(url, { signal })
        setPics(response.data.data.data.imageContentUrl)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPics(venueId)
    return () => controller.abort()
  }, [venueId])

  return { isLoading, pics }
}
