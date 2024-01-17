import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import NFCCardsTable from '../components/Table/NFCCardsTable'

const NFCCardsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('NFC Cards')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="All NFC Cards"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <NFCCardsTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

NFCCardsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default NFCCardsPage
