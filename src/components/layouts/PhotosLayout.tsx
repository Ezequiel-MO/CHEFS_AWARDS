import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'

interface Image {
  src: string
  alt: string
}

type Props = {
  images: Image[]
}

export const PhotosLayout = ({ images }: Props) => {
  // use tailwindcss to style the layout with a masonry grid
  return (
    <Box sx={{ width: 'full', minHeight: 829 }}>
      <Masonry columns={2} spacing={1}>
        <img src={images[0].src} alt={images[0].alt} loading='lazy' />
        <img src={images[1].src} alt={images[1].alt} loading='lazy' />
        <img
          src={images[2].src}
          alt={images[2].alt}
          loading='lazy'
          className='object-cover h-[155px]'
        />
        <img src={images[3].src} alt={images[3].alt} loading='lazy' />
        <img src={images[4].src} alt={images[4].alt} loading='lazy' />
        <img src={images[5].src} alt={images[5].alt} loading='lazy' />
        <img src={images[6].src} alt={images[6].alt} loading='lazy' />
      </Masonry>
    </Box>
  )
}
