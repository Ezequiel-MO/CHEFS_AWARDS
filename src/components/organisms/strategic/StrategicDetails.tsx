import { Paper, Typography } from '@mui/material'
import ConceptMontage from '../../../assets/concept/concept_montage.png'
import ColorPalette from '../../../assets/concept/color_palette.png'

export const StrategicDetails = () => {
  return (
    <Paper elevation={0} className='p-5 max-w-[900px]'>
      <h1 className='uppercase text-center text-xl font-bold mb-2'>
        The TRENCADÍS as a concept
      </h1>
      <div className='grid grid-cols-1'>
        <Typography
          paragraph
          variant='h6'
          align='left'
          className='indent-3'
          gutterBottom
        >
          Based on Valencia as the centrepiece, we have created a cloud of
          concepts that define the city, its tradition, its culture, its
          architecture and the events that will take place around the World's 50
          Best Restaurants awards gala. ​ ​ Each concept is a piece of tile,
          with its own unique characteristics, which by itself does not work,
          but together they make sense and will form a beautiful work of art of
          TRENCADIS.​ ​
        </Typography>
        <img src={ConceptMontage} alt='montage' />
        <Typography paragraph variant='h6' align='left' className='indent-3'>
          But the individual pieces do not form the work of art, they need
          someone to organise them so that their shapes fit together and the
          glue that binds all the pieces into one. That is CUTT/events: the
          organisation and coordination of the different pieces to obtain an
          excellent master piece.
        </Typography>
      </div>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        Extracting the essence of Valencia We have created a color palette, a
        set of colors that have been harmoniously selected to be used for a
        common purpose: Evoke the azahar blossom scent of the orange trees, the
        sea, the blue sky, the gastronomy, the unique architecture of the City
        of Arts and Sciences...​
      </Typography>
      <img src={ColorPalette} alt='palette' />
    </Paper>
  )
}
