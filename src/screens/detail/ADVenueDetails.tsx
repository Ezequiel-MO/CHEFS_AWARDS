import { Paper, Typography, Box } from '@mui/material'
import { LocationWrapper } from '../../components/organisms'
import RedCarpet from '../../assets/hemisferic/hemisferic_red_carpet.png'
import Hemisferic2 from '../../assets/hemisferic/hemisferic2.png'
import Hemisferic3 from '../../assets/hemisferic/hemisferic3.png'
import Hemisferic4 from '../../assets/hemisferic/hemisferic4.png'
import Hemisferic5 from '../../assets/hemisferic/hemisferic5.png'
import Hemisferic6 from '../../assets/hemisferic/hemisferic6.png'
import Hemisferic7 from '../../assets/hemisferic/hemisferic7.png'
import Hemisferic8 from '../../assets/hemisferic/hemisferic8.png'
import Hemisferic9 from '../../assets/hemisferic/hemisferic9.png'
import Hemisferic10 from '../../assets/hemisferic/hemisferic10.png'
import Hemisferic11 from '../../assets/hemisferic/hemisferic11.png'
import Hemisferic12 from '../../assets/hemisferic/hemisferic12.png'
import Hemisferic13 from '../../assets/hemisferic/hemisferic13.png'
import Hemisferic14 from '../../assets/hemisferic/hemisferic14.png'
import Hemisferic15 from '../../assets/hemisferic/hemisferic15.png'
import Hemisferic16 from '../../assets/hemisferic/hemisferic16.png'
import Hemisferic17 from '../../assets/hemisferic/hemisferic17.png'
import Hemisferic18 from '../../assets/hemisferic/hemisferic18.png'
import Hemisferic19 from '../../assets/hemisferic/hemisferic19.png'

export const ADVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_blue text-med_white p-2'>
        City Of Arts And Sciences
      </Typography>
      <Box>
        <Typography variant='h2'>Location</Typography>
        <LocationWrapper venue='CAC' />
      </Box>
      <Box className='mt-5'>
        <Typography variant='h2'>Red Carpet And Gala Dinner</Typography>

        <Typography paragraph variant='body2'>
          HEMISFERIC The Hemisferic is a spectacular builing that represents a
          large human eye . It is sourrounded by pools of wáter which reflect
          its grandeur and additonally act as the stage for different kind of
          shows. This unique building has large areas where Events can be held :
          dinners , cocktail parties , presentations , gala dinners , etc. It is
          one of the most emblematic buildings of the complex.
        </Typography>

        <img src={RedCarpet} alt='red carpet' />
        <img src={Hemisferic2} alt='hemisferic_2' />
        <img src={Hemisferic3} alt='hemisferic_3' />
        <img src={Hemisferic4} alt='hemisferic_4' />
        <img src={Hemisferic5} alt='hemisferic_5' />
        <img src={Hemisferic6} alt='hemisferic_6' />
        <img src={Hemisferic7} alt='hemisferic_7' />
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

        <Typography variant='h2'>After Party Venue - UMBRACLE</Typography>
        <Typography paragraph variant='body2'>
          Umbracle is an outdoor lookout point from which you can see the entire
          Ciutat de las Arts i les Ciencies complex . From this marvelous
          terrace , you will be able to contemplate the lakes that surround the
          Hemisferic and the Museu de les Ciencies , as well as the different
          walkways and gardens areas. It has large spaces where it is posible to
          hold any type of event: chill out , elegand dinners , concerts , etc.
          Likewise , it is the perfect complement to our dinner and award
          ceremony as it is located just 10 minutes walk from Palau de les Arts
        </Typography>
      </Box>
      <Box>
        <Typography variant='h2'>Photo Gallery</Typography>
      </Box>
    </Paper>
  )
}
