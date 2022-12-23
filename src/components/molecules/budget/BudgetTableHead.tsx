import { TableCell, TableHead, TableRow } from '@mui/material'

export const BudgetTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          width='10%'
          className='!font-bold !bg-med_green !bg-opacity-80 !text-med_white'
        />
        <TableCell
          width='20%'
          className='!font-bold !uppercase !bg-med_green !bg-opacity-80 !text-med_white'
        >
          Category
        </TableCell>
        <TableCell
          width='35%'
          className='!font-bold !uppercase !bg-med_green !bg-opacity-80 !text-med_white'
        >
          Service
        </TableCell>
        <TableCell
          width='5%'
          className='!font-bold !uppercase !bg-med_green !bg-opacity-80 !text-med_white'
        >
          Pax/units
        </TableCell>
        <TableCell
          width='15%'
          className='!font-bold !uppercase !bg-med_green !bg-opacity-80 !text-med_white'
        >
          Unit cost w/VAT
        </TableCell>
        <TableCell
          width='15%'
          className='!font-bold !uppercase !bg-med_green !bg-opacity-80 !text-med_white'
        >
          Total cost w/VAT
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
