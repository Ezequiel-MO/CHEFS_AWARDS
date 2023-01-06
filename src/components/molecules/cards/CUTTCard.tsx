import { useState } from 'react'
import Modal from '../modal/Modal'

export const CUTTCard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className='cursor-pointer max-w-sm h-[2000px] border-2 px-2 py-5 rounded-lg overflow-hidden flex flex-col'
      >
        <p className='indent-5'>
          For this project, <strong>CUTT/events</strong> will partner with{' '}
          <strong>SEE Network</strong> Whilst <strong>CUTT/events</strong> will
          lead the project, provide the creativity, tech and production skills,
          SEE Network/Joke adds a vast amount of experience in the planning and
          organization of large scale events.Both companies have partnered on a
          number of really succesful projects in the past
        </p>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  )
}
