import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Link as MuiLink
} from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import Logo from '../../assets/logo.jpg'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className='my-5 bg-med_blue_light'>
        <MuiLink display='flex' alignItems='center' href='/'>
          <img src={Logo} alt='logo' className='max-w-[100px] object-contain' />
        </MuiLink>

        <Box flex={1} />

        <Box className='sm:flex sm:flex-col p-1'>
          <NavLink
            to='/chef_feast'
            className={({ isActive }) =>
              isActive
                ? 'bg-med_sand font-bold text-center rounded p-1'
                : 'text-center'
            }
          >
            <Typography className='text-white cursor-pointer hover:font-bold'>
              CHEF FEAST
            </Typography>
          </NavLink>

          <NavLink
            to='/awards_dinner'
            className={({ isActive }) =>
              isActive
                ? 'bg-med_sand font-bold text-center rounded p-1'
                : 'text-center'
            }
          >
            <Typography className='text-white cursor-pointer hover:font-bold text-center rounded'>
              AWARDS DINNER
            </Typography>
          </NavLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
