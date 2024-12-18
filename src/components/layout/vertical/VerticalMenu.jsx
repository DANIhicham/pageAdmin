'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'
import Chip from '@mui/material/Chip'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'
// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)
const handleLogout = () => {
  // Effacez les cookies ou autres données de session
  destroyCookie(null, 'token'); // Exemple pour effacer un cookie nommé 'token'

  // Redirection après la déconnexion
};
const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()
  const { settings } = useSettings()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale, id } = params
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href={`/${locale}/dashboards/analytics`} icon={<i className='ri-home-smile-line' />}>
          {dictionary['navigation'].dashboards}
        </MenuItem>
        <SubMenu label={dictionary['navigation'].user} icon={<i className='ri-user-line' />}>
          <SubMenu label='Agents BCloud'>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/roles/list`}>{dictionary['navigation'].roles}</MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/apps/client/list`}>Clients BCloud</MenuItem>
        </SubMenu>
        <SubMenu label='Catalogue BCloud' icon={<i className='ri-layout-left-line' />}>
          <SubMenu label='E-learning'>
            <MenuItem href={`/${locale}/apps/e-learning/list`}>{dictionary['navigation'].listt} E-learning</MenuItem>
            <MenuItem href={`/${locale}/apps/categ-e-learning/list`}>{dictionary['navigation'].category}</MenuItem>
          </SubMenu>
          <SubMenu label="Formation">
            <MenuItem href={`/${locale}/apps/formation/list`}>Liste desFormations</MenuItem>
            <MenuItem href={`/${locale}/apps/categ-formation/list`}>{dictionary['navigation'].category}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].simulateur}>
            <MenuItem href={`/${locale}/apps/simulateur/list`}>{dictionary['navigation'].simulator}</MenuItem>
            <MenuItem href={`/${locale}/apps/categ-simulateur/list`}>
              {dictionary['navigation'].category}
            </MenuItem>
          </SubMenu>
          <SubMenu label='Certifications'>
            <MenuItem href={`/${locale}/apps/certification/list`}>{dictionary['navigation'].certification}</MenuItem>
            <MenuItem href={`/${locale}/apps/categ-certification/list`}>
              {dictionary['navigation'].category}
            </MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label='Recrutement' icon={<i className='ri-lock-2-line' />}>
          <MenuItem href={`/${locale}/apps/offre/list`}>{dictionary['navigation'].offer}</MenuItem>
          <MenuItem href={`/${locale}/apps/categ-offre/list`}>{dictionary['navigation'].category}</MenuItem>
        </SubMenu>
        <SubMenu label='Services BCloud' icon={<i className='ri-checkbox-multiple-line' />}>
          <MenuItem href={`/${locale}/apps/formateur/list`}>{dictionary['navigation'].former} BCloud</MenuItem>
          <MenuItem href={`/${locale}/apps/devis/list`}>Devis</MenuItem>
          <MenuItem href={`/${locale}/apps/contact/list`}>Contact</MenuItem>
        </SubMenu>
        {/* <SubMenu label={dictionary['navigation'].invoice} icon={<i className='ri-bill-line' />}>
          <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].listt}</MenuItem>
          <MenuItem href={`/${locale}/apps/invoice/preview/${id || '4987'}`}>
            {dictionary['navigation'].preview}
          </MenuItem>
          <MenuItem href={`/${locale}/apps/invoice/edit/${id || '4987'}`}>{dictionary['navigation'].edit}</MenuItem>
          <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
        </SubMenu> */}
        <SubMenu label={dictionary['navigation'].eCommerce} icon={<i className='ri-bar-chart-2-line' />}>
          <MenuItem href={`/${locale}/apps/commande/list`}>Commandes BCloud</MenuItem>
          <MenuItem href={`/${locale}/apps/device/list`}>Devis BCloud</MenuItem>
          <MenuItem href={`/${locale}/apps/coupon/list`}>Coupons BCloud</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].Settings} icon={<i className='ri-shield-keyhole-line' />}>
          <MenuItem href={`/${locale}/apps/banniere/list`}>Bannieres</MenuItem>
          <MenuItem href={`/${locale}/apps/slide/list`}>Slides</MenuItem>
          <MenuItem href={`/${locale}/apps/barrePromotion/list`}>Barre de promotion</MenuItem>
          <MenuItem href={`/${locale}/apps/tlds/list`}>TLDs liés</MenuItem>
        </SubMenu>
        <MenuItem onClick={handleLogout} href={`/${locale}/`} icon={<i className='ri-logout-box-line' />}>
          Se déconnecter
        </MenuItem>
      </Menu>
      {/* <Menu
          popoutMenuOffset={{ mainAxis: 10 }}
          menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
          renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
          renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
          menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
        >
          <GenerateVerticalMenu menuData={menuData(dictionary, params)} />
        </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
