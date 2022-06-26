import dynamic from "next/dynamic";
import { ApexOptions } from 'apexcharts';

export const ChartSSR = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export const options: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: false,
    },
    foreColor: '#a6a6a6',
    fontFamily: 'Poppins, sans-serif',
  },
  grid: {
    show: true,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: '#a6a6a6'
    },
    axisTicks: {
      color: '#a6a6a6'
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    colors: ['#8B5CF6', '#8B5CF6', '#8B5CF6'],
    gradient: {
      shade: 'dark',
      opacityFrom: 1,
      opacityTo: 0.9,
    }
  },
}

