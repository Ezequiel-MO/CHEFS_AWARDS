import { useState } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { LocationWrapper } from '../../../../components/organisms'
import { Icon } from '@iconify/react'
import CACVideo from '../../../../assets/CAC.mp4'
import { Slider } from '../../../../components/molecules'
import { hemisferic_photos, palau_photos, umbracle_photos } from './photos'

interface WhosOpen {
  hemisferic?: boolean
  palau?: boolean
  umbracle?: boolean
}

export const ADVenueDetails = () => {
  const [open, setOpen] = useState<WhosOpen>({
    hemisferic: false,
    palau: false,
    umbracle: false
  })
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_blue text-med_white p-2'>
        City Of Arts And Sciences . Play the video for the visuals
      </Typography>
      <Box className='cursor-pointer'>
        <video src={CACVideo} autoPlay={true} controls={true} />
        <ol className='my-5'>
          <li className='bg-med_purple hover:bg-med_blue_light text-med_white hover:text-med_purple mb-5'>
            Hemisferic : Red Carpet and Welcome Reception
          </li>
          <p className='italic indent-5'>
            Being the "Oldest" of all the buildings in the{' '}
            <strong>City of Arts and Sciences</strong> , the{' '}
            <strong>Hemisferic</strong> is our{' '}
            <strong className='underline'>
              favorite choice location for the red carpet, welcome reception and
              dinner
            </strong>{' '}
            , as opposed to the <strong> Principe Felipe Museum </strong> or
            <strong> Sala Arquerias</strong> or even the{' '}
            <strong> Umbracle</strong>.
          </p>
          <br />
          <p className='italic indent-5'>
            Located between two lakes and overlooking the{' '}
            <strong> Umbracle</strong> and the Turia Gardens, its circular shape
            in the form of an eye, makes it ideal for the reception of all
            attendees. The entrance to the eye will be through the glass
            walkway, where we will place the red carpet and registration area.
            Inside the <strong> Hemisferic</strong> , in the perimeter ring, we
            will set up a platform in the north lake, to give more space and
            make it easier for the attendees, specially in case we have to take
            "covid" measures again. For the location of the sponsors, we will
            design the floor in the form of 'trencadis', so that each one has
            their own well-marked space or can even choose where to be located.
            The sponsors will be interacting with different buffets with
            avant-garde gastronomy and entertainment during the whole reception.
            The Hemisferic has another advantage: the walls of the space
            simulate the eyelid of an eye, so they can be opened or closed
            depending on the weather conditions. With both sides open, and in
            the shade, we will have natural fresh air from the Mediterranean
            Sea, which is less than 1 km away.
          </p>
          <div className='flex flex-col justify-center items-center'>
            <button
              className='flex items-center uppercase bg-med_blue hover:bg-med_blue_light text-med_white font-bold py-4 px-8 rounded my-5'
              onClick={() =>
                setOpen({ ...open, hemisferic: !open['hemisferic'] })
              }
            >
              <span className='mr-5'>
                <Icon icon='mdi:hand-pointing-right' width={30} />
              </span>
              Click here to see the photos of the Hemisferic
            </button>
            {open['hemisferic'] && (
              <Slider pics={hemisferic_photos} event='da' />
            )}
          </div>

          <li className='bg-med_purple hover:bg-med_blue_light text-med_white hover:text-med_purple mb-5 text-center'>
            Palau de les Arts : Awards Ceremony
          </li>
          <p className='italic indent-5'>
            At 8:00pm, we will announce that it is time to walk to the{' '}
            <strong>Palau de les Arts</strong> , where, at the 11th floor, in
            the Auditori, we will have the awards ceremony. We propose "Tania
            Llasera as the night M.C, a well-known journalist and writer of
            motivational books. In the <strong>Palau de les Arts</strong> we
            will have a specially designed screen for the group, as well as a
            live concert by the Palau Chamber Orchestra.
          </p>
          <div className='flex flex-col justify-center items-center'>
            <button
              className='flex items-center uppercase bg-med_blue hover:bg-med_blue_light text-med_white font-bold py-4 px-8 rounded my-5'
              onClick={() => setOpen({ ...open, palau: !open['palau'] })}
            >
              <span className='mr-5'>
                <Icon icon='mdi:hand-pointing-right' width={30} />
              </span>
              Click here to see the photos of Palau de les Arts
            </button>
            {open['palau'] && <Slider pics={palau_photos} event='da' />}
          </div>
          <li className='bg-med_purple hover:bg-med_blue_light text-med_white hover:text-med_purple mb-5'>
            Umbracle : After Party
          </li>
          <p className='italic indent-5'>
            After the awards ceremony, we will have a grand party in the
            <strong> Umbracle</strong> , where we will have drinks, a DJ and a
            live music.
          </p>
          <div className='flex flex-col justify-center items-center'>
            <button
              className='flex items-center uppercase bg-med_blue hover:bg-med_blue_light text-med_white font-bold py-4 px-8 rounded my-5'
              onClick={() => setOpen({ ...open, umbracle: !open['umbracle'] })}
            >
              <span className='mr-5'>
                <Icon icon='mdi:hand-pointing-right' width={30} />
              </span>
              Click here to see the photos of the Umbracle
            </button>
            {open['umbracle'] && <Slider pics={umbracle_photos} event='da' />}
          </div>
          <li className='bg-med_purple hover:bg-med_blue_light text-med_white hover:text-med_purple mb-5'>
            City of Arts and Sciences : Location Map
          </li>
          <p className='italic indent-5 my-5'>
            The
            <strong> City of Arts & Sciences</strong> , is conveniently located
            between <strong>Valencia's Old Town</strong> and the beach of{' '}
            <strong>La Malvarrosa</strong> , and is easily accessible by all
            sorts of transport.
          </p>
          <LocationWrapper venue='CAC' />
        </ol>
      </Box>
    </Paper>
  )
}
