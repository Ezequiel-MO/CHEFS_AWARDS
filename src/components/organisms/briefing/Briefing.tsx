import { AccordionParagraph } from '../../molecules'

export const Briefing = () => {
  return (
    <AccordionParagraph
      title='Briefing'
      id='panel1a-header'
      backgroundColor='#FAFAFA'
    >
      <div className='min-h-52 grid grid-cols-none xs:grid-cols-2 gap-4 px-5 mb-5'>
        <div className='bg-[#fff] rounded-xl shadow-sm p-2'>
          <h3 className='text-med_green text-xl font-bold'>Chef's Feast</h3>
          <ul>
            <li>Attendance : approx 250 pax</li>
            <li>
              Who Attends: Dining experience for all restaurants that appear on
              the 50 Best Restaurants 2023 list - Media free event
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
              Who Attends:VIPs, World's 50 Best Restaurants 2023 list, media and
              sponsors
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
    </AccordionParagraph>
  )
}
