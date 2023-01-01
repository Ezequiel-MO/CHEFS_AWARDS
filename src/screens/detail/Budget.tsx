import { useRef } from 'react'
import { Icon } from '@iconify/react'
import ReactToPrint from 'react-to-print'
import { LineBudget } from './LineBudget'
import { Link } from 'react-router-dom'

type Props = {
  event: string
}

export const Budget = ({ event }: Props) => {
  const slug = event === 'da' ? 'awards_dinner' : 'chef_feast'
  const componentRef = useRef()
  return (
    <div>
      <div className='text-center my-2'>
        <Link
          to={`/${slug}/budget`}
          className='hover:underline italic my-2 cursor-pointer font-bold text-med_sand'
        >
          Please click here to go to a line by line breakdown of the budget
        </Link>
      </div>
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
