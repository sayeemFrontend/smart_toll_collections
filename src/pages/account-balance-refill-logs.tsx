import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import BalanceRefillLogsTable from '../components/Table/BalaceRefillLogsTable'

const BalanceRefillLogsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Balance Refill Logs')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="Balance Refill Logs"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <BalanceRefillLogsTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

BalanceRefillLogsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default BalanceRefillLogsPage
