import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },

  {
    href: '/users',
    label: 'Users',
    icon: mdiTable,
  },
  {
    href: '/account-balance',
    label: 'Account Balance',
    icon: mdiTelevisionGuide,
  },
  {
    href: '/nfc-cards',
    label: 'NFC Cards',
    icon: mdiSquareEditOutline,
  },
  {
    href: '/user-vehicle',
    label: 'User Vehicle',
    icon: mdiTelevisionGuide,
  },
  {
    href: '/nfc-scanner-device',
    label: 'NFC Scanner Device',
    icon: mdiResponsive,
  },
  {
    href: '/',
    label: 'Styles',
    icon: mdiPalette,
  },
  {
    href: '/operator-scanner-device',
    label: 'Operator Scanner Device',
    icon: mdiAccountCircle,
  },
  {
    href: '/account-balance-refill-logs',
    label: 'Account Balance Refill',
    icon: mdiResponsive,
  },
  {
    href: '/transaction-logs',
    label: 'Transaction Logs',
    icon: mdiSquareEditOutline,
  },
  {
    href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
  {
    href: '/error',
    label: 'Error',
    icon: mdiAlertCircle,
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One',
      },
      {
        label: 'Item Two',
      },
    ],
  },
  {
    href: 'https://github.com/justboil/admin-one-react-tailwind',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank',
  },
  {
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    label: 'Vue version',
    icon: mdiVuejs,
    target: '_blank',
  },
]

export default menuAside
