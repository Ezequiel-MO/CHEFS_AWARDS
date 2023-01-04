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
      <div className='text-center my-10'>
        <Link
          to={`/${slug}/budget`}
          className={`cursor-pointer hover:underline italic font-bold text-lg ${
            event === 'da' ? 'text-med_blue' : 'text-med_sand'
          } flex items-center justify-center`}
        >
          <Icon icon='tabler:pig-money' width={100} />
          <span className=''>Click here to see the budget line by line</span>
        </Link>
      </div>
    </div>
  )
}
