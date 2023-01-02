import { createBrowserRouter } from 'react-router-dom'
import { AwardsLayout, ChefLayout, PageLayout } from '../components/layouts'
import { ADLineBudget, CFLineBudget } from '../components/organisms'
import {
  ADVenueDetails,
  AwardsDinner,
  CFVenueDetails,
  ChefFeast,
  MainSection,
  TimeLine
} from '../screens'
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
      { path: 'venue_details', element: <CFVenueDetails /> },
      {
        path: 'budget',
        element: <CFLineBudget />
      },
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
    children: [
      { index: true, element: <AwardsDinner /> },
      { path: 'venue_details', element: <ADVenueDetails /> },
      {
        path: 'budget',
        element: <ADLineBudget />
      },
      { path: 'timeline_details', element: <TimeLine type='awards_dinner' /> }
    ],
    errorElement: <ErrorPage />
  }
])
