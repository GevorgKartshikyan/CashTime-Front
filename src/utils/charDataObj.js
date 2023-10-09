export const chartData = (dataUsers, dataJobs, categories) => ({
  series: [
    {
      name: 'users',
      data: dataUsers,
    },
    {
      name: 'jobs',
      data: dataJobs,
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
      categories,
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
});
