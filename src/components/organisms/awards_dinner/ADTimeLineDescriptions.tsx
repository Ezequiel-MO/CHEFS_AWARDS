import { Box, Typography } from '@mui/material'
import RedCarpet from '../../../assets/hemisferic/hemisferic_red_carpet.png'
import Hemisferic2 from '../../../assets/hemisferic/hemisferic2.png'
import Hemisferic3 from '../../../assets/hemisferic/hemisferic3.png'
import Hemisferic4 from '../../../assets/hemisferic/hemisferic4.png'
import Hemisferic5 from '../../../assets/hemisferic/hemisferic5.png'
import Hemisferic6 from '../../../assets/hemisferic/hemisferic6.png'
import Hemisferic7 from '../../../assets/hemisferic/hemisferic7.png'
import Hemisferic8 from '../../../assets/hemisferic/hemisferic8.png'
import Hemisferic9 from '../../../assets/hemisferic/hemisferic9.png'
import Hemisferic10 from '../../../assets/hemisferic/hemisferic10.png'
import Hemisferic11 from '../../../assets/hemisferic/hemisferic11.png'
import Hemisferic12 from '../../../assets/hemisferic/hemisferic12.png'
import Hemisferic13 from '../../../assets/hemisferic/hemisferic13.png'
import Hemisferic14 from '../../../assets/hemisferic/hemisferic14.png'
import Hemisferic15 from '../../../assets/hemisferic/hemisferic15.png'
import Hemisferic16 from '../../../assets/hemisferic/hemisferic16.png'
import Hemisferic17 from '../../../assets/hemisferic/hemisferic17.png'
import Hemisferic18 from '../../../assets/hemisferic/hemisferic18.png'
import Hemisferic19 from '../../../assets/hemisferic/hemisferic19.png'

export const ADTimelineDescriptions = () => {
  return (
    <Box>
      <Typography
        variant='h2'
        sx={{ mb: 1, height: '10vh' }}
        className='text-med_purple'
        id='da_arrivals'
      >
        arrivals
        <br />
        <br />
        6pm to 8pm – Arrival at leisure to Hemisferic​ 6pm to 8pm –​
      </Typography>
      <div id='da_welcome_drink'>
        <img src={RedCarpet} alt='red carpet' />
        <img src={Hemisferic2} alt='hemisferic_2' />
        <img src={Hemisferic3} alt='hemisferic_3' />
        <img src={Hemisferic4} alt='hemisferic_4' />
        <img src={Hemisferic5} alt='hemisferic_5' />
        <img src={Hemisferic6} alt='hemisferic_6' />
        <img src={Hemisferic7} alt='hemisferic_7' />
      </div>

      <Typography
        variant='h2'
        sx={{ mb: 1, height: '10vh' }}
        className='text-med_purple'
        id='da_dinner'
      >
        Dinner
        <br />
        <br />
        6pm to 8pm – Continious entertainment in Hemisferic and pools área ​ 6pm
        to 8pm – Standing dinner buffet, buffet stations ​ 8pm to 8,30pm – Walk
        from Hemisferic to Palau de les Arts and entry in Auditori 8,30pm –
        Award Ceremony starts ​ 8,45pm-10,45 pm – Award Ceremony
      </Typography>
      <img src={Hemisferic8} alt='hemisferic_8' />
      <img src={Hemisferic9} alt='hemisferic_9' />
      <img src={Hemisferic10} alt='hemisferic_10' />
      <img src={Hemisferic11} alt='hemisferic_11' />
      <img src={Hemisferic12} alt='hemisferic_12' />
      <img src={Hemisferic13} alt='hemisferic_13' />
      <img src={Hemisferic14} alt='hemisferic_14' />
      <img src={Hemisferic15} alt='hemisferic_15' />
      <img src={Hemisferic16} alt='hemisferic_16' />
      <img src={Hemisferic17} alt='hemisferic_17' />
      <img src={Hemisferic18} alt='hemisferic_18' />
      <img src={Hemisferic19} alt='hemisferic_19' />
      <Typography
        variant='h2'
        sx={{ mb: 1, height: '10vh' }}
        className='text-med_purple'
        id='da_party'
      >
        Dance Party
        <br />
        <br />
        11pm to 1am – Party in Umbracle in exclusivity for the event ​ 1am –
        Back to hotels at leisure
      </Typography>
    </Box>
  )
}
