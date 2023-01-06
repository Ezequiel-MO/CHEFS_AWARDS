import { FC } from 'react'
import { Avatar } from '@mui/material'
import { Chip } from '../atoms'
import { ILabel } from '../organisms'
import { MailOutlineOutlined } from '@mui/icons-material'

interface Props {
  avatar: string
  name: string
  role: string
  labels: ILabel[]
  description?: string
  email?: string
  more?: string
}

export const TeamMemberCard: FC<Props> = ({
  avatar,
  name,
  role,
  labels,
  description,
  email,
  more
}) => {
  return (
    <div className='max-w-sm border-2 px-2 py-5 rounded-lg overflow-hidden flex flex-col'>
      <div className='flex justify-center'>
        <Avatar
          alt={name}
          src={avatar}
          sx={{ width: 96, height: 96 }}
          variant='rounded'
        />
      </div>
      <div className='flex flex-col items-center justify-center mt-2'>
        <p className='font-bold text-lg'>{name}</p>
        <p className='italic text-center my-2'>{role}</p>
      </div>
      <div className='flex flex-row justify-center'>
        {labels.map((label, index) => (
          <div key={index}>
            <Chip label={label.label} color={label.color} />
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center mt-2'>
        <p className='italic text-lg text-center my-2'>{description}</p>
        <h3>
          <span className='mr-2'>
            <MailOutlineOutlined />
          </span>
          {email}
        </h3>
      </div>

      {/* <h3>{more}</h3> */}
    </div>
  )
}
