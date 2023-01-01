import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid/models'

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Venue',
    col2: 'Hire cost of Hemisferic',
    col3: 1,
    col4: '€6,000.00',
    col5: '€6,000.00',
    col6: '€7,260.00'
  },
  {
    id: 2,
    col1: 'Venue',
    col2: 'Hire cost of North Lake',
    col3: 6,
    col4: '€2,000.00',
    col5: '€2,000.00',
    col6: '€2,420.00'
  },
  {
    id: 3,
    col1: 'Venue',
    col2: 'Perimetral Ring Hemisferic - Set up June 18th, 19th, 21st derig',
    col3: 3,
    col4: '€4,000.00',
    col5: '€12,000.00',
    col6: '€14,520.00'
  },
  {
    id: 4,
    col1: 'Venue',
    col2: 'North Lake - Set up June 18th, 19th, 21st derig',
    col3: 3,
    col4: '€1,000',
    col5: '€3,000',
    col6: '€3,630.00'
  },
  {
    id: 5,
    col1: 'Venue',
    col2: 'Platform on the lake, extra space for Standing Dinner',
    col3: 1,
    col4: '€0.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 6,
    col1: 'Decorations',
    col2: 'Red Carpet Lagoon to Entrance',
    col3: 1,
    col4: '€1,900.00',
    col5: '€1,900.00',
    col6: '€2,299.00'
  },
  {
    id: 7,
    col1: 'Decorations',
    col2: 'Photo Call',
    col3: 1,
    col4: '€0.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 8,
    col1: 'Decorations',
    col2: 'Registration Desk, 10 tables, 20 bar stools',
    col3: 1,
    col4: '€2,308.00',
    col5: '€2,308.00',
    col6: '€2,792.00'
  },
  {
    id: 9,
    col1: 'Staffing',
    col2: 'Manning of the Registration Desk',
    col3: 12,
    col4: '€196.00',
    col5: '€2,352.00',
    col6: '€2,845.92'
  },
  {
    id: 10,
    col1: 'Food & Beverage',
    col2: 'Standing Dinner, from',
    col3: 1200,
    col4: '€49.29',
    col5: '€59,148.00',
    col6: '65,062.80'
  },
  {
    id: 11,
    col1: 'Food & Beverage',
    col2: 'Sushi Station, from',
    col3: 1200,
    col4: '€10.35',
    col5: '€12,420.00',
    col6: '€13,662.00'
  },
  {
    id: 12,
    col1: 'Food & Beverage',
    col2: 'Salmon Slicer Station, from',
    col3: 12,
    col4: '€517.50',
    col5: '€6,210.00',
    col6: '€6,831.00'
  },
  {
    id: 13,
    col1: 'Food & Beverage',
    col2: 'Nitro Show, from',
    col3: 1200,
    col4: '€8.05',
    col5: '€9,660.00',
    col6: '€10,626.00'
  },
  {
    id: 14,
    col1: 'Food & Beverage',
    col2: 'Probetas & Pipetas Station, from',
    col3: 1200,
    col4: '€10.00',
    col5: '€12,000.00',
    col6: '€13,200.00'
  },
  {
    id: 15,
    col1: 'Food & Beverage',
    col2: '(Optional) Molecular Gastronomy Station, from',
    col3: 0,
    col4: '€24.00',
    col5: '€0.00',
    col6: '€756.25'
  },
  {
    id: 16,
    col1: 'Food & Beverage',
    col2: 'Caterer Tent and miscellaneous equipment',
    col3: 1,
    col4: '€5,200.00',
    col5: '€5,200.00',
    col6: '€6,292.00'
  },
  {
    id: 17,
    col1: 'Venue',
    col2: 'Cleaning of the venue',
    col3: 1,
    col4: 307.22,
    col5: 307.22,
    col6: 371.74
  },
  {
    id: 18,
    col1: 'Venue',
    col2: 'Security',
    col3: 1,
    col4: 0,
    col5: 0,
    col6: 0
  },
  {
    id: 19,
    col1: 'Venue',
    col2: 'Hire Cost Auditori - Palau de les Arts Reina Sofia',
    col3: 1,
    col4: '€20,000.00',
    col5: '€20,000.00',
    col6: '€24,200.00'
  },
  {
    id: 20,
    col1: 'Venue',
    col2: 'Hire Cost Auditori - Set Up',
    col3: 1,
    col4: 0,
    col5: 0,
    col6: 0
  },
  {
    id: 21,
    col1: 'AAVV',
    col2: 'Screen',
    col3: 1,
    col4: '€0.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 22,
    col1: 'AAVV',
    col2: 'Sound & Light at Auditori',
    col3: 1,
    col4: '€0.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 23,
    col1: 'AAVV',
    col2: 'Master of Ceremony, expenses not included',
    col3: 1,
    col4: '€12,000.00',
    col5: '€12,000.00',
    col6: '€14,520.00'
  },
  {
    id: 24,
    col1: 'AAVV',
    col2: 'Live Music Band, Awards Ceremony',
    col3: 1,
    col4: '€18,000.00',
    col5: '€18,000.00',
    col6: '€21,780.00'
  },
  {
    id: 25,
    col1: 'Staffing',
    col2: 'Event Coordinators',
    col3: 8,
    col4: '€400.00',
    col5: '€3,200.00',
    col6: '€3,872.00'
  },
  {
    id: 26,
    col1: 'Venue',
    col2: 'Umbracle - package',
    col3: 1,
    col4: '€40,050.00',
    col5: '€40,050.00',
    col6: '€48,460.00'
  }
]

const columns: GridColDef[] = [
  {
    field: 'col1',
    headerName: 'Category',
    width: 150,
    renderCell: (params) => {
      let style = ''
      switch (params.row.col1) {
        case 'Venue':
          style =
            'bg-med_orange text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'Transportation':
          style =
            'bg-med_sand text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'Staffing':
          style =
            'bg-med_green text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'Entertainment':
          style =
            'bg-med_purple text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'AAVV':
          style =
            'bg-med_brown text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'Food & Beverage':
          style =
            'bg-med_red text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'Decorations':
          style =
            'bg-med_blue text-med_white rounded-2xl p-3 text-center font-bold'
          break
        case 'Gifts':
          style =
            'bg-med_blue_light text-med_white rounded-2xl p-3 text-center font-bold'
          break
        default:
          style =
            'bg-med_purple text-med_white rounded-2xl p-3 text-center font-bold'
      }
      return <div className={style}>{params.row.col1}</div>
    }
  },
  { field: 'col2', headerName: 'Description', flex: 1 },
  {
    field: 'col3',
    headerName: 'Units',
    type: 'number',
    width: 60
  },
  {
    field: 'col4',
    headerName: 'Unit Price',
    type: 'number',
    width: 100,
    headerAlign: 'left'
  },
  {
    field: 'col5',
    headerName: 'Total without taxes',
    type: 'number',
    width: 180
  },
  {
    field: 'col6',
    headerName: 'Total with taxes',
    type: 'number',
    width: 150,
    cellClassName: 'total_cost'
  }
]

export const ADLineBudget = () => {
  return (
    <>
      <Typography variant='h6' className='text-center font-bold'>
        Below you can find the budget for the event, broken down Line by line
      </Typography>
      <Box
        className='p-2'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            backgroundColor: 'white'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .total_cost': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold'
          },

          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#5d6e28',
            opacity: '0.8 !important',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          },
          '& .MuiDataGrid-toolbarContainer, .MuiButton-text': {
            backgroundColor: '#d4ad44 !important',
            padding: '0.5rem 1rem',
            opacity: '0.7'
          },
          '& .MuiDataGrid-toolbarContainer > button': {
            marginRight: '0.5rem',
            border: 'green 1px solid'
          }
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          autoHeight
        />
      </Box>
    </>
  )
}
