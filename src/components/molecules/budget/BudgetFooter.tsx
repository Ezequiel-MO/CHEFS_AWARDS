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
          colSpan={2}
          className={`${bg_color} !text-right !font-bold !bg-opacity-50 !text-lg `}
        >
          TOTAL
        </TableCell>
        <TableCell
          className={`${bg_color} !text-left !font-bold !bg-opacity-50 !text-lg `}
        >
          {accounting.formatMoney(
            tableData.reduce((acc, cur) => acc + cur.totalWithoutVAT, 0),
            '€',
            0,
            ',',
            '.'
          )}
        </TableCell>
        <TableCell
          colSpan={2}
          className={`${bg_color} !text-right !font-bold !bg-opacity-50 !text-lg `}
        ></TableCell>
      </TableRow>
    </TableFooter>
  )
}
