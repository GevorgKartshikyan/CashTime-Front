export default {
  series: [
    {
      name: 'users',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'jobs',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2023-01-1',
        '2023-02-1',
        '2023-03-1',
        '2023-04-1',
        '2023-05-1',
        '2023-06-1',
        '2023-07-1',
        '2023-08-1',
        '2023-09-1',
        '2023-10-1',
        '2023-11-1',
        '2023-12-1',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
};
