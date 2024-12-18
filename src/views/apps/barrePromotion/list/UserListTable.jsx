'use client'

// React Imports
import { useEffect, useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { Checkbox, FormControlLabel } from '@mui/material';



const initialData = {
  expiré: '',
  description: '',
  compteur:'',
  active: ''
}

const handleCheckboxChange = (event) => {
  setFormData({ ...formData, compteur: event.target.checked });
};
const handleCheckboxChange2 = (event) => {
  setFormData({ ...formData, active: event.target.checked });
};
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
      expiré: '',
      description: '',
      compteur:'',
      active: ''
    })
  }
return (
  <div className='p-5'>
    <h4>Expiré le</h4>
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <TextField
        fullWidth
        type='date'
        value={formData.expiré}
        onChange={e => setFormData({ ...formData, expiré: e.target.value })}
      />
      <TextField
          label='Description'
          fullWidth
          multiline
          rows={8}
          placeholder='Description'
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
        />
      <FormControlLabel
      control={
        <Checkbox
          checked={formData.compteur}
          onChange={handleCheckboxChange}
          color="primary"
        />
      }
      label="Afficher le compteur temps restant."
    />
          <FormControlLabel
      control={
        <Checkbox
          checked={formData.active}
          onChange={handleCheckboxChange2}
          color="primary"
        />
      }
      label="Active"
    />
              <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              SAUVEGARDER
            </Button>

          </div>
      </form>
    </div>
)

}
    





export default UserListTable
