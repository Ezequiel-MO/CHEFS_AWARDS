import { AccordionParagraph } from '../../molecules'
import { CentralModal } from '../../molecules'
import { useState } from 'react'

export const Briefing = () => {
  const [modal, setModal] = useState(false)
  const handleClose = () => setModal(false)
  return (
    <AccordionParagraph
      title='Briefing'
      id='panel1a-header'
      backgroundColor='#FAFAFA'
    >
      <div className='flex flex-col'>
        <p>
          The World’s 50 Best Restaurants Awards Ceremony is the most
          prestigious event in the global restaurant industry calendar. It is a
          celebration of the world’s best restaurants, chefs and industry
          leaders.{' '}
        </p>
        <p>
          The event programme is spread across 4 to 5 days and includes, but is
          not limited to:{' '}
        </p>{' '}
        <ul>
          <li> Welcome to Country Dinner,</li>
          <li> #50BestTalks,</li>
          <li> Pre awards Press Conference, </li>
          <li> Chefs’ Feast, </li>
          <li> Recovery Brunch and </li>
          <li> The World’s 50 Best Restaurants Awards Ceremony. </li>
        </ul>
        <p>
          Each events’ concept is detailed, they are all on invitation only, The
          programme culminates with the Awards Ceremony – a livestreamed live
          event - recognised as the Oscars of Gastronomy.{' '}
        </p>
        <p>The Event program will take place in Valencia in June 2023.</p>
        <CentralModal open={modal} handleClose={handleClose} />
        <p
          onClick={() => setModal(true)}
          className='hover:underline italic my-2 text-center cursor-pointer font-bold text-med_sand'
        >
          Click here to see a map of the proposed Venues
        </p>
        <p>
          In this presentation, we will work on our creative concept proposal
          for the 2 events within the programmed both listed below:
        </p>
        <div className='min-h-52 grid grid-cols-none xs:grid-cols-2 gap-4 px-5 mb-5'>
          <div className='bg-[#fff] rounded-xl shadow-sm p-2'>
            <h3 className='text-med_green text-xl font-bold'>Chef's Feast</h3>
            <ul>
              <li>Attendance : approx 250 pax</li>
              <li>
                Who Attends: Dining experience for all restaurants that appear
                on the 50 Best Restaurants 2023 list - Media free event
              </li>
              <li>Time : 7pm - 10pm</li>
              <li>Location : Outside/rural/Orange fields</li>
              <li>Theme : Chef Feast Dinner w/ live cooking stations</li>
              <li>
                Menu : Standing dinner to showcase local produce , landscape ,
                lifestyle, etc...
              </li>
              <li>
                Entertainment : Lots of entertainment, laughter, fun and food
              </li>
            </ul>
          </div>
          <div className='bg-[#fff] rounded-xl shadow-sm p-2'>
            <h3 className='text-med_green text-xl font-bold'>
              The World's Best Restaurants Awards Ceremony
            </h3>
            <ul>
              <li>Attendance : approx 1,200 pax</li>
              <li>
                Who Attends:VIPs, World's 50 Best Restaurants 2023 list, media
                and sponsors
              </li>
              <li>Time : 6pm - 10pm</li>
              <li>Location : Ciutat de les Arts i les Ciencies</li>
              <li>
                Theme : Gala Event, Awards Ceremony, after party and press
                conference
              </li>
              <li>Menu : Gala Event</li>
              <li>
                Entertainment : Shows and entertainment throughout the event
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AccordionParagraph>
  )
}
