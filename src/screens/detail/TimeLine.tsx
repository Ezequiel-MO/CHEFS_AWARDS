import { FC } from 'react'
import { Grid } from '@mui/material'
import { EventTimeline } from '../../components/molecules'
import {
  ADTimelineDescriptions,
  CFTimeLineDescriptions
} from '../../components/organisms'

interface Props {
  type: 'chef_feast' | 'awards_dinner'
}

export const TimeLine: FC<Props> = ({ type }) => {
  return (
    <Grid
      container
      sx={{ width: '100vw', maxWidth: '1200px', marginLeft: '-80px' }}
    >
      <Grid item xs={12} sm={3}>
        <EventTimeline type={type} />
      </Grid>
      <Grid item xs={12} sm={9}>
        {type === 'chef_feast' ? (
          <CFTimeLineDescriptions />
        ) : (
          <ADTimelineDescriptions />
        )}
      </Grid>
    </Grid>
  )
}
