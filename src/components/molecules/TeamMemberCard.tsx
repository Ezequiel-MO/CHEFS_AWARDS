import { Avatar, Chip } from '@mui/material'
import { FC } from 'react'

interface Props {
  avatar: string
  name: string
  role: string
  labels: string[]
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
        <p className='italic'>{role}</p>
      </div>
      <div className='flex flex-row justify-center'>
        {labels.map((label, index) => (
          <Chip key={index} label={label} className='mx-1' />
        ))}
      </div>
      <h3>{description}</h3>
      <h3>{email}</h3>
      <h3>{more}</h3>
    </div>
  )
}
