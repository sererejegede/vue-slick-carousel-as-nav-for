import groupWith from 'ramda/src/groupWith'
import groupBy from 'ramda/src/groupBy'

const availability = [
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    duration: 2,
    price: 284.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    duration: 5,
    price: 679.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    duration: 6,
    price: 761.89,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    duration: 7,
    price: 847.85,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    duration: 8,
    price: 924.81,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    duration: 9,
    price: 965.62,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 12,
    price: 1336.18,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 13,
    price: 1421.24,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 14,
    price: 1507.3,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 15,
    price: 1600.36,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 16,
    price: 1586.18,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 19,
    price: 2003.72,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 20,
    price: 2139.79,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 21,
    price: 2169.04,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    duration: 4,
    price: 597.96,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    duration: 5,
    price: 679.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    duration: 6,
    price: 761.89,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    duration: 7,
    price: 847.85,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    duration: 8,
    price: 837.66,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 11,
    price: 1248.21,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 12,
    price: 1338.28,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 13,
    price: 1423.34,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 14,
    price: 1509.4,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 15,
    price: 1513.21,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 18,
    price: 1941.76,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 19,
    price: 2005.82,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 20,
    price: 2138.08,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 10,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 21,
    price: 2167.32,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    duration: 3,
    price: 512,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    duration: 4,
    price: 597.96,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    duration: 5,
    price: 679.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    duration: 6,
    price: 761.89,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    duration: 7,
    price: 760.7,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 10,
    price: 1172.25,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 11,
    price: 1250.31,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 12,
    price: 1340.38,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 13,
    price: 1425.44,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 14,
    price: 1422.25,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 17,
    price: 1823.8,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 18,
    price: 1943.86,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 19,
    price: 2004.11,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 20,
    price: 2136.36,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 11,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 21,
    price: 2087.8,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    duration: 2,
    price: 284.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    duration: 3,
    price: 367.89,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    duration: 4,
    price: 453.85,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 7,
    price: 778.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 8,
    price: 857.61,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 9,
    price: 987.68,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 10,
    price: 1040.74,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 11,
    price: 1118.8,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 14,
    price: 1440.1,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 15,
    price: 1533.16,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 16,
    price: 1604.41,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 17,
    price: 1684.66,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 14,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 18,
    price: 1812.35,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    duration: 2,
    price: 284.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    duration: 3,
    price: 367.89,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 6,
    price: 773.44,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 7,
    price: 861.5,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 8,
    price: 940.56,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 9,
    price: 1070.62,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 10,
    price: 1034.44,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 13,
    price: 1436.99,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 14,
    price: 1523.05,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 15,
    price: 1612.3,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 16,
    price: 1683.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 15,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 17,
    price: 1685.99,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    duration: 2,
    price: 284.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 5,
    price: 691.48,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 6,
    price: 775.54,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 7,
    price: 863.6,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 8,
    price: 942.66,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 9,
    price: 983.47,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 12,
    price: 1354.02,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 13,
    price: 1439.09,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 14,
    price: 1521.34,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 15,
    price: 1610.59,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 16,
    price: 1604.02,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 4,
    price: 609.51,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 5,
    price: 693.58,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 6,
    price: 777.64,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 7,
    price: 865.7,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 8,
    price: 855.51,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 11,
    price: 1266.06,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 12,
    price: 1356.12,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 13,
    price: 1437.38,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 14,
    price: 1519.62,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 17,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 15,
    price: 1531.06,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    duration: 3,
    price: 523.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    duration: 4,
    price: 611.61,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 5,
    price: 695.68,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 6,
    price: 779.74,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 7,
    price: 778.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 10,
    price: 1190.1,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 11,
    price: 1268.16,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 12,
    price: 1354.41,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 13,
    price: 1435.66,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 18,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 14,
    price: 1440.1,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    duration: 2,
    price: 289.12,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 3,
    price: 374.19,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 4,
    price: 462.25,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 7,
    price: 778.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 8,
    price: 857.61,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 9,
    price: 983.86,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 10,
    price: 1033.11,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 21,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 11,
    price: 1118.8,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    duration: 2,
    price: 289.12,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 3,
    price: 374.19,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 6,
    price: 779.74,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 7,
    price: 867.8,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 8,
    price: 943.05,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 9,
    price: 1069.3,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 22,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 10,
    price: 1040.74,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    duration: 2,
    price: 289.12,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 5,
    price: 695.68,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 6,
    price: 779.74,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 7,
    price: 863.99,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 8,
    price: 939.24,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 9,
    price: 987.68,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 4,
    price: 611.61,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 5,
    price: 695.68,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 6,
    price: 775.92,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 7,
    price: 860.18,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 24,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 8,
    price: 857.61,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    duration: 3,
    price: 523.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    duration: 4,
    price: 611.61,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 5,
    price: 691.86,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 6,
    price: 772.11,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 25,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 7,
    price: 778.55,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    departureDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    duration: 2,
    price: 285.31,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 3,
    price: 366.56,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 28,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 4,
    price: 462.25,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 1,
    },
    duration: 2,
    price: 281.5,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 29,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 3,
    price: 362.75,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 6,
      day: 30,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 2,
    },
    duration: 2,
    price: 281.5,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 9,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 12,
    },
    duration: 3,
    price: 697.93,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 19,
    },
    duration: 3,
    price: 771.91,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 23,
    },
    duration: 7,
    price: 1317.39,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 16,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 26,
    },
    duration: 10,
    price: 2076.74,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 19,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 23,
    },
    duration: 4,
    price: 897.54,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 19,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 26,
    },
    duration: 7,
    price: 1317.39,
  },
  {
    arrivalDate: {
      year: 2021,
      month: 7,
      day: 23,
    },
    departureDate: {
      year: 2021,
      month: 7,
      day: 26,
    },
    duration: 3,
    price: 871.35,
  },
]

// const toArray = (data) =>
//   Object.entries(data).map(([id, props]) => ({ [id]: props }))

export const byStartDate = groupWith((a, b) => {
  return a.arrivalDate.day === b.arrivalDate.day
}, availability)

export const byDuration = groupBy((duration) => {
  return duration.duration
}, availability)

// export const byDuration = toArray(byDuration_)
