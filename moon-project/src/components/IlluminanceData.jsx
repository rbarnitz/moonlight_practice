import React from 'react';

const illuminanceData = [
  { id: 1, date: '2024-01-01', illuminance: 0.78 },
  { id: 2, date: '2024-01-02', illuminance: 0.7 },
  { id: 3, date: '2024-01-03', illuminance: 0.61 },
  { id: 4, date: '2024-01-04', illuminance: 0.52 },
  { id: 5, date: '2024-01-05', illuminance: 0.42 },
  { id: 6, date: '2024-01-06', illuminance: 0.32 },
  { id: 7, date: '2024-01-07', illuminance: 0.23 },
  { id: 8, date: '2024-01-08', illuminance: 0.15 },
  { id: 9, date: '2024-01-09', illuminance: 0.08 },
  { id: 10, date: '2024-01-10', illuminance: 0.03 },
  { id: 11, date: '2024-01-11', illuminance: 0.01 },
  { id: 12, date: '2024-01-12', illuminance: 0.01 },
  { id: 13, date: '2024-01-13', illuminance: 0.03 },
  { id: 14, date: '2024-01-14', illuminance: 0.09 },
  { id: 15, date: '2024-01-15', illuminance: 0.17 },
  { id: 16, date: '2024-01-16', illuminance: 0.26 },
  { id: 17, date: '2024-01-17', illuminance: 0.37 },
  { id: 18, date: '2024-01-18', illuminance: 0.48 },
  { id: 19, date: '2024-01-19', illuminance: 0.59 },
  { id: 20, date: '2024-01-20', illuminance: 0.7 },
  { id: 21, date: '2024-01-21', illuminance: 0.79 },
  { id: 22, date: '2024-01-22', illuminance: 0.87 },
  { id: 23, date: '2024-01-23', illuminance: 0.93 },
  { id: 24, date: '2024-01-24', illuminance: 0.97 },
  { id: 25, date: '2024-01-25', illuminance: 0.99 },
  { id: 26, date: '2024-01-26', illuminance: 1.0 },
  { id: 27, date: '2024-01-27', illuminance: 0.98 },
  { id: 28, date: '2024-01-28', illuminance: 0.95 },
  { id: 29, date: '2024-01-29', illuminance: 0.91 },
  { id: 30, date: '2024-01-30', illuminance: 0.84 },
  { id: 31, date: '2024-01-31', illuminance: 0.77 },
  { id: 32, date: '2024-02-01', illuminance: 0.69 },
  { id: 33, date: '2024-02-02', illuminance: 0.6 },
  { id: 34, date: '2024-02-03', illuminance: 0.5 },
  { id: 35, date: '2024-02-04', illuminance: 0.4 },
  { id: 36, date: '2024-02-05', illuminance: 0.3 },
  { id: 37, date: '2024-02-06', illuminance: 0.21 },
  { id: 38, date: '2024-02-07', illuminance: 0.12 },
  { id: 39, date: '2024-02-08', illuminance: 0.06 },
  { id: 40, date: '2024-02-09', illuminance: 0.02 },
  { id: 41, date: '2024-02-10', illuminance: 0.0 },
  { id: 42, date: '2024-02-11', illuminance: 0.02 },
  { id: 43, date: '2024-02-12', illuminance: 0.06 },
  { id: 44, date: '2024-02-13', illuminance: 0.13 },
  { id: 45, date: '2024-02-14', illuminance: 0.22 },
  { id: 46, date: '2024-02-15', illuminance: 0.33 },
  { id: 47, date: '2024-02-16', illuminance: 0.43 },
  { id: 48, date: '2024-02-17', illuminance: 0.54 },
  { id: 49, date: '2024-02-18', illuminance: 0.64 },
  { id: 50, date: '2024-02-19', illuminance: 0.74 },
  { id: 51, date: '2024-02-20', illuminance: 0.82 },
  { id: 52, date: '2024-02-21', illuminance: 0.89 },
  { id: 53, date: '2024-02-22', illuminance: 0.94 },
  { id: 54, date: '2024-02-23', illuminance: 0.98 },
  { id: 55, date: '2024-02-24', illuminance: 1.0 },
  { id: 56, date: '2024-02-25', illuminance: 1.0 },
  { id: 57, date: '2024-02-26', illuminance: 0.98 },
  { id: 58, date: '2024-02-27', illuminance: 0.95 },
  { id: 59, date: '2024-02-28', illuminance: 0.9 },
  { id: 60, date: '2024-03-01', illuminance: 0.75 },
  { id: 61, date: '2024-03-02', illuminance: 0.66 },
  { id: 62, date: '2024-03-03', illuminance: 0.57 },
  { id: 63, date: '2024-03-04', illuminance: 0.46 },
  { id: 64, date: '2024-03-05', illuminance: 0.36 },
  { id: 65, date: '2024-03-06', illuminance: 0.26 },
  { id: 66, date: '2024-03-07', illuminance: 0.16 },
  { id: 67, date: '2024-03-08', illuminance: 0.09 },
  { id: 68, date: '2024-03-09', illuminance: 0.03 },
  { id: 69, date: '2024-03-10', illuminance: 0.0 },
  { id: 70, date: '2024-03-11', illuminance: 0.01 },
  { id: 71, date: '2024-03-12', illuminance: 0.04 },
  { id: 72, date: '2024-03-13', illuminance: 0.1 },
  { id: 73, date: '2024-03-14', illuminance: 0.18 },
  { id: 74, date: '2024-03-15', illuminance: 0.28 },
  { id: 75, date: '2024-03-16', illuminance: 0.38 },
  { id: 76, date: '2024-03-17', illuminance: 0.48 },
  { id: 77, date: '2024-03-18', illuminance: 0.59 },
  { id: 78, date: '2024-03-19', illuminance: 0.68 },
  { id: 79, date: '2024-03-20', illuminance: 0.77 },
  { id: 80, date: '2024-03-21', illuminance: 0.84 },
  { id: 81, date: '2024-03-22', illuminance: 0.91 },
  { id: 82, date: '2024-03-23', illuminance: 0.95 },
  { id: 83, date: '2024-03-24', illuminance: 0.98 },
  { id: 84, date: '2024-03-25', illuminance: 1.0 },
  { id: 85, date: '2024-03-26', illuminance: 0.99 },
  { id: 86, date: '2024-03-27', illuminance: 0.97 },
  { id: 87, date: '2024-03-28', illuminance: 0.93 },
  { id: 88, date: '2024-03-29', illuminance: 0.88 },
  { id: 89, date: '2024-03-30', illuminance: 0.81 },
  { id: 90, date: '2024-03-31', illuminance: 0.72 },
];

export default illuminanceData;
