import { AppBar, Box, Button, IconButton, Link, Toolbar } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import Logo from '../../assets/logo.jpg'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className='my-5'>
        <Link display='flex' alignItems='center'>
          <img src={Logo} alt='logo' className='max-w-[100px] object-contain' />
        </Link>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link>
            <Button>CHEFF FEAST</Button>
          </Link>

          <Link>
            <Button>AWARDS DINNER</Button>
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
