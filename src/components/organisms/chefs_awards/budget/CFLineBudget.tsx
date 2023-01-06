import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid/models'

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Venue',
    col2: 'Dry Hire of Campo Anibal, min. 250 attendees, included in the food',
    col3: 1,
    col4: '€0.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 2,
    col1: 'Transportation',
    col2: '50 Seater Buses, 6hours at disposal, from 6pm-11pm',
    col3: 5,
    col4: '€440.00',
    col5: '€2200.00',
    col6: '€2420.00'
  },
  {
    id: 3,
    col1: 'Transportation',
    col2: 'Eng. speaking hostess, 6hours',
    col3: 5,
    col4: '€196.00',
    col5: '€980.00',
    col6: '€1,185.80'
  },
  {
    id: 4,
    col1: 'Staffing',
    col2: 'Ladies dressed in traditional costumes to welcome guests',
    col3: 2,
    col4: '€280',
    col5: '€560',
    col6: '€677.2'
  },
  {
    id: 5,
    col1: 'Activity',
    col2: 'Photo Call with Valencian Ladies',
    col3: 1,
    col4: '€775.50',
    col5: '€775.50',
    col6: '€938.36'
  },
  {
    id: 6,
    col1: 'Gifts',
    col2: 'Optional - Traditional Valencian scarf for each guest',
    col3: 0,
    col4: '€2.23',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 7,
    col1: 'Gifts',
    col2: 'Optional customisation of the scarf with the logo',
    col3: 0,
    col4: '€12',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 8,
    col1: 'Gifts',
    col2: 'Personalized with 50 Restaurant logo - Valencian Black t-shirt and scarf',
    col3: 250,
    col4: '€28',
    col5: '€7000.00',
    col6: '€8470.00'
  },
  {
    id: 9,
    col1: 'Gifts',
    col2: 'Optional small Paniculata bouquet',
    col3: 250,
    col4: '€8.00',
    col5: '€2000.00',
    col6: '€2420.00'
  },
  {
    id: 10,
    col1: 'Decorations',
    col2: 'Red carpet main entrance - Cocktail area',
    col3: 1,
    col4: '€1250.00',
    col5: '€1250.00',
    col6: '€1512.50'
  },
  {
    id: 11,
    col1: 'Food & Beverage',
    col2: 'Welcome drink - 1 hour service w / snacks, from',
    col3: 250,
    col4: '€11.50',
    col5: '€2,875',
    col6: '3,162.50'
  },
  {
    id: 12,
    col1: 'Entertainment',
    col2: 'Mascletà - Valencian Fireworks, from',
    col3: 1,
    col4: '€2,500.00',
    col5: '€2,500.00',
    col6: '€3,025.00'
  },
  {
    id: 13,
    col1: 'Food & Beverage',
    col2: 'Standing Buffet, 20 canapes + 1 individual dish w/ drinks 7pm-9pm, from',
    col3: 250,
    col4: '€47.50',
    col5: '€1,1875.00',
    col6: '€1,3062.50'
  },
  {
    id: 14,
    col1: 'Food & Beverage',
    col2: 'Vieiras and Razor clams Station',
    col3: 250,
    col4: '€3.75',
    col5: '€937.50',
    col6: '€1,031.25'
  },
  {
    id: 15,
    col1: 'Food & Beverage',
    col2: 'Premium cheese Station',
    col3: 250,
    col4: '€4.75',
    col5: '€1,187.50',
    col6: '€1,306.25'
  },
  {
    id: 16,
    col1: 'Food & Beverage',
    col2: 'Huevos rotos - scrambled eggs Station',
    col3: 250,
    col4: 2.75,
    col5: 687.5,
    col6: 756.25
  },
  {
    id: 17,
    col1: 'Food & Beverage',
    col2: 'Iberian Ham Carving Station - 2 Hams & 1 Ham Slicer',
    col3: 1,
    col4: 940,
    col5: 940,
    col6: 1034
  },
  {
    id: 18,
    col1: 'Food & Beverage',
    col2: 'Chips and Croquettes Station',
    col3: 250,
    col4: 2.75,
    col5: 687.5,
    col6: 756.25
  },
  {
    id: 19,
    col1: 'Food & Beverage',
    col2: 'Oysters Guillerdeau Station',
    col3: 250,
    col4: 5.75,
    col5: 1437.5,
    col6: 1581.25
  },
  {
    id: 20,
    col1: 'Food & Beverage',
    col2: 'Paella Show Cooking Station',
    col3: 1,
    col4: 325,
    col5: 325,
    col6: 357.5
  },
  {
    id: 21,
    col1: 'Entertainment',
    col2: 'Pasacalles - Valencian Folkloric Parade with Band',
    col3: 1,
    col4: '€3000.00',
    col5: '€3000.00',
    col6: '€3630.00'
  },
  {
    id: 22,
    col1: 'Entertainment',
    col2: 'Moors Parade',
    col3: 1,
    col4: '€1800.00',
    col5: '€1800.00',
    col6: '€2178.00'
  },
  {
    id: 23,
    col1: 'Entertainment',
    col2: 'Moors and Christians Parade with Music Band',
    col3: 1,
    col4: '€3500.00',
    col5: '€3500.00',
    col6: '€0.00'
  },
  {
    id: 24,
    col1: 'Entertainment',
    col2: 'Guitarist Background music during the standing dinner to be placed in the pool area next to dinner standing area',
    col3: 1,
    col4: '€750.00',
    col5: '€750.00',
    col6: '€907.50'
  },
  {
    id: 25,
    col1: 'Entertainment',
    col2: 'Fireworks',
    col3: 1,
    col4: '€3,500.00',
    col5: '€3,500.00',
    col6: '€4,235.00'
  },
  {
    id: 26,
    col1: 'Entertainment',
    col2: 'Falla Paper Mache Monument from',
    col3: 1,
    col4: '€2,500.00',
    col5: '€2,500.00',
    col6: '€3,025.00'
  },
  {
    id: 27,
    col1: 'Food & Beverage',
    col2: 'Open Bar - 2 hours service, from',
    col3: 250,
    col4: '€12.00',
    col5: '€3,000.00',
    col6: '€3,300.00'
  },
  {
    id: 28,
    col1: 'Food & Beverage',
    col2: 'Cocktail Bar station, from',
    col3: 250,
    col4: '€6.00',
    col5: '€1500.00',
    col6: '€1650.00'
  },
  {
    id: 29,
    col1: 'Entertainment',
    col2: 'DJ - 2 hours service, from',
    col3: 1,
    col4: '€800.00',
    col5: '€800.00',
    col6: '€968.00'
  },
  {
    id: 30,
    col1: 'AAVV',
    col2: 'Sound and lighting for all dinner in the venue',

    col3: 1,
    col4: '€7488.09',
    col5: '€7488.09',
    col6: '€9,060.59'
  },
  {
    id: 31,
    col1: 'AAVV',
    col2: 'Photographer and Videographer',
    col3: 1,
    col4: '€700.00',
    col5: '€700.00',
    col6: '€847.00'
  },
  {
    id: 32,
    col1: 'Gifts',
    col2: '(Optional) Small Orange Tree',
    col3: 0,
    col4: '€25.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 33,
    col1: 'Gifts',
    col2: '(Optional) Small Olive Tree',
    col3: 0,
    col4: '€11.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 34,
    col1: 'Gifts',
    col2: '(Optional) Small Olive Tree and Customised Olive Oil',
    col3: 0,
    col4: '€18.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 35,
    col1: 'Gifts',
    col2: '(Optional) Rice Licour Bottle',
    col3: 0,
    col4: '€4.50',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 36,
    col1: 'Gifts',
    col2: '(Optional) Orange Licour Bottle',
    col3: 0,
    col4: '€4.00',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 37,
    col1: 'Gifts',
    col2: '(Optional) Bag of Rice',
    col3: 0,
    col4: '€4.80',
    col5: '€0.00',
    col6: '€0.00'
  },
  {
    id: 38,
    col1: 'Miscellaneous',
    col2: 'Extra decor and miscellaneous',
    col3: 1,
    col4: '€4000.00',
    col5: '€4000.00',
    col6: '€4840.00'
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

export const CFLineBudget = () => {
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
