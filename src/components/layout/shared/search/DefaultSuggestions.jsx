// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
import { useKBar } from 'kbar'
import classnames from 'classnames'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const defaultSuggestions = [
  {
  },
  {
    sectionLabel: 'Pages',
    items: [
      {
        label: 'User Profile',
        href: '/pages/user-profile',
        icon: 'ri-user-3-line'
      },
      {
        label: 'Account Settings',
        href: '/pages/account-settings',
        icon: 'ri-settings-4-line'
      },
      {
        label: 'Pricing',
        href: '/pages/pricing',
        icon: 'ri-money-dollar-circle-line'
      },
      {
        label: 'FAQ',
        href: '/pages/faq',
        icon: 'ri-question-line'
      }
    ]
  },
  {
    sectionLabel: 'Forms & Charts',
    items: [
      {
        label: 'Form Layouts',
        href: '/forms/form-layouts',
        icon: 'ri-file-text-line'
      },
      {
        label: 'Form Validation',
        href: '/forms/form-validation',
        icon: 'ri-checkbox-multiple-line'
      },
      {
        label: 'Form Wizard',
        href: '/forms/form-wizard',
        icon: 'ri-equalizer-line'
      },
      {
        label: 'Apex Charts',
        href: '/charts/apex-charts',
        icon: 'ri-line-chart-line'
      }
    ]
  }
]

const DefaultSuggestions = () => {
  // Hooks
  const { query } = useKBar()
  const { lang: locale } = useParams()

  return (
    <div className=''>

    </div>
  )
}

export default DefaultSuggestions
