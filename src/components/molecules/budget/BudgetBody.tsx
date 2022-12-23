import { TableBody, TableCell, TableRow } from '@mui/material'
import accounting from 'accounting'
import {
  tableDataCF,
  tableDataDA
} from '../../../screens/detail/cf_budget/CF_table_data'

type Props = {
  event: string
}

export const BudgetBody = ({ event }: Props) => {
  const data = event === 'cf' ? tableDataCF : tableDataDA
  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.service}>
          <TableCell width='10%' className=' !bg-med_white !bg-opacity-50' />
          <TableCell width='20%' className='!bg-med_white !bg-opacity-50'>
            {row.category}
          </TableCell>
          <TableCell width='35%' className='!bg-med_white !bg-opacity-50'>
            {row.service}
          </TableCell>
          <TableCell width='5%' className='!bg-med_white !bg-opacity-50'>
            {row.quantity}
          </TableCell>
          <TableCell width='15%' className='!bg-med_white !bg-opacity-50'>
            {accounting.formatMoney(row.unitPrice, '€', 0, ',', '.')}
          </TableCell>
          <TableCell width='15%' className='!bg-med_white !bg-opacity-50'>
            {accounting.formatMoney(row.total, '€', 0, ',', '.')}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
