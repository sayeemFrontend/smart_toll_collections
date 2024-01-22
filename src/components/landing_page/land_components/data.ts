import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid'

import benefitOneImg from '../land_components/img/benefit-one.png'
import benefitTwoImg from '../land_components/img/benefit-two.png'

export const benefitOne = {
  title: 'THiNK-ToLL, Enjoy a hassle-free life',
  desc: 'THiNK-ToLL offer a range of benefits that extend beyond mere revenue collection, contributing to the overall efficiency and sustainability of transportation infrastructure. Firstly, tolls play a crucial role in financing the construction, maintenance, and improvement of roads and highways',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Efficient Toll Collection',
      desc: 'THiNK-ToLL ensures swift and hassle-free toll transactions, reducing wait times for commuters and enhancing overall road travel efficiency.',
      icon: FaceSmileIcon,
    },
    {
      title: 'Real-Time Monitoring',
      desc: 'THiNK-ToLL provides instant insights into traffic flow, allowing authorities to make informed decisions for improved traffic management, leading to reduced congestion and smoother traffic operations',
      icon: ChartBarSquareIcon,
    },
    {
      title: 'Automated Revenue Tracking',
      desc: 'THiNK-ToLL automates revenue tracking, minimizing the chances of errors and discrepancies. This enhances financial transparency and accountability in toll operations.',
      icon: CursorArrowRaysIcon,
    },
    {
      title: 'Enhanced Security',
      desc: 'THiNK-ToLL contributes to improved toll booth security by detecting and alerting authorities to any suspicious activities or anomalies in real-time',
      icon: ChartBarSquareIcon,
    },
  ],
}

export const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: DevicePhoneMobileIcon,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: AdjustmentsHorizontalIcon,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: SunIcon,
    },
  ],
}
