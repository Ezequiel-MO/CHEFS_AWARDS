import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar } from '../molecules'
import './layout.css'

export const ChefLayout = () => {
  return (
    <Box className='flex flex-col min-h-screen bg-chef_feast bg-stretch'>
      <Navbar />
      <main className='xs:my-[30px] mx-auto '>
        <Outlet />
      </main>
    </Box>
  )
}
