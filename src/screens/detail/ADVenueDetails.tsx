import { Paper, Typography, Box } from '@mui/material'
import { LocationWrapper } from '../../components/organisms'
import Slide1 from '../../assets/hemisferic/slide1.png'
import Slide2 from '../../assets/hemisferic/slide2.png'

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
        <img src={Slide1} alt='slide1' />
        <img src={Slide2} alt='slide2' />
      </Box>
    </Paper>
  )
}
