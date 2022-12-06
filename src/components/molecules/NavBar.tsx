import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography
} from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import Logo from '../../assets/logo.jpg'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className='my-5 bg-med_blue_light'>
        <Link display='flex' alignItems='center'>
          <img src={Logo} alt='logo' className='max-w-[100px] object-contain' />
        </Link>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link>
            <Typography className='text-white cursor-pointer hover:font-bold'>
              CHEF FEAST
            </Typography>
          </Link>

          <Link>
            <Typography className='text-white cursor-pointer hover:font-bold'>
              AWARDS DINNER
            </Typography>
          </Link>
        </Box>

        <Box flex={1} />

        <Link>
          <IconButton>
            <MenuOutlined />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
