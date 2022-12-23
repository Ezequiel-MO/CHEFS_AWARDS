import { useRef } from 'react'
import { Icon } from '@iconify/react'
import ReactToPrint from 'react-to-print'
import { LineBudget } from './LineBudget'

type Props = {
  event: string
}

export const Budget = ({ event }: Props) => {
  const componentRef = useRef()
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className='flex flex-row items-center mb-2 py-4 hover:underline italic'>
            <span>
              <Icon
                icon='ant-design:file-pdf-twotone'
                color='#ea5933'
                width='30'
              />
            </span>
            Print the Budget to a PDF
          </button>
        )}
        content={() => componentRef.current as any}
      />
      <LineBudget event={event} ref={componentRef} />
    </div>
  )
}
