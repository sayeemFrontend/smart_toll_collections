import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import OperatorScannerDeviceTable from '../components/Table/OperatorScannerDeviceTable '

const OperatorScannerDevicePage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Users')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="All users"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <OperatorScannerDeviceTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

OperatorScannerDevicePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default OperatorScannerDevicePage
