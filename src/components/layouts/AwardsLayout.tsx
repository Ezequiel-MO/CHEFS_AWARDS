import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar } from '../molecules'
import './layout.css'

export const AwardsLayout = () => {
  return (
    <Box className='flex flex-col min-h-screen bg-dinner_awards bg-stretch'>
      <Navbar />
      <main className='my-[100px] mx-auto max-w-[1440px] px-[30px]'>
        <Outlet />
      </main>
    </Box>
  )
}
