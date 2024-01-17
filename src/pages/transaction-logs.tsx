import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import TransactionLogsTable from '../components/Table/TransactionLogsTable'

const TransactionLogsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Transaction Logs')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="All Transaction Logs"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <TransactionLogsTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

TransactionLogsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TransactionLogsPage
