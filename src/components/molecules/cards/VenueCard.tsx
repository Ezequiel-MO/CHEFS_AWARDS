import { Card, CardContent, CardMedia } from '@mui/material'

interface Props {
  image: {
    src: string
    alt: string
  }
  index: number
}

const Aldamar_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Masia Aldamar</p>
      <p className='text-sm indent-5'>
        It was built at the beginning of the 17th century as a wine and oil
        farm. Nowadays, although it has a small wine cellar for wine tasting,
        the wine and oil production is carried out in other farms in the Requena
        area. Although it is a rustic and working farm, we have discarded this
        option, because
      </p>
      <ul className='p-2'>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the farmhouse offers a catering service (not its own kitchen as in
          Xamandreu and Campo Aníbal)
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the farmhouse is not as integrated in the Valencian gastronomic
          culture as Campo Anibal or Xamandreu
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... in case of rain or bad weather the option of back up for the
          concept would be very tight and we would have to change the concept of
          the dinner to fit in the available room.
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the entrance to the finca in <strong>Campo Anibal</strong> is
          nicer than the one at Aldamar.
        </li>
      </ul>
    </div>
  )
}

const Xamandreu_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Masia Xamandreu</p>
      <p className='text-sm indent-5'>
        Impressive centenary farmhouse built in the 19th century with
        bicentenary gardens, large terraces and cosy interior lounges. It also
        has its own kitchen and is surrounded by orange trees. We have discarded
        this option because
      </p>
      <ul className='p-2'>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... <strong>Campo Anibal</strong> offers a wider variety of spaces for
          the event.
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... We would have restrictions when it comes to a mascletá or a
          fireworks display (we would have to change the concept a bit).
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... The venue is not as integrated in the Valencian economy as{' '}
          <strong>Campo Anibal</strong>
        </li>
      </ul>
    </div>
  )
}

const Cartuja_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Cartuja de Ara Christi</p>
      <p className='text-sm indent-5'>
        Built in the 17th century, is a monument protected by Heritage and has
        been declared an Asset of Cultural Interest, and is undoubtedly one of
        the most exclusive venues for holding social events in the Valencian
        Community.{' '}
      </p>
      <ul className='p-2'>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... after all, we feel that it does not meet the requirement of a
          traditional venue connected with Valencian gastronomic culture and is
          managed by a catering company
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... it does not have own kitchen and we would have to use the catering
          service of the venue
        </li>
      </ul>
    </div>
  )
}

const Vallesa_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Vallesa de Mandor</p>
      <p className='text-sm indent-5'>
        La Vallesa del Mandor is a majestic building dating from the 18th
        century surrounded by orange groves and gardens, which once served as
        accommodation for personalities such as King Alfonso XIII. It has many
        outdoor gardens in the French style, we have not chosen this option for
        the following reasons:{' '}
      </p>
      <ul className='p-2'>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... they do not have their own kitchen facilities
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the gardens, although impressive, do not have much shade- which
          can be an issue in Valencia in June at 6pm
        </li>
        <li className='bg-med_green text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the backup option in case of rain or bad weather has many columns
          and would distort the dinner concept
        </li>
      </ul>
    </div>
  )
}

const CalleMayor_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Calle Mayor</p>
      <p className='text-sm indent-5'>
        Located in the <strong>Principe Felipe Museum </strong>, this area was a
        preferred one for the client. It offers spectacular views of part of the
        city of Valencia. It also houses the two most emblematic elements of the
        Museum: Focault's pendulum and a representation of a DNA molecule.
        However, although this area would be feasible, we would like to
        discourage it because{' '}
      </p>
      <ul className='p-2'>
        <li className='bg-med_purple text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... at 6:00pm in Valencia, expect high temperatures and no shade. The
          large glass area will be overheated and uncomfortable since it
          receives direct sunlight all day.
        </li>
        <li className='bg-med_purple text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the museum is open to the public until 8:00pm. The 'Calle Mayor'
          is connected to the floors where the interactive experiments of the
          museum are located, so the influx of visitors and subsequent noise can
          interfere negatively in the evening.
        </li>
      </ul>
    </div>
  )
}

const Arquerias_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Arquerias</p>
      <p className='text-sm indent-5'>
        This space, located in the lower part of the{' '}
        <strong>Principe Felipe Museum </strong>, consists of 12 sections of 300
        square metres each we have not chosen this option for the following
        reasons:{' '}
      </p>
      <ul className='p-2'>
        <li className='bg-med_purple text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... for our purposes, this area has very low ceilings
        </li>
        <li className='bg-med_purple text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the management of 'CAC' has already informed us that this area is
          contracted for some summer concerts
        </li>
      </ul>
    </div>
  )
}

const Umbracle_text = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-bold my-5'>Umbracle for Gala Dinner</p>
      <p className='text-sm indent-5'>
        The <strong>Umbracle</strong> would be a great venue. as it is a 4000
        square metres venue that normally functions as a nightclub, so the
        lighting, sound, and most of the infrastructure for the catering, as
        well as the access control, would already be covered. This is the reason
        why we have chosen this venue for the After Party, rather than the Gala
        Dinner
      </p>
      <ul className='p-2'>
        <li className='bg-med_purple text-med_white p-2 rounded-lg my-2 text-sm hover:opacity-90'>
          ... the main weakness would be the back up option, -{' '}
          <strong>Mya</strong>, Mya is below the <strong> Umbracle</strong>
        </li>
      </ul>
    </div>
  )
}

export const VenueCard = ({ image, index }: Props) => {
  return (
    <Card
      className={`flex flex-col border border-med_sand shadow-xl h-[800px] w-96 rounded-xl hover:transform hover:-translate-y-4 hover:transition-all hover:duration-300 ${
        index !== 0 && '-ml-60'
      }`}
    >
      <CardMedia className='h-[200px] overflow-hidden'>
        <img
          src={image.src}
          alt={image.alt}
          className='object-fit hover:scale-105 transition-transform'
        />
      </CardMedia>
      <CardContent>
        {image.alt === 'aldamar'
          ? Aldamar_text()
          : image.alt === 'xamandreu'
          ? Xamandreu_text()
          : image.alt === 'cartuja'
          ? Cartuja_text()
          : image.alt === 'vallesa'
          ? Vallesa_text()
          : image.alt === 'calle_mayor'
          ? CalleMayor_text()
          : image.alt === 'arquerias'
          ? Arquerias_text()
          : image.alt === 'umbracle'
          ? Umbracle_text()
          : null}
      </CardContent>
    </Card>
  )
}
