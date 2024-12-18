'use client'

// React Imports
import { useEffect, useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { Checkbox, FormControlLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import TablePagination from '@mui/material/TablePagination'


const initialData = {
  lundiDesk: '',
  mardiDesk: '',
  mercrediDesk:'',
  jeudiDesk:'',
  vendrediDesk:'',
  samediDesk: '',
  dimancheDesk:'',
  lundiMob: '',
  mardiMob: '',
  mercrediMob:'',
  jeudiMob:'',
  vendrediMob:'',
  samediMob: '',
  dimancheMob:''
}

const handleFileChange = (e) => {
  setFormData({ ...formData, lundi: e.target.files[0] })
}

const handleFileChange1 = (e) => {
  setFormData({ ...formData, lundi: e.target.files[0] })
}

const UserListTable = ({ open, handleClose }) => {
  // States
  const [formData, setFormData] = useState(initialData)

  const handleSubmit = e => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }
  const handleReset = () => {
    handleClose()
    setFormData({
      lundiDesk: '',
      mardiDesk: '',
      mercrediDesk:'',
      jeudiDesk:'',
      vendrediDesk:'',
      samediDesk: '',
      dimancheDesk:'',
      lundiMob: '',
      mardiMob: '',
      mercrediMob:'',
      jeudiMob:'',
      vendrediMob:'',
      samediMob: '',
      dimancheMob:''
    })
  }
return (
  <div>
  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
    <button  style={{ backgroundColor: '#4267B2', color: 'white', padding: '8px 16px', borderRadius: '4px' }}>
      Sauvegarder
    </button>
    <button style={{ backgroundColor: '#DC143C', color: 'white', padding: '8px 16px', borderRadius: '4px' }}>
      Nouveau Slide
    </button>
  </div>
  <p style={{ marginBottom: '10px' }}>Après toute modification ou ajout cliquer sur ce button pour Sauvegarder vos changement :</p>
 
</div>
)

}
    





export default UserListTable
