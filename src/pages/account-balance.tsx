import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import AccountBalancesTable from '../components/Table/AccountBalancesTable'

const AccountBalance = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Account Balances')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="Account Balance"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <AccountBalancesTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

AccountBalance.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default AccountBalance
