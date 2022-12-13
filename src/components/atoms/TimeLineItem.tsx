import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
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
  children: React.ReactNode
  title: string
  description: string
  time: string
}

export const TimeLineItem: FC<Props> = ({
  children,
  title,
  description,
  time
}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/chef_feast/timeline_details/${title}`)

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: '15px 0' }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <IconButton onClick={handleClick}>{children}</IconButton>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant='h6' component='span'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  )
}
