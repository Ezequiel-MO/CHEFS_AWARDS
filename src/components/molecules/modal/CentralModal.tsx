import { FC } from 'react'
import { Modal, Box } from '@mui/material'
import { MapWrapper } from '../../organisms'
import { Icon } from '@iconify/react'

interface IProps {
  open: boolean
  handleClose: () => void
}

export const CentralModal: FC<IProps> = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className='shadow-xl absolute top-5 left-5 right-5 bottom-5 md:left-[150px] md:right-[150px] lg:left-[250px] lg:right-250px] overflow-hidden'>
          <div
            onClick={handleClose}
            className='absolute z-50 -right-1 -top-1 cursor-pointer'
          >
            <Icon icon='ri:close-circle-line' width={50} />
          </div>
          <MapWrapper />
        </Box>
      </Modal>
    </div>
  )
}
