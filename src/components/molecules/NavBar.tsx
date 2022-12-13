import { NavLink, useLocation } from 'react-router-dom'
import { Box, Link as MuiLink, Button } from '@mui/material'

import Logo from '../../assets/logo.jpg'

export const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <nav className='flex flex-row items-center bg-transparent '>
      <MuiLink display='flex' alignItems='center' href='/'>
        <img src={Logo} alt='logo' className='max-w-[100px] object-contain' />
      </MuiLink>

      {/*   <Box flex={1} /> */}

      <Box className='flex items-center'>
        <NavLink
          to='/chef_feast'
          className={({ isActive }) =>
            !isActive || pathname === '/'
              ? 'font-bold text-center rounded p-1'
              : 'hidden'
          }
        >
          <Button className='text-white rounded cursor-pointer hover:font-bold '>
            CHEF FEAST
          </Button>
        </NavLink>

        <NavLink
          to='/awards_dinner'
          className={({ isActive }) =>
            !isActive || pathname === '/'
              ? ' font-bold text-center rounded p-1'
              : 'hidden'
          }
        >
          <Button className='text-white rounded cursor-pointer hover:font-bold text-center'>
            AWARDS DINNER
          </Button>
        </NavLink>
      </Box>
    </nav>
  )
}
