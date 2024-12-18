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
  site: '',
  pays: '',
  langlso: '',
  premiereTelephone: '',
  deuxiemeTelephone: '',
  image: '',
  salesEmail: '',
  supportEmail: '',
  gtag: '',
  pourcentagePrix: '',
  type:'',
  premiereWhatsapp: '',
  deuxiemeWhatsapp: ''
}
const handleCheckboxChange = (event) => {
  setFormData({ ...formData, pourcentagePrix: event.target.checked });
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
      site: '',
      pays: '',
      langlso: '',
      premiereTelephone: '',
      deuxiemeTelephone: '',
      image: '',
      salesEmail: '',
      supportEmail: '',
      gtag: '',
      pourcentagePrix: '',
      type:'',
      premiereWhatsapp: '',
      deuxiemeWhatsapp: ''
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
        <Typography variant='h5'> Nouveau Site</Typography>
        <IconButton onClick={handleReset}>
          <i className='ri-close-line' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            label='Site (www.bcloud.tld)'
            fullWidth
            placeholder='Site'
            value={formData.site}
            onChange={e => setFormData({ ...formData, site: e.target.value })}
          />
          <TextField
            label='pays'
            fullWidth
            placeholder='pays'
            value={formData.pays}
            onChange={e => setFormData({ ...formData, pays: e.target.value })}
          />
          <TextField
            label='Langlso(fr-MA)'
            fullWidth
            placeholder='Langlso'
            value={formData.langlso}
            onChange={e => setFormData({ ...formData, langlso: e.target.value })}
          />
          <TextField
            label='Premier téléphone'
            fullWidth
            placeholder='Premier téléphone'
            value={formData.premiereTelephone}
            onChange={e => setFormData({ ...formData, premiereTelephone: e.target.value })}
          />
          <TextField
            label='Deuxiéme téléphone'
            fullWidth
            placeholder='Deuxiéme téléphone'
            value={formData.deuxiemeTelephone}
            onChange={e => setFormData({ ...formData, deuxiemeTelephone: e.target.value })}
          />
          <TextField
            type='file'
            fullWidth
            value={formData.image}
            onChange={e => setFormData({ ...formData, image: e.target.value })}
          />
          <TextField
            label='Sales Email'
            fullWidth
            placeholder='Sales Email'
            value={formData.salesEmail}
            onChange={e => setFormData({ ...formData, salesEmail: e.target.value })}
          /> 
          <TextField
            label='Support Email'
            fullWidth
            placeholder='Support Email'
            value={formData.supportEmail}
            onChange={e => setFormData({ ...formData, supportEmail: e.target.value })}
          />
          <TextField
            label='Gtag'
            fullWidth
            placeholder='Gtag'
            value={formData.gtag}
            onChange={e => setFormData({ ...formData, gtag: e.target.value })}
          />                                  
          <FormControl fullWidth>
            <InputLabel id='type'></InputLabel>
            <Select
              fullWidth
              id='type'
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}

              inputProps={{ placeholder: '' }}
            >
              <MenuItem value='Plus'>Plus</MenuItem>
              <MenuItem value='Moins'>Moins</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='Pourcentage Prix (%)'
            fullWidth
            type='number'
            placeholder='Pourcentage Prix (%)'
            value={formData.pourcentagePrix}
            onChange={e => setFormData({ ...formData, pourcentagePrix: e.target.value })}
          />
          <TextField
            label="Premier Whatsapp"
            fullWidth
            placeholder="Premier Whatsapp"
            value={formData.premiereWhatsapp}
            onChange={e => setFormData({ ...formData, premiereWhatsapp: e.target.value })}
          />
          <TextField
            label="Deuxiéme Whatsapp"
            fullWidth
            placeholder="Deuxiéme Whatsapp"
            value={formData.deuxiemeWhatsapp}
            onChange={e => setFormData({ ...formData, deuxiemeWhatsapp: e.target.value })}
          />
        


          <div className='flex items-center gap-4'>
            <Button variant='contained' prTelephone='submit'>
              SAUVEGARDER
            </Button>
            <Button variant='outlined' color='error' prTelephone='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddUserDrawer
