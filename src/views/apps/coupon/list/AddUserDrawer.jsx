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
  nom: '',
  utilisateur: '',
  produit: '',
  type: '',
  valeur: '',
  minimumAchat: '',
  expiration: '',
  utilisation: '',
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
      nom: '',
      utilisateur: '',
      produit: '',
      type: '',
      valeur: '',
      minimumAchat: '',
      expiration: '',
      utilisation: '',
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
        <Typography variant='h5'>Ajouter nouveau Coupon</Typography>
        <IconButton onClick={handleReset}>
          <i className='ri-close-line' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            label='Nom du coupon'
            fullWidth
            placeholder='nom'
            value={formData.nom}
            onChange={e => setFormData({ ...formData, nom: e.target.value })}
          />
          <TextField
            label='Utilisateur'
            fullWidth
            placeholder='Utilisateur'
            value={formData.utilisateur}
            helperText="Récupérer l'ID du client via la recherche du module Clients"
            onChange={e => setFormData({ ...formData, utilisateur: e.target.value })}
          />
          <TextField
            label='Produit'
            fullWidth
            placeholder='Produit'
            helperText="Récupérer l'ID salesforce du produit via la recherche catalogue"
            value={formData.produit}
            onChange={e => setFormData({ ...formData, produit: e.target.value })}
          />
                
          <FormControl fullWidth>
            <InputLabel id='type'>Type</InputLabel>
            <Select
              fullWidth
              id='type'
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}

              inputProps={{ placeholder: 'Type' }}
            >
              <MenuItem value='montant fixe'>montant fixe</MenuItem>
              <MenuItem value='pourcentage'>pourcentage</MenuItem>


            </Select>
          </FormControl>
          <TextField
            label='valeur'
            type='text'
            fullWidth
            placeholder='Valeur'
            value={formData.valeur}
            onChange={e => setFormData({ ...formData, valeur: e.target.value })}
          />
          <TextField
            label="Minimum d'achat"
            fullWidth
            placeholder="Minimum d'achat"
            value={formData.type}
            onChange={e => setFormData({ ...formData, minimumAchat: e.target.value })}
          />
         <h4>Expiré le</h4> 
          <TextField
            fullWidth
            type='date'
            value={formData.expiration}
            onChange={e => setFormData({ ...formData, expiration: e.target.value })}
          />

<FormControlLabel
      control={
        <Checkbox
          checked={formData.utilisation}
          onChange={handleCheckboxChange}
          color="primary"
        />
      }
      label="Utilisation unique"
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
