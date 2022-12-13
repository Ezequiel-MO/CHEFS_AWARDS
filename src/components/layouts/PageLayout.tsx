import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar } from '../molecules'

export const PageLayout = () => {
  return (
    <Box className='flex flex-col min-h-screen bg-main bg-no-repeat fixed bg-center bg-contain'>
      <Navbar />
      <main className='my-[100px] mx-auto max-w-[1440px] px-[30px]'>
        <Outlet />
      </main>
    </Box>
  )
}
