import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar } from '../molecules'
import CopyRight from '../../assets/background_images/copyright.png'
import './layout.css'

export const PageLayout = () => {
  const [copyright, setCopyright] = useState<boolean>(true)
  return (
    <Box className='flex flex-col min-h-screen bg-main bg-stretch'>
      <Navbar />
      <main className='my-[50px] mx-auto max-w-[1440px] px-[30px]'>
        <Outlet />
      </main>
      <div onClick={() => setCopyright((prev) => !prev)}>
        <div className='w-24 absolute bottom-5 right-5 cursor-pointer'>
          <img src={CopyRight} alt='copy-right-message' />
        </div>
        <div className='absolute bottom-[70px] left-[450px] right-[100px] cursor-pointer text-center'>
          <p
            id='hideMeAfter4Seconds'
            className={`italic text-sm border border-med_purple p-2 bg-med_white rounded-lg text-med_red font-bold ${
              copyright ? 'block' : 'hidden'
            }`}
          >
            All concepts and ideas in this proposal are the intellectual
            property of <strong>CUTT/events</strong> and are subject to the
            current copyright laws. All unauthorized use, reproduction in any
            form, or transmission to a third party is strictly prohibited.
          </p>
        </div>
      </div>
    </Box>
  )
}
