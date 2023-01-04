import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'

interface Image {
  src: string
  alt: string
}

type Props = {
  images: Image[]
  event?: string
}

export const PhotosLayout = ({ images, event }: Props) => {
  return (
    <Box sx={{ width: 'full', minHeight: 829 }} className='cursor-pointer'>
      <Masonry columns={2} spacing={1}>
        <div className='overflow-hidden'>
          <img
            src={images[0].src}
            alt={images[0].alt}
            loading='lazy'
            className='hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src={images[1].src}
            alt={images[1].alt}
            loading='lazy'
            className='hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src={images[2].src}
            alt={images[2].alt}
            loading='lazy'
            className='hover:scale-110 transition-all duration-300 object-fit'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src={images[3].src}
            alt={images[3].alt}
            loading='lazy'
            className='hover:scale-110 transition-all duration-300 object-fit'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src={images[4].src}
            alt={images[4].alt}
            loading='lazy'
            className='hover:scale-110 transition-all duration-300 object-fit'
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src={images[5].src}
            alt={images[5].alt}
            loading='lazy'
            className={`hover:scale-110 transition-all duration-300 object-fit ${
              event === 'CF' ? 'h-[365px]' : null
            }`}
          />
        </div>
        <div className='overflow-hidden'>
          <img
            src={images[6].src}
            alt={images[6].alt}
            loading='lazy'
            className='hover:scale-110 transition-all duration-300 object-fit'
          />
        </div>

        {images[7] && (
          <div className='overflow-hidden'>
            <img
              src={images[7].src}
              alt={images[7].alt}
              loading='lazy'
              className='object-cover h-[242px] hover:scale-110 transition-all duration-300'
            />
          </div>
        )}
      </Masonry>
    </Box>
  )
}
