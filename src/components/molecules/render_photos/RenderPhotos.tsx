import { useState } from 'react'
import { Modal } from './Modal'

export type Image = {
  src: string
  alt: string
}

interface Props {
  images: Image[]
}

export const RenderPhotos = ({ images }: Props) => {
  const [clickedImg, setClickedImg] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (item: any, index: number) => {
    setClickedImg(item)
    setCurrentIndex(index)
  }

  const handelRotationRight = () => {
    const totalLength = images.length
    if (currentIndex === totalLength - 1) {
      setCurrentIndex(0)
      const newUrl = images[0].src
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex + 1
    const newUrl = images.filter((item) => images.indexOf(item) === newIndex)
    const newItem = newUrl[0].src
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  const handelRotationLeft = () => {
    const totalLength = images.length
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1)
      const newUrl = images[totalLength - 1].src
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex - 1
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].src
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  return (
    <>
      <div className='m-auto w-full mt-5 '>
        <div className='grid grid-cols-4 gap-2'>
          {images.map((item, index) => (
            <div
              className='m-2 p-2 scale-125 hover:scale-150 ease-in duration-200 hover:z-50'
              key={index}
            >
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => handleClick(item.src, index)}
                className='block cursor-pointer w-36 h-36 border-solid hover:border-orange-50 border-2 rounded-md object-cover'
              />
            </div>
          ))}
        </div>

        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </>
  )
}
