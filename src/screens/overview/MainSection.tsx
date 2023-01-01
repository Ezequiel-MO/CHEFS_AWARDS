import { Typography, Paper } from '@mui/material'
import {
  Briefing,
  Concept,
  MeetTheTeam,
  Strategic
} from '../../components/organisms'

export const MainSection = () => {
  return (
    <Paper elevation={0} className='p-2 max-w-[900px]'>
      <Typography variant='h1' className='text-black'>
        The World's 50 Best Restaurants 2023
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} className='text-black'>
        Presentation
      </Typography>
      <div>
        <Briefing />
        <Concept />
        <Strategic />
        <MeetTheTeam />
      </div>
    </Paper>
  )
}
