import { FC } from 'react'
import { Navbar } from '../molecules/NavBar'

interface Props {
  children: React.ReactNode
}

export const MainPageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <aside>Side Menu</aside>
      <main className='my-[80px] mx-auto max-w-[1440px] px-[30px]'>
        {children}
      </main>
      <footer>Here's a footer</footer>
    </>
  )
}
