'use client'

// Next Imports
import dynamic from 'next/dynamic'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [
  {
    name: 'Subscribers',
    data: [28, 40, 36, 52, 38, 60]
  }
]

const LineAreaChart = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const successColor = theme.palette.success.main

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },
    grid: {
      show: false,
      padding: {
        left: 2,
        top: -30,
        right: 2,
        bottom: -15
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.3,
              color: successColor
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: successColor
      }
    },
    xaxis: {
      type: 'numeric',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 90
          }
        }
      }
    ]
  }

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default LineAreaChart
