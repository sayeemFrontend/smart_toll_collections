import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import UserVehicleTable from '../components/Table/UserVehicleTable'

const UserVehicle = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Users Vehicle')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="All users Vehicle"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <UserVehicleTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

UserVehicle.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UserVehicle
