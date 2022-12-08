import { FC } from 'react'

interface Props {
  avatar: string
  name: string
  role: string
  labels: string[]
  description: string
  email: string
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
    <div>
      <img src={avatar} alt='avatar' />
      <h1>{name}</h1>
      <h2>{role}</h2>
      <h3>{labels[0]}</h3>
      <h3>{description}</h3>
      <h3>{email}</h3>
      <h3>{more}</h3>
    </div>
  )
}
