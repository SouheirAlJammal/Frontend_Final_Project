import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialTaskStatus = ({data}) => {
     const TasksData = Object.keys(data);
const values = TasksData.map(key => data[key]);
console.log('kkkkkkkk',values)
const total = values.reduce((sum, value) => sum + value, 0);
  const [chartData, setChartData] = useState({
    series: [...values],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return total;
              },
            },
          },
        },
      },
      labels: ['Pending',"In Progress","Completed"],
      legend: {
        show: true,
        position: 'bottom', 
        horizontalAlign: 'center',
        fontSize: '16px',
        markers: {
          radius: 12, 
        },
      },
      colors: ['rgb(247, 20, 172)', 'rgba(200,223,231,0.8)', '#E6A290'],
    },
  });

  return (
      <div>
        <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={350}/>
      </div>
  );
};

export default RadialTaskStatus;
