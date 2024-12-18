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
  slug: '', 
  metaTitre: '',
  image:'',
  categorie: '',
  metadescription: '',  
  courtedescription: '',
  visiteur: '',
  entreprise: '',
  typeContrat: '',
  modeTravail: '',
  adress: '',
  ville:'',
  codePostal: '',  
  pays: '',
  periodeSalaire: '',
  salaire: '',
  deviceSalaire: '',
  experience: '',
  active: '', 
  dateExperation:'',
  description: ''

}
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo, Democratic Republic of the',
  'Congo, Republic of the',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
];
const handleCheckboxChange = (event, label) => {
if (label === 'Active') {
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
  slug: '', 
  metaTitre: '',
  image:'',
  categorie: '',
  metadescription: '',  
  courtedescription: '',
  visiteur: '',
  entreprise: '',
  typeContrat: '',
  modeTravail: '',
  adress: '',
  ville:'',
  codePostal: '',  
  pays: '',
  periodeSalaire: '',
  salaire: '',
  deviceSalaire: '',
  experience: '',
  active: '', 
  dateExperation:'',
  description: ''
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
        <Typography variant='h5'>Ajouter nouveau offre</Typography>
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
            label='Meta Titre'
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
            <InputLabel id='categorie'>catégorie</InputLabel>
            <Select
              fullWidth
              id='categorie'
              value={formData.categorie}
              onChange={e => setFormData({ ...formData, categorie: e.target.value })}
              label='Select categorie'
              labelId='categorie'
              inputProps={{ placeholder: 'categorie' }}
            >
              <MenuItem value='Informatique, SSII, Internet'>Informatique, SSII, Internet</MenuItem>
              <MenuItem value='Intérim, recrutement'>Intérim, recrutement</MenuItem>
              <MenuItem value='Salesforce'>Salesforce</MenuItem>
              <MenuItem value='Gouvernance IT et Conformité'>Gouvernance IT et Conformité</MenuItem>
              <MenuItem value='QA & Testing'>QA & Testing</MenuItem>
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
            label='visiteur'
            type='text'
            fullWidth
            placeholder='visiteur'
            value={formData.visiteur}
            onChange={e => setFormData({ ...formData, visiteur: e.target.value })}
          />
          <TextField
            label='entreprise'
            fullWidth
            placeholder='Entreprise'
            value={formData.entreprise}
            onChange={e => setFormData({ ...formData, entreprise: e.target.value })}
          />
            <FormControl fullWidth>
            <InputLabel id='typeContrat'>Type de Contrat</InputLabel>
            <Select
              fullWidth
              id='typeContrat'
              value={formData.typeContrat}
              onChange={e => setFormData({ ...formData, typeContrat: e.target.value })}
              label='type Contrat'
              labelId='typeContrat'
              inputProps={{ placeholder: 'type de Contrat' }}
            >
              <MenuItem value='CDI'>CDI</MenuItem>
              <MenuItem value='CDD'>CDD</MenuItem>
              <MenuItem value='Freelance'>Freelance</MenuItem>
              <MenuItem value='Stage'>Stage</MenuItem>
              <MenuItem value='Stage Pré-embauche'>Stage Pré-embauche</MenuItem>
              <MenuItem value='Bénévole'>Bénévole</MenuItem>
              <MenuItem value='Par jour'>Par jour</MenuItem>
              <MenuItem value='Autre'>Autre</MenuItem>
              
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='modeTravail'>Mode de travail</InputLabel>
            <Select
              fullWidth
              id='modeTravail'
              value={formData.modeTravail}
              onChange={e => setFormData({ ...formData, modeTravail: e.target.value })}
              label='Select mode Travail'
              labelId='modeTravail'
              inputProps={{ placeholder: 'mode Travail' }}
            >
              <MenuItem value='à distance'>à distance</MenuItem>
              <MenuItem value='Hybride'>Hybride</MenuItem>
              <MenuItem value='Bureau'>Bureau</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='Adress'
            fullWidth
            placeholder=' Adress'
            value={formData.adress}
            onChange={e => setFormData({ ...formData, adress: e.target.value })}
          />      
          <TextField
            label='ville'
            fullWidth
            placeholder=' ville'
            value={formData.ville}
            onChange={e => setFormData({ ...formData, ville: e.target.value })}
          />  

          <TextField
            label='Code postal'
            fullWidth
            placeholder=' Code postal'
            value={formData.codePostal}
            onChange={e => setFormData({ ...formData, codePostal: e.target.value })}
          />   
                <FormControl fullWidth>
        <InputLabel id="pays">Pays</InputLabel>
        <Select
          fullWidth
          id="pays"
          value={formData.pays}
              onChange={e => setFormData({ ...formData, pays: e.target.value })}
          label="Pays"
          labelId="pays"
          inputProps={{ placeholder: 'Pays' }}
        >
         
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <FormControl fullWidth>
            <InputLabel id='periodeSalaire'>Période de salaire</InputLabel>
            <Select
              fullWidth
              id='periodeSalaire'
              value={formData.periodeSalaire}
              onChange={e => setFormData({ ...formData, periodeSalaire: e.target.value })}
              label='Période de salaire'
              labelId='Période de salaire'
              inputProps={{ placeholder: 'Période de salaire' }}
            >
              <MenuItem value='Par heure'>Par heure</MenuItem>
              <MenuItem value='Par jour'>Par jour</MenuItem>
              <MenuItem value='Par semaine'>Par semaine</MenuItem>
              <MenuItem value='Par mois'>Par mois</MenuItem>
              <MenuItem value='Par an'>Par an</MenuItem>

            </Select>
          </FormControl>
          <TextField
            label='Salaire'
            type="number"
            fullWidth
            placeholder=' Salaire'
            value={formData.salaire}
            onChange={e => setFormData({ ...formData, salaire: e.target.value })}
          />  

          <TextField
            label='Device du salaire'
            fullWidth
            placeholder=' Device du salaire'
            value={formData.deviceSalaire}
            onChange={e => setFormData({ ...formData, deviceSalaire: e.target.value })}
          />  

<FormControl fullWidth>
            <InputLabel id='experience'>Expérience</InputLabel>
            <Select
              fullWidth
              id='experience'
              value={formData.experience}
              onChange={e => setFormData({ ...formData, experience: e.target.value })}
              label='Expérience'
              inputProps={{ placeholder: 'Expérience' }}
            >
              <MenuItem value='Débutant'>Débutant</MenuItem>
              <MenuItem value='junior'>junior</MenuItem>
              <MenuItem value='Sénior'>Sénior</MenuItem>
              <MenuItem value='Expert'>Expert</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Date d'expiration de l'offre"
            type='date'
            fullWidth
            value={formData.dateExperation}
            onChange={e => setFormData({ ...formData, dateExperation: e.target.value })}
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
