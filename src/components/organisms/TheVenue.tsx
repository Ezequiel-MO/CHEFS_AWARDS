import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { AccordionParagraph } from '../molecules'

interface TheVenueProps {
  event: string
}

const ad_descriptions = [
  {
    title: 'Hemisferic',
    description:
      'The Hemisferic is a spectacular building that represents a large human eye . It is sourrounded by pools which reflect its grandeur and additonally act as the stage for different kinds of shows. This unique building has large areas where Events can be held : dinners , cocktail parties , presentations , gala dinners , etc. It is one of the most emblematic buildings of the complex.'
  },
  {
    title: 'After Party Venue - Umbracle',
    description:
      'Umbracle is an outdoor lookout point from which you can see the entire Ciutat de las Arts i les Ciencies complex . From this marvelous terrace , you will be able to contemplate the lakes that surround the Hemisferic and the Museu de les Ciencies , as well as the different walkways and gardens areas. It has large spaces where it is posible to hold any type of event: chill out , elegand dinners , concerts , etc. Likewise , it is the perfect complement to our dinner and award ceremony as it is located just 10 minutes walk from Palau de les Arts'
  },
  {
    title: 'Palau de les Arts',
    description:
      'The Palau de les Arts is a concert hall. It is the main venue of the Valencia Opera House and the Valencia Philharmonic Orchestra. It is located in the City of Arts and Sciences, a cultural complex designed by Santiago Calatrava and Félix Candela.'
  }
]

export const TheVenue = ({ event }: TheVenueProps) => {
  const descriptions = event === 'awards_dinner' ? ad_descriptions : []
  return (
    <AccordionParagraph title='The Venue' id='panel2a-header' event={event}>
      <Link
        to={`/${event}/venue_details`}
        className='hover:underline cursor-pointer'
      >
        <p className='text-lg text-center font-bold italic'>
          Click anywhere on the list for more details ...
        </p>
        <ol className='px-5'>
          {descriptions.map((description, index) => (
            <>
              <li key={index} className='font-bold'>
                {description.title}
              </li>
              <p className='indent-5'>{description.description}</p>
            </>
          ))}
        </ol>
      </Link>
    </AccordionParagraph>
  )
}
