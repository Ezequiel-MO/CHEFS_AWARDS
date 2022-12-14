import { createBrowserRouter } from 'react-router-dom'
import { AwardsLayout, ChefLayout, PageLayout } from '../components/layouts'
import { TimeLine } from '../components/organisms'
import { AwardsDinner, VenueDetails, ChefFeast, MainSection } from '../screens'
import { ErrorPage } from './error_page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { index: true, element: <MainSection /> },
      { path: 'awards_dinner', element: <AwardsDinner /> }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/chef_feast',
    element: <ChefLayout />,
    children: [
      { index: true, element: <ChefFeast /> },
      { path: 'venue/:id', element: <VenueDetails /> },
      {
        path: 'timeline_details',
        element: <TimeLine type='chef_feast' />
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/awards_dinner',
    element: <AwardsLayout />,
    children: [{ index: true, element: <AwardsDinner /> }],
    errorElement: <ErrorPage />
  }
])
