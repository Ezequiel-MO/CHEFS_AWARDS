import { FC, useState } from 'react'
import { Grid } from '@mui/material'
import { EventTimeline } from '../molecules'
import { CFTimeLineDescriptions } from './chefs_awards/CFTimeLineDescriptions'
import { TimelineProvider } from '../../context'
import { TimelineCtx } from '../../context/timeline_context'

const chef_feast_timeline_data = [
  {
    id: 11,
    time: '06:00 pm',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Arrivals'
  },
  {
    id: 12,
    time: '06:30 pm',
    icon: 'fluent-emoji-high-contrast:cocktail-glass',
    title: 'Welcome Drink'
  },
  {
    id: 13,
    time: '07:15 pm',
    icon: 'material-symbols:tapas-outline',
    title: 'Dinner'
  },
  {
    id: 14,
    time: '10:00 pm',
    icon: 'jam:dj',
    title: 'Dance Party'
  }
]

const dinner_awards_timeline_data = [
  {
    id: 21,
    time: '07:30 am',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Photo Call',
    description: 'W/Shuttle service'
  },
  {
    id: 22,
    time: '08:00 pm',
    icon: 'material-symbols:directions-bus-outline',
    title: 'Entertainment',
    description: 'Welcome Fallero - Mascletà'
  },
  {
    id: 23,
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
  const [activeId, setActiveId] = useState(0)
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
