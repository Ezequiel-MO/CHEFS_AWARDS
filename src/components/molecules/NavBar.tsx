import { Link } from 'react-router-dom'
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

        <Box className='sm:flex sm:flex-col'>
          <Link to='/chef_feast'>
            <Typography className='text-white cursor-pointer hover:font-bold'>
              CHEF FEAST
            </Typography>
          </Link>

          <Link to='/awards_dinner'>
            <Typography className='text-white cursor-pointer hover:font-bold'>
              AWARDS DINNER
            </Typography>
          </Link>
        </Box>

        <Box flex={1} />

        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
