import { TableCell, TableFooter, TableRow } from '@mui/material'
import accounting from 'accounting'
import {
  tableDataCF,
  tableDataDA
} from '../../../screens/detail/budget/table_data'

type Props = {
  event: string
}

export const BudgetFooter = ({ event }: Props) => {
  const tableData = event === 'cf' ? tableDataCF : tableDataDA
  const bg_color = event === 'cf' ? 'bg-med_sand' : 'bg-med_blue'

  return (
    <TableFooter>
      <TableRow>
        <TableCell
          colSpan={4}
          className={`${bg_color} !text-right !font-bold !bg-opacity-50 !text-lg `}
        >
          TOTAL
        </TableCell>
        <TableCell
          className={`${bg_color} !text-right !font-bold !bg-opacity-50 !text-lg `}
        >
          {accounting.formatMoney(
            tableData.reduce((acc, row) => acc + row.total, 0),
            '€',
            0,
            ',',
            '.'
          )}
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}
