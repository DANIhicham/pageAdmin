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
  <div className='p-5'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
    <div className="banner">
      <div className="days">
        <span>Lundi</span>
      </div>
      <div className="images">
        <img src="1699210894-desktop.webp" alt="Desktop banner" className="desktop" />
        <img src="1699210895-mobile.webp" alt="Mobile banner" className="mobile" />
      </div>

    </div>
              <div className='flex items-center gap-4'>
                <Button className='is-full sm:is-auto' variant='contained' type='submit'>
                  SAUVEGARDER
                </Button>
                <input
                      type='file'
                      id='file-input'
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                 />
                <Button className='is-full sm:is-auto' variant='contained' color='primary' onClick={() => document.getElementById('file-input').click()}>
                  BANNIERE DESKTOP
                </Button>
                <input
                      type='file'
                      id='file-input1'
                      style={{ display: 'none' }}
                      onChange={handleFileChange1}
                 />
                <Button className='is-full sm:is-auto' variant='contained' color='primary' onClick={() => document.getElementById('file-input1').click()}>
                  BANNIERE DESKTOP
                </Button>
          </div>
      </form>
    </div>
)

}
    





export default UserListTable
