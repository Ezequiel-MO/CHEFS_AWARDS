import { createBrowserRouter } from 'react-router-dom'
import { AwardsLayout, ChefLayout, PageLayout } from '../components/layouts'
import { StrategicDetails } from '../components/organisms'
import {
  ADVenueDetails,
  AwardsDinner,
  CFVenueDetails,
  ChefFeast,
  MainSection,
  TimeLine,
  Budget
} from '../screens'
import { ErrorPage } from './error_page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { index: true, element: <MainSection /> },
      { path: 'strategic_approach', element: <StrategicDetails /> },
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
        element: <Budget event='cf' />
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
        element: <Budget event='da' />
      },
      { path: 'timeline_details', element: <TimeLine type='awards_dinner' /> }
    ],
    errorElement: <ErrorPage />
  }
])
