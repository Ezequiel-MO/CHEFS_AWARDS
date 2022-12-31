import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FC } from 'react'

interface Props {
  title: string
  id: string
  backgroundColor?: string
  event?: string
  children: React.ReactNode
}

export const AccordionParagraph: FC<Props> = ({
  title,
  id,
  event,
  backgroundColor,
  children
}) => {
  return (
    <Accordion sx={{ backgroundColor: `${backgroundColor}` }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
        <Typography
          variant='h1'
          className={`${
            event === 'awards_dinner' ? 'text-med_blue' : 'text-med_green'
          } hover:text-med_purple`}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
