import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses
} from '@mui/lab'
import {
  DirectionsBusOutlined,
  CelebrationOutlined,
  LocalBarOutlined
} from '@mui/icons-material'
import { Typography } from '@mui/material'

export const EventTimeline = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2
        }
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
          07:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <DirectionsBusOutlined />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            Bus Arrivals
          </Typography>
          <Typography>W/Shuttle service </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
          08:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <CelebrationOutlined />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            Entertainment
          </Typography>
          <Typography>Welcome Fallero</Typography>
          <Typography>Mascletà</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
          08:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LocalBarOutlined />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            Cocktail Reception
          </Typography>
          <Typography>Drinks and snacks</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
