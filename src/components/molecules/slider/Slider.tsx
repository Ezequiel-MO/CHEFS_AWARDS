import { useState } from 'react'
import { Icon } from '@iconify/react'

type Pic = {
  src: string
  alt: string
  desc: string
}

type SliderProps = {
  pics: Pic[]
  event: 'cf' | 'da'
}

export const Slider = ({ pics, event }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const prevPic = () => {
    const isFirstPic = currentIndex === 0
    const newIndex = isFirstPic ? pics.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextPic = () => {
    const isLastPic = currentIndex === pics.length - 1
    const newIndex = isLastPic ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const desc_text_color = event === 'cf' ? 'text-med_green' : 'text-med_blue'
  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group overflow-hidden object-fit'>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-med_white bg-opacity-10 text-center text-2xl ${desc_text_color} font-bold`}
      >
        <p className='pt-5'>{pics[currentIndex].desc}</p>
      </div>
      <div className='w-full h-full rounded-2xl bg-center bg-contain duration-500'>
        <img src={pics[currentIndex].src} alt={pics[currentIndex].alt} />
      </div>
      <div
        onClick={prevPic}
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-med_white  bg-opacity-40 cursor-pointer'
      >
        <Icon icon='mdi:chevron-left-box-outline' width={50} color='#070c32' />
      </div>
      <div
        onClick={nextPic}
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-med_white bg-opacity-40 cursor-pointer'
      >
        <Icon icon='mdi:chevron-right-box-outline' width={50} color='#070c32' />
      </div>
    </div>
  )
}
