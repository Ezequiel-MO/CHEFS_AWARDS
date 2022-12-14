import { TableCell, TableHead, TableRow } from '@mui/material'

type Props = {
  event: string
}

export const BudgetTableHead = ({ event }: Props) => {
  const bg_color = event === 'cf' ? '!bg-med_green' : '!bg-med_purple'
  return (
    <TableHead>
      <TableRow>
        <TableCell
          width='20%'
          className={`!font-bold ${bg_color} !bg-opacity-70 !text-med_white`}
        >
          Category
        </TableCell>
        <TableCell
          width='45%'
          className={`!font-bold ${bg_color} !bg-opacity-70 !text-med_white`}
        >
          Service
        </TableCell>
        <TableCell
          width='5%'
          className={`!font-bold ${bg_color} !bg-opacity-70 !text-med_white`}
        >
          Total Net Of Tax
        </TableCell>
        <TableCell
          width='15%'
          className={`!font-bold ${bg_color} !bg-opacity-70 !text-med_white`}
        >
          Taxes
        </TableCell>
        <TableCell
          width='15%'
          className={`!font-bold ${
            event === 'cf' ? '!bg-med_green' : '!bg-med_purple'
          }  !bg-opacity-70 !text-med_white`}
        >
          Total cost w/VAT
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
