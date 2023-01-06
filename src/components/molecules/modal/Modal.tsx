import { FC } from 'react'
import { Modal, Box } from '@mui/material'

import { Icon } from '@iconify/react'

interface IProps {
  children: React.ReactNode
  open: boolean
  handleClose: () => void
}

export const TeamModal: FC<IProps> = ({ open, handleClose, children }) => {
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
          {children}
        </Box>
      </Modal>
    </div>
  )
}
