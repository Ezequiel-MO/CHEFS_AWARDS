import { createBrowserRouter } from 'react-router-dom'
import { PageLayout } from '../components/layouts'
import { AwardsDinner, ChefFeast, MainSection } from '../screens'
import { ErrorPage } from './error_page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { index: true, element: <MainSection /> },
      { path: 'chef_feast', element: <ChefFeast /> },
      { path: 'awards_dinner', element: <AwardsDinner /> }
    ],
    errorElement: <ErrorPage />
  }
])
