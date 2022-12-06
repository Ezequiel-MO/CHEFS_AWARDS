import { Button } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error: any = useRouteError()

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <main
        id='error-page'
        className=' container mx-auto mt-4 md:mt-15 p-5 md:flex md:justify-center text-white-0 flex items-center justify-center '
      >
        <p className='text-8xl font-bold text-med_green'>404 |</p>
        <p className='text-4xl ml-10 text-med_green_light'>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <Button variant='contained'>
        <Link to='/'>Back to Home Page</Link>
      </Button>
    </div>
  )
}
