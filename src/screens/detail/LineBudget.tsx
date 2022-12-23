import { Table } from '@mui/material'
import {
  BudgetBody,
  BudgetFooter,
  BudgetTableHead
} from '../../components/molecules'

type Props = {
  event: string
}

export const LineBudget = ({ event }: Props) => {
  return (
    <div className='!no-scrollbar !overflow-x-auto !w-max !min-h-max'>
      <Table
        stickyHeader
        sx={{
          minWidth: 900,
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
        }}
        size='small'
        className='text-left divide-y divide-gray-700'
      >
        <BudgetTableHead event={event} />
        <BudgetBody event={event} />
        <BudgetFooter event={event} />
      </Table>
    </div>
  )
}
