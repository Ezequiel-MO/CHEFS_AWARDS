import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow
} from '@mui/material'
import { BudgetTableHead } from '../../../components/molecules'
import { tableData } from './CF_table_data'
import accounting from 'accounting'

export const CFLineBudget = () => {
  return (
    <div className='!no-scrollbar !overflow-x-auto w-max min-w-[900px] min-h-max'>
      <Table
        stickyHeader
        size='small'
        className='text-left divide-y divide-gray-700'
      >
        <BudgetTableHead />
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.service}>
              <TableCell
                width='10%'
                className=' !bg-med_white !bg-opacity-50'
              />
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
        {/* create a TableFooter component to display the sum of the total cost column */}
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={5}
              className='!text-right !font-bold !bg-med_sand !bg-opacity-50 !text-lg'
            >
              TOTAL
            </TableCell>
            <TableCell className='!font-bold !bg-med_sand !bg-opacity-50 !text-lg'>
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
      </Table>
    </div>
  )
}
