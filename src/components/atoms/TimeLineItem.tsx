import { FC } from 'react'
import { Icon } from '@iconify/react'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab'
import { IconButton, Typography } from '@mui/material'

type Props = {
  icon: string
  title: string
  time: string
  type: 'chef_feast' | 'awards_dinner'
}

export const TimeLineItem: FC<Props> = ({ title, icon, time, type }) => {
  return (
    <TimelineItem
      className={`cursor-pointer rounded-md my-2 ${
        type === 'chef_feast'
          ? 'bg-med_green hover:bg-med_sand'
          : 'bg-med_blue hover:bg-med_blue_light'
      } text-white  text-med_white opacity-70`}
    >
      <TimelineOppositeContent sx={{ m: '15px 0' }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <IconButton>
            <Icon icon={icon} color='#de5b00' />
          </IconButton>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '20px', px: 2 }}>
        <Typography variant='body1' component='span'>
          {title}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  )
}
