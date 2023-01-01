import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccordionParagraph } from '../../molecules'

export const Strategic = () => {
  return (
    <AccordionParagraph
      title='Strategic Approach'
      id='panel3a-header'
      event='main'
    >
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        Valencia is a city of contrasts where tradition and the avant-garde
        coexist perfectly. ​ In some areas, tradition has remained unchanged to
        this day, such as popular festivals and traditional dresses.​ In other
        areas, such as gastronomy and architecture, there has been an evolution
        in which some traditional details have been maintained. ​ A clear
        example is the traditional way of decorating façades, ceilings and other
        architectural elements with small pieces of tile in the form of a
        mosaic, which is the TRENCADÍS.​ ​ We can find TRENCADÍS in historical
        buildings such as the Mercat de Colón or the Estació del Nord, this
        technique has evolved and we can also find it in public areas of the
        City of Arts and Sciences. The TRENCADÍS is a fusion of tradition and
        the avant-garde, as well as a link between the different buildings of
        the CAC, which is why we have been inspired by it to design the CONCEPT
        of the World's 50 Best Restaurants 23​
      </Typography>

      <Link to='/strategic_approach'>
        <p className='hover:underline italic my-2 text-center cursor-pointer font-bold text-med_sand'>
          Click here to see the details ...
        </p>
      </Link>
    </AccordionParagraph>
  )
}
