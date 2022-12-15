import { FC, useState } from 'react'
import { Grid } from '@mui/material'
import { EventTimeline } from '../../components/molecules'
import {
  ADTimelineDescriptions,
  CFTimeLineDescriptions
} from '../../components/organisms'
import { TimelineCtx } from '../../context'

interface Props {
  type: 'chef_feast' | 'awards_dinner'
}

export const TimeLine: FC<Props> = ({ type }) => {
  const [activeId, setActiveId] = useState('')
  return (
    <TimelineCtx.Provider value={{ activeId, setActiveId }}>
      <Grid container spacing={2} sx={{ width: '95vw' }}>
        <Grid item xs={12} sm={4}>
          <EventTimeline type={type} />
        </Grid>
        <Grid item xs={12} sm={8}>
          {type === 'chef_feast' ? (
            <CFTimeLineDescriptions />
          ) : (
            <ADTimelineDescriptions />
          )}
        </Grid>
      </Grid>
    </TimelineCtx.Provider>
  )
}
