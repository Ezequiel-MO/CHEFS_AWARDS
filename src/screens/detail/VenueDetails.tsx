import { useParams } from 'react-router-dom'

export const VenueDetails = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Details page</h1>
      <h2>id: {id}</h2>
    </div>
  )
}
