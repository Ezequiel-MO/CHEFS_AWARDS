import { Card, CardContent, CardMedia } from '@mui/material'

interface Props {
  image: {
    src: string
    alt: string
  }
  index: number
}

export const VenueCard = ({ image, index }: Props) => {
  return (
    <Card
      className={`flex flex-col border border-med_sand shadow-xl h-[500px] w-96 rounded-xl hover:transform hover:-translate-y-4 hover:transition-all hover:duration-300 ${
        index !== 0 && '-ml-60'
      }`}
    >
      <CardMedia className='h-52 overflow-hidden'>
        <img src={image.src} alt={image.alt} className='object-contain' />
      </CardMedia>
      <CardContent>{image.alt}</CardContent>
    </Card>
  )
}
