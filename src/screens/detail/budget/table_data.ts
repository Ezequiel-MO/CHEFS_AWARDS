export interface IBudget_data {
  category: string
  service: string
  totalWithoutVAT: number
  taxes: number
  total: number
}

export const tableDataCF: IBudget_data[] = [
  {
    category: 'Venue',
    service:
      'Hire Cost of the venue, including all the services and facilities',
    totalWithoutVAT: 0,
    taxes: 0,
    total: 0
  },
  {
    category: 'Transportation',
    service: 'All transportation costs',
    totalWithoutVAT: 3180.0,
    taxes: 425.8,
    total: 6605.8
  },
  {
    category: 'Staffing',
    service: 'Staffing, incl the Falleras',
    totalWithoutVAT: 560.0,
    taxes: 117.6,
    total: 677.6
  },
  {
    category: 'Food & Beverage',
    service: 'All food and beverage costs',
    totalWithoutVAT: 25777.5,
    taxes: 2577.75,
    total: 28355.25
  },
  {
    category: 'Entertainment',
    service: 'All entertainment costs',
    totalWithoutVAT: 18350.0,
    taxes: 3853.5,
    total: 22203.5
  },
  {
    category: 'Gifts',
    service: 'Optional gift for each guest',
    totalWithoutVAT: 9000.0,
    taxes: 1890.0,
    total: 10890.0
  },
  {
    category: 'AAVV',
    service: 'Costs for Lighting, Sound, etc',
    totalWithoutVAT: 8188.09,
    taxes: 1719.5,
    total: 9907.59
  },
  {
    category: 'Decorations',
    service: 'All decoration costs',
    totalWithoutVAT: 1250.0,
    taxes: 262.5,
    total: 1512.5
  },
  {
    category: 'Miscellaneous',
    service: 'Miscellaneous',
    totalWithoutVAT: 4000.0,
    taxes: 840.0,
    total: 4840.0
  },
  {
    category: 'Activity',
    service: 'Photographer',
    totalWithoutVAT: 775.5,
    taxes: 162.86,
    total: 938.36
  }
]

export const tableDataDA: IBudget_data[] = [
  {
    category: 'Venue',
    service:
      'Hire Cost of the venue, including all the services and facilities',
    totalWithoutVAT: 46020.51,
    taxes: 9664.31,
    total: 55684.82
  },
  {
    category: 'Staffing',
    service: 'Staffing, incl manning the registration desk, etc',
    totalWithoutVAT: 2352.0,
    taxes: 493.92,
    total: 2845.92
  },
  {
    category: 'Food & Beverage',
    service: 'All food and beverage costs',
    totalWithoutVAT: 104638.0,
    taxes: 11035.8,
    total: 115673.8
  },
  {
    category: 'Entertainment',
    service: 'All entertainment costs',
    totalWithoutVAT: 59042.0,
    taxes: 12398.82,
    total: 71440.82
  },
  {
    category: 'AAVV',
    service: 'Costs for Lighting, Sound, etc',
    totalWithoutVAT: 101798.0,
    taxes: 21377.58,
    total: 123175.58
  },
  {
    category: 'Decorations',
    service: 'All decoration costs',
    totalWithoutVAT: 9529.09,
    taxes: 2001.11,
    total: 11530.2
  },
  {
    category: 'Miscellaneous',
    service: 'Miscellaneous',
    totalWithoutVAT: 19930.0,
    taxes: 4185.3,
    total: 24115.3
  }
]
