import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar } from '../molecules'
import './layout.css'

export const PageLayout = () => {
  return (
    <Box className='flex flex-col min-h-screen bg-main bg-stretch'>
      <Navbar />
      <main className='my-[50px] mx-auto max-w-[1440px] px-[30px]'>
        <Outlet />
      </main>
    </Box>
  )
}
