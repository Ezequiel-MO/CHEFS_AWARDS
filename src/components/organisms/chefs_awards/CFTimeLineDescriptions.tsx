import { Box, Typography } from '@mui/material'
import { useTimelineCtx } from '../../../context'

export const CFTimeLineDescriptions = () => {
  const { activeId } = useTimelineCtx()
  return (
    <Box>
      <Typography
        variant='h2'
        sx={{ mb: 1, height: '30vh' }}
        className='text-med_sand'
        id='cf_arrivals'
      >
        arrivals
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat
        reiciendis magnam fugiat amet aliquid voluptas dolor ratione atque
        eligendi illo molestiae quidem, nesciunt doloremque nobis eius earum nam
        necessitatibus!
      </Typography>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '30vh' }}
        className='text-med_sand'
        id='cf_welcome_drink'
      >
        Welcome Drink
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat
        reiciendis magnam fugiat amet aliquid voluptas dolor ratione atque
        eligendi illo molestiae quidem, nesciunt doloremque nobis eius earum nam
        necessitatibus!
      </Typography>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '30vh' }}
        className='text-med_sand'
        id='cf_dinner'
      >
        Dinner
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat
        reiciendis magnam fugiat amet aliquid voluptas dolor ratione atque
        eligendi illo molestiae quidem, nesciunt doloremque nobis eius earum nam
        necessitatibus!
      </Typography>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '30vh' }}
        className='text-med_sand'
        id='cf_entertainment'
      >
        Dance Party
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat
        reiciendis magnam fugiat amet aliquid voluptas dolor ratione atque
        eligendi illo molestiae quidem, nesciunt doloremque nobis eius earum nam
        necessitatibus!
      </Typography>
    </Box>
  )
}
