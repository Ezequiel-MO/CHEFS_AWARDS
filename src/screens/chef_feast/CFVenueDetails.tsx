import { useParams } from 'react-router-dom'

export const CFVenueDetails = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Details page</h1>
      <h2>id: {id}</h2>
    </div>
  )
}
