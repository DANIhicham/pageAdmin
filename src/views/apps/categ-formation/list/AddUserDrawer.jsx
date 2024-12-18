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
  Titre: '',
  metatitre: '',
  slug: '',
  metaTitre: '',
  metadescription: '',
  description: '',
  active: ''
}
const handleCheckboxChange = (event) => {
  setFormData({ ...formData, active: event.target.checked });
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
      Titre: '',
      metatitre: '',
      slug: '',
      metaTitre: '',
      metadescription: '',
      description: '',
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
        <Typography variant='h5'>Ajouter nouveau Categorie</Typography>
        <IconButton onClick={handleReset}>
          <i className='ri-close-line' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            label='Titre'
            fullWidth
            placeholder='Titre'
            value={formData.Titre}
            onChange={e => setFormData({ ...formData, Titre: e.target.value })}
          />
          <TextField
            label='metatitre'
            fullWidth
            placeholder='meta titre'
            value={formData.metatitre}
            onChange={e => setFormData({ ...formData, metatitre: e.target.value })}
          />

          <TextField
            label='metaTitre'
            fullWidth
            placeholder='metaTitre'
            value={formData.metaTitre}
            onChange={e => setFormData({ ...formData, metaTitre: e.target.value })}
          />

          <TextField
            label='slug'
            fullWidth
            placeholder='slug(permalink)'
            value={formData.slug}
            onChange={e => setFormData({ ...formData, slug: e.target.value })}
          />
       

          <TextField
            label='metadescription'
            type='text'
            fullWidth
            placeholder='meta description'
            value={formData.metadescription}
            onChange={e => setFormData({ ...formData, metadescription: e.target.value })}
          />
         

<TextField
      label='Description'
      type='text'
      fullWidth
      placeholder='Enter the description here...'
      value={formData.description}
      onChange={e => setFormData({ ...formData, description: e.target.value })}
      multiline
      rows={4}
      variant='outlined'
      margin='normal'
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        style: { fontSize: 16, padding: '10px' },
      }}
      helperText="Please provide a detailed description."
      FormHelperTextProps={{
        style: { fontSize: 12, color: '#757575' },
      }}
    />
      
      <FormControlLabel
      control={
        <Checkbox
          checked={formData.active}
          onChange={handleCheckboxChange}
          color="primary"
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
