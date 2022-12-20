type Image = {
  src: string
  alt: string
}

interface Props {
  images: Image[]
}

export const RenderPhotos = ({ images }: Props) => {
  return (
    <div>
      <div className='w-full flex justify-center'>
        {images.map((images, index) => (
          <div
            className='m-2 px-2 scale-125 hover:scale-150 ease-in duration-200 hover:z-50'
            key={index}
          >
            <img
              src={images.src}
              alt={images.alt}
              className='block cursor-pointer w-28 h-28 border-solid border-med_white hover:border-med_orange border-2 rounded-md object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
