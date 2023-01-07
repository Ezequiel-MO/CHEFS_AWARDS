import { useState } from 'react'
import Modal from '../modal/Modal'
import CUTT_Logo from '../../../assets/logos/CUTT_logo.png'

export const CUTTCard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className=' cursor-pointer max-w-sm px-2 py-5 rounded-xl overflow-hidden border border-dashed border-1 hover:border-none hover:shadow-2xl transition-shadow'>
        <div className='flex flex-col justify-between items-center h-[360px]'>
          <div>
            <img src={CUTT_Logo} alt='CUTT Logo' />
          </div>
          <div onClick={() => setModalOpen(true)}>
            <p className='my-2 text-center'>
              <strong>CUTT/events & SEE Network</strong>
            </p>
            <p className='italic text-center'>
              A Long standing collaboration for great events
              <br />
              <span className='underline'>Click here for more...</span>
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <a
              href='https://www.cuttingedge-events.com'
              target='_blank'
              rel='noreferrer'
              className='text-center'
            >
              <p className='italic underline text-sm'>
                https://www.cuttingedge-events.com
              </p>
            </a>

            <a
              href='https://www.see-network.es/'
              target='_blank'
              rel='noreferrer'
              className='text-center'
            >
              <p className='italic underline text-sm'>
                https://www.see-network.es/
              </p>
            </a>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  )
}
