import { FC } from 'react'
import { Box } from '@mui/material'
import { Navbar } from '../molecules'
import { Footer } from '../organisms'

interface Props {
  children: React.ReactNode
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Box className='flex flex-col items-center justify-between min-h-screen'>
      <nav>
        <Navbar />
      </nav>
      <aside>Side Menu</aside>
      <main className='my-[100px] mx-auto max-w-[1440px] px-[30px]'>
        {children}
      </main>
      <footer className='w-screen'>
        <Footer />
      </footer>
    </Box>
  )
}
