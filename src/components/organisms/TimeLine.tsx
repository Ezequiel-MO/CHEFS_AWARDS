import { FC, useState } from 'react'
import { Grid } from '@mui/material'
import { EventTimeline } from '../molecules'
import { CFTimeLineDescriptions } from '../organisms'
import { TimelineCtx } from '../../context'

const chef_feast_timeline_data = [
  {
    id: 'cf_arrivals',
    time: '06:00 pm',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Arrivals'
  },
  {
    id: 'cf_welcome_drink',
    time: '06:30 pm',
    icon: 'fluent-emoji-high-contrast:cocktail-glass',
    title: 'Welcome Drink'
  },
  {
    id: 'cf_dinner',
    time: '07:15 pm',
    icon: 'material-symbols:tapas-outline',
    title: 'Dinner'
  },
  {
    id: 'cf_entertainment',
    time: '10:00 pm',
    icon: 'jam:dj',
    title: 'Dance Party'
  }
]

const dinner_awards_timeline_data = [
  {
    id: 'da_arrivals',
    time: '07:30 am',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Photo Call',
    description: 'W/Shuttle service'
  },
  {
    id: 'da_welcome_drink',
    time: '08:00 pm',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Entertainment',
    description: 'Welcome Fallero - Mascletà'
  },
  {
    id: 'da_dinner',
    time: '08:00 pm',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Cocktail Reception',
    description: 'Drinks and Snacks'
  }
]

interface Props {
  type: 'chef_feast' | 'dinner_awards'
}

export const TimeLine: FC<Props> = ({ type }) => {
  const [activeId, setActiveId] = useState('')
  return (
    <TimelineCtx.Provider value={{ activeId, setActiveId }}>
      <Grid container spacing={2} sx={{ width: '100vw' }}>
        <Grid item xs={12} sm={4}>
          <EventTimeline
            data={
              type === 'chef_feast'
                ? chef_feast_timeline_data
                : dinner_awards_timeline_data
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CFTimeLineDescriptions />
        </Grid>
      </Grid>
    </TimelineCtx.Provider>
  )
}
