import { Box, Typography } from '@mui/material'
import { useTimelineCtx } from '../../../context'

export const CFTimeLineDescriptions = () => {
  const { activeId } = useTimelineCtx()
  return (
    <Box>
      <Typography
        variant='h2'
        sx={{ mb: 1, height: '80vh' }}
        className='text-med_purple'
        id='cf_arrivals'
      >
        arrivals
        <br />
        <br />
        6pm to 7pm – Arrival by bus​
      </Typography>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '80vh' }}
        className='text-med_purple'
        id='cf_welcome_drink'
      >
        Welcome Drink
        <br />
        <br />
        6pm to 7pm – Welcome drink in Barrels area – some drinks and snacks ​
        7pm – Mascletá ​
      </Typography>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '80vh' }}
        className='text-med_purple'
        id='cf_dinner'
      >
        Dinner
        <br />
        <br />
        7pm to 9pm – Standing dinner buffet, show and paella cooking in Porchada
        área.
      </Typography>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '80vh' }}
        className='text-med_purple'
        id='cf_entertainment'
      >
        Dance Party
        <br />
        <br />
        9pm – Fireworks and falla “burn” ​ 9,15pm to 11pm – DJ Party ​ 11pm
        Departure by bus to Valencia ​ necessitatibus!
      </Typography>
    </Box>
  )
}
