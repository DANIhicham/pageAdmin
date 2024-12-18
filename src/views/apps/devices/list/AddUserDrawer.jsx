// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Checkbox, FormControlLabel } from '@mui/material';
// Vars
const initialData = {
  code: '',
  symbol: '',
  taux: '',
  formatAffichage: '',
  Default:'',
  active: ''
}
const handleCheckboxChange = (event) => {
  const { name, checked } = event.target;
  setFormData({ 
    ...formData, 
    [name]: checked ? name : '' 
  });
};
const AddUserDrawer = ({ open, handleClose }) => {
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
      code: '',
      symbol: '',
      taux: '',
      formatAffichage: '',
      Default:'',
      active: ''
    })
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-[15px]'>
        <Typography variant='h5'>Ajouter nouveau Devise</Typography>
        <IconButton onClick={handleReset}>
          <i className='ri-close-line' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            label='code'
            fullWidth
            placeholder='code'
            value={formData.code}
            onChange={e => setFormData({ ...formData, code: e.target.value })}
          />
          <TextField
            label='symbol'
            fullWidth
            placeholder='symbol'
            value={formData.symbol}
            onChange={e => setFormData({ ...formData, symbol: e.target.value })}
          />

  
          <TextField
            label="Format d'affichage"
            fullWidth
            placeholder="Format d'affichage"
            value={formData.formatAffichage}
            onChange={e => setFormData({ ...formData, formatAffichage: e.target.value })}
          />

          <TextField
            label='Taux'
            fullWidth
            type='number'
            placeholder='taux'
            helperText="format d'affichage, Ex: {amount} DH >>> 4000 DH"

            value={formData.taux}
            onChange={e => setFormData({ ...formData, taux: e.target.value })}
          />
       

         
       <FormControlLabel
  control={
    <Checkbox 
      name="default" 
      checked={formData.Default === 'default'} 
      onChange={handleCheckboxChange} 
    />
  }
  label="Default"
/>
<FormControlLabel
  control={
    <Checkbox 
      name="active" 
      checked={formData.active === 'active'} 
      onChange={handleCheckboxChange} 
    />
  }
  label="Active"
/>

          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddUserDrawer
