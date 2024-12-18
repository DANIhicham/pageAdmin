// Do not remove this following 'use client' else SubMenu rendered in vertical menu on smaller screen will not work.
'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'
import Chip from '@mui/material/Chip'

// Component Imports
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'

// import { GenerateHorizontalMenu } from '@components/GenerateMenu'
// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Styled Component Imports
import StyledHorizontalNavExpandIcon from '@menu/styles/horizontal/StyledHorizontalNavExpandIcon'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
import menuRootStyles from '@core/styles/horizontal/menuRootStyles'
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'
import verticalMenuItemStyles from '@core/styles/vertical/menuItemStyles'
import verticalMenuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ level }) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className='ri-arrow-right-s-line' />
  </StyledHorizontalNavExpandIcon>
)

const RenderVerticalExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const HorizontalMenu = ({ dictionary }) => {
  // Hooks
  const verticalNavOptions = useVerticalNav()
  const theme = useTheme()
  const { settings } = useSettings()
  const params = useParams()

  // Vars
  const { skin } = settings
  const { transitionDuration } = verticalNavOptions
  const { lang: locale, id } = params

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme),
        backgroundColor:
          skin === 'bordered' ? 'var(--mui-palette-background-paper)' : 'var(--mui-palette-background-default)'
      }}
    >
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuItemStyles={menuItemStyles(settings, theme)}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
          alignmentAxis: 0
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme, settings),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
          ),
          renderExpandedMenuItemIcon: { icon: <i className='ri-circle-line' /> },
          menuSectionStyles: verticalMenuSectionStyles(verticalNavOptions, theme)
        }}
      >
        <MenuItem href={`/${locale}/dashboards/analytics`} icon={<i className='ri-home-smile-line' />}>
          Tableau de bord
        </MenuItem>
        <SubMenu label='Utilisateur BCloud' icon={<i className='ri-user-line' />}>
          <SubMenu label='Agents BCloud'>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list} des agents</MenuItem>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/utilisateur/clients-bcloud`}>Clients BCloud</MenuItem>
        </SubMenu>
        <SubMenu label='Catalogue BCloud' icon={<i className='ri-layout-left-line' />}>
          <SubMenu label='E-learning'>
            <MenuItem href={`/${locale}/catalogue/elearning/listelearning`}>Liste E-learning</MenuItem>
            <MenuItem href={`/${locale}/catalogue/elearning/categories`}>Les categories</MenuItem>
          </SubMenu>
          <SubMenu label='Les formations'>
            <MenuItem href={`/${locale}/catalogue/formations/listeformations`}>Liste des formations</MenuItem>
            <MenuItem href={`/${locale}/catalogue/formations/categories`}>Les categories</MenuItem>
          </SubMenu>
          <SubMenu label='Les simulateurs'>
            <MenuItem href={`/${locale}/catalogue/simulateurs/listesimulateurs`}>Liste des simulateurs</MenuItem>
            <MenuItem href={`/${locale}/catalogue/simulateurs/categories`}>Les categories</MenuItem>
          </SubMenu>
          <SubMenu label='Les certifications'>
            <MenuItem href={`/${locale}/catalogue/certifications/listeformations`}>Liste des simulateurs</MenuItem>
            <MenuItem href={`/${locale}/catalogue/certification/categories`}>Les categories</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label='Recrutemant' icon={<i className='ri-lock-2-line' />}>
          <MenuItem href={`/${locale}/recrutement/liste-offres`}>Liste des offres</MenuItem>
          <MenuItem href={`/${locale}/recrutement/categories`}>les categories</MenuItem>
        </SubMenu>
        <SubMenu label='Services BCloud' icon={<i className='ri-checkbox-multiple-line' />}>
          <MenuItem href={`/${locale}/services/formateurs-bcloud`}>Formateurs BCloud</MenuItem>
          <MenuItem href={`/${locale}/services/demande-devis`}>Demande de devis</MenuItem>
          <MenuItem href={`/${locale}/services/demande-contact`}>Demandes de contact</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].invoice} icon={<i className='ri-bill-line' />}>
          <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
          <MenuItem href={`/${locale}/apps/invoice/preview/${id || '4987'}`}>
            {dictionary['navigation'].preview}
          </MenuItem>
          <MenuItem href={`/${locale}/apps/invoice/edit/${id || '4987'}`}>{dictionary['navigation'].edit}</MenuItem>
          <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
        </SubMenu>
        <SubMenu label='E-commerce' icon={<i className='ri-bar-chart-2-line' />}>
          <MenuItem href={`/${locale}/ecommerce/commandes-bcloud`}>Les commandes BCloud</MenuItem>
          <MenuItem href={`/${locale}/ecommerce/devis-bcloud`}>Les devis BCloud</MenuItem>
          <MenuItem href={`/${locale}/ecommerce/coupons-bcloud`}>Les coupons BCloud</MenuItem>
        </SubMenu>
        <SubMenu label='Paramétres' icon={<i className='ri-shield-keyhole-line' />}>
          <MenuItem href={`/${locale}/parametres/banieres-site`}>Bannieres du site</MenuItem>
          <MenuItem href={`/${locale}/parametres/slides-site`}>les slides du site</MenuItem>
          <MenuItem href={`/${locale}/parametres/barre-promoyion`}>Barre de promotion</MenuItem>
          <MenuItem href={`/${locale}/parametres/tlds-lies`}>Les TLDs liés</MenuItem>
        </SubMenu>
        <MenuItem href={`/${locale}/deconnexion`} icon={<i className='ri-logout-box-line' />}>
          Se déconnecter
        </MenuItem>
      </Menu>

      {/* <Menu
          rootStyles={menuRootStyles(theme)}
          renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
          renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
          menuItemStyles={menuItemStyles(settings, theme)}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
          verticalMenuProps={{
            menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme, settings),
            renderExpandIcon: ({ open }) => (
              <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
            ),
            renderExpandedMenuItemIcon: { icon: <i className='ri-circle-line' /> },
            menuSectionStyles: verticalMenuSectionStyles(verticalNavOptions, theme)
          }}
        >
          <GenerateHorizontalMenu menuData={menuData(dictionary, params)} />
        </Menu> */}
    </HorizontalNav>
  )
}

export default HorizontalMenu
