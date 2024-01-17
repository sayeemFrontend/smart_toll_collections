import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import NFCScannerDevicesTable from '../components/Table/NFCScannerDevicesTable'

const NFCScannerDevice = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('NFC Scanner Device')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="All NFC Scanner Device"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <NFCScannerDevicesTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

NFCScannerDevice.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default NFCScannerDevice
