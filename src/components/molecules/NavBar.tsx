import { NavLink, useNavigate } from 'react-router-dom'
import { Box, Link as MuiLink, Button } from '@mui/material'
import { Icon } from '@iconify/react'
import Logo from '../../assets/logo.jpg'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='flex flex-row items-center bg-transparent sticky top-0 z-50'>
      <MuiLink display='flex' alignItems='center' href='/'>
        <img src={Logo} alt='logo' className='max-w-[100px] object-contain' />
      </MuiLink>

      {/*   <Box flex={1} /> */}

      <Box className='flex items-center'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            !isActive
              ? 'font-bold text-center rounded-lg p-1 border-2 border-med_orange ml-2'
              : 'hidden'
          }
        >
          <Button className='text-white rounded cursor-pointer hover:font-bold '>
            HOME PAGE
          </Button>
        </NavLink>
        <NavLink
          to='/chef_feast'
          className={({ isActive }) =>
            !isActive
              ? 'font-bold text-center rounded-lg p-1 border-2 border-med_sand ml-2'
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
            !isActive
              ? 'font-bold text-center rounded-lg p-1 border-2 border-med_blue ml-2'
              : 'hidden'
          }
        >
          <Button className='text-white rounded cursor-pointer hover:font-bold text-center'>
            AWARDS DINNER
          </Button>
        </NavLink>

        <button
          onClick={() => navigate(-1)}
          className='flex items-center justify-center uppercase font-bold p-1 border-2 border-med_purple ml-2 text-white rounded cursor-pointer hover:font-bold text-center'
        >
          <span>
            <Icon icon='ic:round-arrow-back' width={30} />
          </span>
          Prev Page
        </button>
      </Box>
    </nav>
  )
}
