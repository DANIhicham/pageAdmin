'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Hooks Imports
import { useSettings } from '@core/hooks/useSettings'

const CardStatHorizontal = props => {
  // Props
  const { title, stats, icon, color, trendNumber, trend } = props

  // Hooks
  const { settings } = useSettings()

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default CardStatHorizontal
