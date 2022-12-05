import './App.css'
import { Typography } from '@mui/material'
import { MainPageLayout } from './components/layouts'

function App() {
  return (
    <MainPageLayout>
      <Typography variant='h1' component='h1'>
        Chefs Awards
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Presentation
      </Typography>
    </MainPageLayout>
  )
}

export default App
