import { useNavigate, useParams } from 'react-router-dom'

export const TimelineDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Details page</h1>
      <h2>timeline title: {id}</h2>
      <button
        className='mt-2 font-bold text-white bg-med_blue py-2 px-4 rounded-xl shadow-sm uppercase tracking-wider '
        onClick={() => navigate(-1)}
      >
        Back to The Dinner page
      </button>
    </div>
  )
}
