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
    title: 'Palau de les Arts',
    description:
      'The Palau de les Arts is a concert hall. It is the main venue of the Valencia Opera House and the Valencia Philharmonic Orchestra. It is located in the City of Arts and Sciences, a cultural complex designed by Santiago Calatrava and Félix Candela.'
  },
  {
    title: 'After Party Venue - Umbracle',
    description:
      'Umbracle is an outdoor lookout point from which you can see the entire Ciutat de las Arts i les Ciencies complex . From this marvelous terrace , you will be able to contemplate the lakes that surround the Hemisferic and the Museu de les Ciencies , as well as the different walkways and gardens areas. It has large spaces where it is posible to hold any type of event: chill out , elegand dinners , concerts , etc. Likewise , it is the perfect complement to our dinner and award ceremony as it is located just 10 minutes walk from Palau de les Arts'
  }
]

const cf_descriptions = [
  {
    title: 'Spectacular space',
    description:
      '... with porches, pergons, and gardens where any type of event can take place. There are no tents or any added or improvised element that is not integrated into the surroundings of the estate'
  },
  {
    title: 'Gastronomic experience',
    description:
      '... if something distinguishes Campo Aníbal, apart from the space, it is the quality of the gastronomy. It has its own kitchen facilities'
  },
  {
    title: 'Quality of the service',
    description:
      '... The quality of the service is another of the essential element that differentiates Campo Aníbal from others. The professionalism, friendliness, and involvement of all the staff are maximum, being part of the regular staff of the space. '
  }
]

export const TheVenue = ({ event }: TheVenueProps) => {
  const descriptions =
    event === 'awards_dinner' ? ad_descriptions : cf_descriptions
  return (
    <AccordionParagraph title='The Venue' id='panel2a-header' event={event}>
      <Link to={`/${event}/venue_details`} className='cursor-pointer'>
        <p className='text-lg text-center font-bold italic'>
          Click anywhere on the list for more details ...
        </p>
        {event === 'chef_feast' && (
          <p className='indent-5 my-5'>
            The origin of <strong>Campo Anibal</strong> dates back to Roman
            times, although the estate was built at the beginning of the 20th
            century and was set up as a farm for agricultural exploitation.
            Surrounded by orange trees, nowadays, apart from being a space for
            banquets and celebrations and a catering company, it continues to
            function as a farm focused on oranges! We have chosen this venue for
            3 reasons:
          </p>
        )}
        <ol className='px-5'>
          {descriptions.map((description, index) => (
            <>
              <li
                key={index}
                className={`${
                  event === 'awards_dinner'
                    ? 'bg-med_blue hover:bg-med_purple'
                    : 'bg-med_green hover:bg-med_brown'
                } text-med_white `}
              >
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
