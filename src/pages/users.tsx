import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import UsersTable from '../components/Table/UsersTable'
import { isAuthenticate } from '../components/apis/credentials'

const UsersPage = () => {
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
          <UsersTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UsersPage

export function getStaticProps() {
  return {
    props: {
      isAuth: isAuthenticate() || false,
    },
  }
}
