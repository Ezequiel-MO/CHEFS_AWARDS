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
    col2: 'Hemisferic - 2 days set up & 1 day dismantle rate',
    col3: 3,
    col4: '€1,500.00',
    col5: '€4,500.00',
    col6: '€5,445.00'
  },
  {
    id: 4,
    col1: 'Venue',
    col2: 'North Lake - Set up June 18th, 19th, 21st derig',
    col3: 3,
    col4: '€500,00',
    col5: '€1,500.00',
    col6: '€1,815.00'
  },
  {
    id: 5,
    col1: 'AAVV',
    col2: 'Platform North lake',
    col3: 1,
    col4: '€66,650.00',
    col5: '€66,650.00',
    col6: '€80,646.50'
  },
  {
    id: 6,
    col1: 'Venue',
    col2: 'Cleaning from',
    col3: 1,
    col4: '€307.22',
    col5: '€307.22',
    col6: '€371.74'
  },
  {
    id: 7,
    col1: 'Venue',
    col2: 'Security and access control from',
    col3: 1,
    col4: '€906.07',
    col5: '€906.07',
    col6: '€1,096.34'
  },
  {
    id: 8,
    col1: 'Decorations',
    col2: 'Red Carpet Lagoon to Entrance',
    col3: 1,
    col4: '€2,500.00',
    col5: '€2,500.00',
    col6: '€3,025.00'
  },
  {
    id: 9,
    col1: 'Decorations',
    col2: 'Photocall both sides',
    col3: 1,
    col4: '€1,800.00',
    col5: '€1,800.00',
    col6: '€2,178.00'
  },
  {
    id: 10,
    col1: 'Decorations',
    col2: 'Optional - Photocall retroprojection',
    col3: 1,
    col4: '€3,8081.84',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 11,
    col1: 'Decorations',
    col2: 'Registration Desk, 10 tables, 20 bar stools',
    col3: 1,
    col4: '€1,729.09',
    col5: '€1,729.09',
    col6: '€2,092.20'
  },
  {
    id: 12,
    col1: 'Decorations',
    col2: 'Optional: Registration Desk, 10 tables, 20 bar stools',
    col3: 1,
    col4: '€2,436.34',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 13,
    col1: 'Decorations',
    col2: 'Tents for registration area',
    col3: 1,
    col4: '€3,500.00',
    col5: '€3,500.00',
    col6: '€4,235.00'
  },
  {
    id: 14,
    col1: 'Staffing',
    col2: 'Manning of the Registration Desk',
    col3: 12,
    col4: '€196.00',
    col5: '€2,352.00',
    col6: '€2,845.92'
  },
  {
    id: 15,
    col1: 'Food & Beverage',
    col2: 'Standing Dinner, from',
    col3: 1200,
    col4: '€49.29',
    col5: '€59,148.00',
    col6: '65,062.80'
  },
  {
    id: 16,
    col1: 'Food & Beverage',
    col2: 'Sushi Station, from',
    col3: 1200,
    col4: '€10.35',
    col5: '€12,420.00',
    col6: '€13,662.00'
  },
  {
    id: 17,
    col1: 'Food & Beverage',
    col2: 'Salmon Slicer Station, from',
    col3: 12,
    col4: '€517.50',
    col5: '€6,210.00',
    col6: '€6,831.00'
  },
  {
    id: 18,
    col1: 'Food & Beverage',
    col2: 'Nitro Show, from',
    col3: 1200,
    col4: '€8.05',
    col5: '€9,660.00',
    col6: '€10,626.00'
  },
  {
    id: 19,
    col1: 'Food & Beverage',
    col2: 'Probetas & Pipetas Station, from',
    col3: 1200,
    col4: '€10.00',
    col5: '€12,000.00',
    col6: '€13,200.00'
  },
  {
    id: 20,
    col1: 'Food & Beverage',
    col2: '(Optional) Molecular Gastronomy Station, from',
    col3: 0,
    col4: '€24.00',
    col5: '€0.00',
    col6: '€756.25'
  },
  {
    id: 21,
    col1: 'Food & Beverage',
    col2: 'Caterer Tent and miscellaneous equipment',
    col3: 1,
    col4: '€5,200.00',
    col5: '€5,200.00',
    col6: '€6,292.00'
  },
  {
    id: 22,
    col1: 'Entertainment',
    col2: 'Gigant Holograma from ',
    col3: 1,
    col4: '€5,179.00',
    col5: '€5,179.00',
    col6: '€6,266.59'
  },
  {
    id: 23,
    col1: 'Entertainment',
    col2: 'Brisas for welcome the guests from ',
    col3: 1,
    col4: '€2,320.00',
    col5: '€2,320.00',
    col6: '€2,807.20'
  },
  {
    id: 24,
    col1: 'Entertainment',
    col2: 'Led Robot for welcome the guests from ',
    col3: 1,
    col4: '€800.00',
    col5: '€800.00',
    col6: '€968.20'
  },
  {
    id: 25,
    col1: 'Entertainment',
    col2: 'Electric  Violinist 1 hour show  from ',
    col3: 1,
    col4: '€1,573.00',
    col5: '€1,573.00',
    col6: '€1,903.33'
  },
  {
    id: 26,
    col1: 'Entertainment',
    col2: 'Optional: Saxo live  1 hour show  from  ',
    col3: 1,
    col4: '€1,573.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 27,
    col1: 'Entertainment',
    col2: 'DJ - 2 hours show maximum  from  ',
    col3: 1,
    col4: '€950.00',
    col5: '€950.00',
    col6: '€1,149.50'
  },
  {
    id: 28,
    col1: 'Entertainment',
    col2: ' Akuris show they walk to Palau de Les Arts from  ',
    col3: 1,
    col4: '€13,520.00',
    col5: '€13,520.00',
    col6: '€16,359.20'
  },
  {
    id: 29,
    col1: 'Venue',
    col2: 'Cleaning Auditori - Palau de Les Arts ',
    col3: 1,
    col4: '€307.22',
    col5: '€307.22',
    col6: '€371.74'
  },
  {
    id: 30,
    col1: 'Venue',
    col2: 'Security - control access - Palau de Les Arts',
    col3: 1,
    col4: '€500.00',
    col5: '€500.00',
    col6: '€605.00'
  },
  {
    id: 31,
    col1: 'Venue',
    col2: 'Hire Cost Auditori - Palau de Les Arts Reina Sofia',
    col3: 1,
    col4: '€20,000.00',
    col5: '€20,000.00',
    col6: '€24,200.00'
  },
  {
    id: 32,
    col1: 'Venue',
    col2: 'Hire Cost Auditori - Set Up',
    col3: 1,
    col4: '€10,000.00',
    col5: '€10,000.00',
    col6: '€12,100.00'
  },
  {
    id: 33,
    col1: 'AAVV',
    col2: 'Screen, sound and lighting in Auditori',
    col3: 1,
    col4: '€34,448.00',
    col5: '€34,448.00',
    col6: '€41,682.08'
  },
  {
    id: 34,
    col1: 'Entertainment',
    col2: 'Master of Ceremony, expenses not included',
    col3: 1,
    col4: '€12,000.00',
    col5: '€12,000.00',
    col6: '€14,520.00'
  },
  {
    id: 35,
    col1: 'Entertainment',
    col2: 'Optional Master of Ceremony, expenses not included',
    col3: 0,
    col4: '€2,500.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 36,
    col1: 'Entertainment',
    col2: 'Live Music Band, Awards Ceremony',
    col3: 1,
    col4: '€18,000.00',
    col5: '€18,000.00',
    col6: '€21,780.00'
  },
  {
    id: 37,
    col1: 'Entertainment',
    col2: 'Dance with mapping "Welcome" to Auditori',
    col3: 1,
    col4: '€4,700.00',
    col5: '€4,700.00',
    col6: '€5,687.00'
  },
  {
    id: 38,
    col1: 'Entertainment',
    col2: 'Optional - Naturama show for "Welcome" to Auditori',
    col3: 1,
    col4: '€5,815.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 39,
    col1: 'AAVV',
    col2: 'Photographer and Videographer',
    col3: 1,
    col4: '€700.00',
    col5: '€700.00',
    col6: '€847.00'
  },
  {
    id: 40,
    col1: 'Miscellaneous',
    col2: 'Power generator for extra power',
    col3: 1,
    col4: '€12,930.00',
    col5: '€12,930.00',
    col6: '€15,645.30'
  },
  {
    id: 41,
    col1: 'Miscellaneous',
    col2: 'Extra decor and Miscellaneous',
    col3: 1,
    col4: '€7,000.00',
    col5: '€7,000.00',
    col6: '€8,740.00'
  },
  {
    id: 42,
    col1: 'Venue',
    col2: 'Umbracle for after party from',
    col3: 0,
    col4: '€40,050.00',
    col5: '€0.00',
    col6: '€0.00'
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
            backgroundColor: '#28a7b6',
            opacity: '0.8 !important',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          },
          '& .MuiDataGrid-toolbarContainer, .MuiButton-text': {
            backgroundColor: '#8cd4d3 !important',
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
