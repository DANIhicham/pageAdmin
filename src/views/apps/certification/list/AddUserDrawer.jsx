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
  titre: '',
  prixBase: '',
  prixFinal: '',
  image: '',
  slug: '',
  metaTitre: '',
  categorie: '',
  metadescription: '',
  courtedescription: '',
  categorie: '',
  description: '',
  evaluation: '',
  duree: '',
  active: '',
  prerequis:'',
  visiteur: ''

}

const handleCheckboxChange = (event, label) => {
  if (label === 'Prérequis') {
    setFormData({ ...formData, prerequis: event.target.checked ? false : true });
    console.log('Prérequis:', event.target.checked ? false : true);
  } else if (label === 'Active') {
    setFormData({ ...formData, active: event.target.checked });
  }
};

const AddUserDrawer = ({ open, handleClose }) => {
  // States
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
      titre: '',
      prixBase: '',
      prixFinal: '',
      image: '',
      slug: '',
      metaTitre: '',
      categorie: '',
      metadescription: '',
      courtedescription: '',
      categorie: '',
      description: '',
      evaluation: '',
      duree: '',
      active: '',
      visiteur: ''
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
        <Typography variant='h5'>Ajouter nouveau certification</Typography>
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
            value={formData.titre}
            onChange={e => setFormData({ ...formData, titre: e.target.value })}
          /> 
          <TextField
            label='slug'
            fullWidth
            placeholder='slug(permalink)'
            value={formData.slug}
            onChange={e => setFormData({ ...formData, slug: e.target.value })}
          />

          <TextField
            label='metaTitre'
            fullWidth
            placeholder='metaTitre'
            value={formData.metaTitre}
            onChange={e => setFormData({ ...formData, metaTitre: e.target.value })}
          />
          <TextField
            fullWidth
            type='file'
            value={formData.image}
            onChange={e => setFormData({ ...formData, image: e.target.value })}
          />
          <TextField
            label='Prix de base'
            fullWidth
            placeholder='Prix de base'
            value={formData.prixBase}
            onChange={e => setFormData({ ...formData, prixBase: e.target.value })}
          />
          <TextField
            label='Prix de final'
            fullWidth
            placeholder='Prix de final'
            value={formData.prixFinal}
            onChange={e => setFormData({ ...formData, prixFinal: e.target.value })}
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
            label='courte description'
            type='text'
            fullWidth
            placeholder='courte description'
            value={formData.courtedescription}
            onChange={e => setFormData({ ...formData, courtedescription: e.target.value })}
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
          <FormControl fullWidth>
            <InputLabel id='categorie'>Select categorie</InputLabel>
            <Select
              fullWidth
              id='categorie'
              value={formData.categorie}
              onChange={e => setFormData({ ...formData, categorie: e.target.value })}
              label='Select categorie'
              labelId='categorie'
              inputProps={{ placeholder: 'categorie' }}
            >
              <MenuItem value='Gestion de projet'>Gestion de projet</MenuItem>
              <MenuItem value='Méthode agile & scrum'>Méthode agile & scrum</MenuItem>
              <MenuItem value='Gestion des Services IT'>Gestion des Services IT</MenuItem>
              <MenuItem value='Gouvernance IT et Conformité'>Gouvernance IT et Conformité</MenuItem>
              <MenuItem value='Cloud Computing'>Cloud Computing</MenuItem>
              <MenuItem value='DevOps'>DevOps</MenuItem>
              <MenuItem value='Gestion des Risques'>Gestion des Risques</MenuItem>
              <MenuItem value='Tests de Logiciels'>Tests de Logiciels</MenuItem>

            </Select>
          </FormControl>
      
         <TextField
            label='visiteur'
            type='text'
            fullWidth
            placeholder='visiteur'
            value={formData.visiteur}
            onChange={e => setFormData({ ...formData, visiteur: e.target.value })}
          />
                <TextField
            label='évaluation'
            type='text'
            fullWidth
            placeholder='évaluation'
            value={formData.evaluation}
            onChange={e => setFormData({ ...formData, evaluation: e.target.value })}
          />
                <TextField
            label='Durée du certif'
            type='text'
            fullWidth
            placeholder='Durée du certif (En heure)'
            value={formData.duree}
            onChange={e => setFormData({ ...formData, duree: e.target.value })}
          />
      <FormControlLabel
  control={
    <Checkbox
      checked={!formData.prerequis}
      onChange={(event) => handleCheckboxChange(event, 'Prérequis')}
      color="primary"
    />
  }
  label="Prérequis"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={formData.active}
      onChange={(event) => handleCheckboxChange(event, 'Active')}
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
