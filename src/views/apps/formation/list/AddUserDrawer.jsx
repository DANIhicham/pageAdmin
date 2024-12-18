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


const categories = [
  'Gestion de projet',
  'Méthode Agile Scrum',
  'Gestion des services IT',
  'Sécurité informatique',
  'Tests de Logiciels',
  'Coaching Agile & Ateliers',
  'MOA, Business Analysis',
  'Développement Web',
  'SAP',
  'Gestion des risques',
  'Communication',
  'Finance',
  'Commercial',
  'Gestion RH',
  'Administration du Personnel',
  'Contrôle interne',
  'Bureautique',
  'Systèmes d\'exploitation',
  'Gouvernance IT et Conformité',
  'Cloud Computing',
  'DevOps',
  'Blockchain',
  'Gestion de la qualité',
  'Salesforce',
  'IT & Software',
  'Intelligence Artificielle',
  
];

// Vars
const initialData = {
  Titre: '',
  programmeFormation: '',
  prqFormation: '',
  preRequis:'',
  adressFormation:'',
  evaluation:'',
  duree:'',
  slug: '',
  image: '',
  metaTitre: '',
  categorie: '',
  metadescription: '',
  courtedescription: '',
  description: '',
  visiteur: '',
  prixCertification: false,
  prerequis: false,
  certification: false,
  active: false
}

const handleCheckboxChange = (event) => {
  setFormData({
    ...formData,
    active: event.target.checked,
  });
}
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
      programmeFormation: '',
      prqFormation: '',
      preRequis:'',
      adressFormation:'',
      evaluation:'',
      duree:'',
      slug: '',
      image: '',
      metaTitre: '',
      categorie: '',
      metadescription: '',
      courtedescription: '',
      description: '',
      visiteur: '',
      prixCertification: false,
      prerequis: false,
      certification: false,
      active: false,
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
        <Typography variant='h5'>Ajouter nouveau formation</Typography>
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
            type='file'
            fullWidth
            value={formData.image}
            onChange={e => setFormData({ ...formData, image: e.target.value })}
          />
            <FormControl fullWidth>
        <InputLabel id="categorie">Categorie</InputLabel>
        <Select
          fullWidth
          id="categorie"
          value={formData.categorie}
              onChange={e => setFormData({ ...formData, categorie: e.target.value })}
          label="categorie"
          labelId="categorie"
          inputProps={{ placeholder: 'categorie' }}
        >

          {categories.map((categories) => (
            <MenuItem key={categories} value={categories}>
              {categories}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
      placeholder='Description du formation '
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
    <TextField
      label='Programme de la formation:'
      type='text'
      fullWidth
      placeholder='Programme de la formation'
      value={formData.programmeFormation}
      onChange={e => setFormData({ ...formData, programmeFormation: e.target.value })}
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

    <TextField
      label='Pourquoi choisir cette formation :'
      type='text'
      fullWidth
      placeholder='Pourquoi choisir cette formation :'
      value={formData.prqFormation}
      onChange={e => setFormData({ ...formData, prqFormation: e.target.value })}
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

    <TextField
      label='Pre-requis :'
      type='text'
      fullWidth
      placeholder='Pre-requis'
      value={formData.preRequis}
      onChange={e => setFormData({ ...formData, preRequis: e.target.value })}
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


      <TextField
            label='visiteur'
            type='text'
            fullWidth
            placeholder='visiteur'
            value={formData.visiteur}
            onChange={e => setFormData({ ...formData, visiteur: e.target.value })}
      />
            <TextField
            label='èvaluation'
            type='text'
            fullWidth
            placeholder='èvaluation'
            value={formData.evaluation}
            onChange={e => setFormData({ ...formData, evaluation: e.target.value })}
      />
  <FormControlLabel
  control={
    <Checkbox
      checked={!formData.prerequis}
      onChange={(event) => handleCheckboxChange(event, 'Prérequis')}
      color="primary"
    />
  }
  label="Prix avec certification."
/>
<FormControlLabel
  control={
    <Checkbox
      checked={formData.prixCertification}
      onChange={(event) => handleCheckboxChange(event, 'prixCertification')}
      color="primary"
  />
  }
  label="Certification"
/>
<FormControlLabel
  control={
    <Checkbox
      checked={!formData.certification}
      onChange={(event) => handleCheckboxChange(event, 'certification')}
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
