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
        <div className='min-h-52 px-5 my-5 flex cursor-pointer'>
          <div className='bg-[#fff] rounded-md shadow-xl p-5 border border-l-med_purple hover:transform hover:scale-110 hover:-rotate-1 hover:transition-all hover:duration-500'>
            <div className='mb-2'>
              <h3 className='text-med_green text-xl font-bold'>Chefs' Feast</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <td className='uppercase font-bold w-40'>Attendance :</td>
                  <td>approx 250 pax</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Who attends :</td>
                  <td>
                    all restaurants that appear on the 50 Best Restaurants 2023
                    list - Media free event
                  </td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>time :</td>
                  <td>7pm - 10pm</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Location :</td>
                  <td>Outside/rural/Orange fields</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Theme :</td>
                  <td>Chef Feast Dinner w/ live cooking stations</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Menu :</td>
                  <td>
                    Standing dinner to showcase local produce , landscape ,
                    lifestyle, etc...
                  </td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Entertainment :</td>
                  <td>Lots of entertainment, laughter, fun and food</td>
                </tr>
              </tbody>
            </table>

            {/* footer */}
            <div className='mt-4'>
              <p className='text-sm text-med_sand italic text-center hover:underline hover:cursor-pointer'>
                Go to the Event Timeline
              </p>
            </div>
          </div>
          <div className='bg-[#fff] rounded-md shadow-xl p-5 border border-l-med_purple -ml-96 hover:transform hover:scale-110 hover:-rotate-1 hover:transition-all hover:duration-500'>
            <div className='mb-2'>
              <h3 className='text-med_green text-xl font-bold'>
                The World's Best Restaurants Awards
              </h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <td className='uppercase font-bold w-40'>Attendance :</td>
                  <td>approx 1,200 pax</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Who attends :</td>
                  <td>
                    VIPs, World's 50 Best Restaurants 2023 list, media and
                    sponsors
                  </td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>time :</td>
                  <td>6pm - 10pm</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Location :</td>
                  <td>Ciutat de les Arts i les Ciencies</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Theme :</td>
                  <td>
                    Gala Event, Awards Ceremony, after party and press
                    conference
                  </td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Menu :</td>
                  <td>Gala Event</td>
                </tr>
                <tr>
                  <td className='uppercase font-bold w-40'>Entertainment :</td>
                  <td> Shows and entertainment throughout the event</td>
                </tr>
              </tbody>
            </table>
            <div className='mt-4'>
              <p className='text-sm text-med_sand italic text-center hover:underline hover:cursor-pointer'>
                Go to the Event Timeline
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccordionParagraph>
  )
}
