'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Vars
const data = [
  {
    avatarSrc: '/images/logos/mastercard.png',
    title: 'Credit Card',
    cardNumber: '2566 xxxx xxxx 8908',
    alt: 'master-card'
  },
  {
    avatarSrc: '/images/logos/dinners-club.png',
    title: 'Credit Card',
    cardNumber: '8990 xxxx xxxx 6852',
    alt: 'credit-card'
  }
]

const UpgradePlan = () => {
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default UpgradePlan
