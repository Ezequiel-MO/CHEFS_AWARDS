import { Table } from '@mui/material'
import { forwardRef } from 'react'
import {
  BudgetBody,
  BudgetFooter,
  BudgetTableHead
} from '../../components/molecules'
import '../../styles/budget.css'

type Props = {
  event: string
}

export const LineBudget = forwardRef(({ event }: Props, ref) => {
  return (
    <div ref={ref as any} className='budget'>
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
    </div>
  )
})
