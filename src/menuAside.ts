import {
  mdiAccountCircle,
  mdiMonitor,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiResponsive,
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

  // {
  //   label: 'Dropdown',
  //   icon: mdiViewList,
  //   menu: [
  //     {
  //       label: 'Item One',
  //     },
  //     {
  //       label: 'Item Two',
  //     },
  //   ],
  // }
]

export default menuAside
