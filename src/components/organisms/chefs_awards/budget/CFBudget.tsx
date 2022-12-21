import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid/models'

const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'Venue',
    col2: 'Cost of Hiring the Venue',
    col3: '€0.00',
    col4: '€0.00',
    col5: '€0.00'
  },
  {
    id: 2,
    col1: 'Food & Beverage',
    col2: 'Cocktails and Food',
    col3: '€0.00',
    col4: '€0.00',
    col5: '€0.00'
  },
  {
    id: 3,
    col1: 'Transportation',
    col2: 'Busses and Assistance',
    col3: '€0.00',
    col4: '€0.00',
    col5: '€0.00'
  },
  {
    id: 4,
    col1: 'Staffing',
    col2: 'Staff for the Event/Shows',
    col3: '€0.00',
    col4: '€0.00',
    col5: '€0.00'
  },
  {
    id: 5,
    col1: 'Entertainment',
    col2: 'Show Elements',
    col3: '€0.00',
    col4: '€0.00',
    col5: '€0.00'
  },

  {
    id: 6,
    col1: 'AAVV',
    col2: 'Equipment and AAVV Staff',
    col3: '€0.00',
    col4: '€0.00',
    col5: '€0.00'
  }
]

const columns: GridColDef[] = [
  {
    field: 'col1',
    headerName: 'Category',
    flex: 1,
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
    headerName: 'Excl. taxes',
    type: 'number',
    width: 100,
    headerAlign: 'left'
  },
  {
    field: 'col4',
    headerName: 'Tax Amount',
    type: 'number',

    width: 120,
    headerAlign: 'left'
  },
  {
    field: 'col5',
    headerName: 'Total with taxes',
    type: 'number',
    width: 150,
    cellClassName: 'total_cost'
  }
]

export const CFBudget = () => {
  return (
    <>
      <Typography variant='h6' className='text-center font-bold'>
        Below you can find the budget for the event, broken down by category
      </Typography>

      <p className='hover:underline italic my-2 text-center cursor-pointer font-bold text-med_purple'>
        Please click here to go to a line by line breakdown of the budget
      </p>
      <Box
        className='p-2'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
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
            opacity: '0.7',
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
          hideFooter
          autoHeight
        />
      </Box>
    </>
  )
}
