import Head from 'next/head'
import React, { ReactElement } from 'react'
import LayoutGuest from '../layouts/Guest'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'
import LandingPage from '../components/landing_page/LandingPage'

const StyleSelectPage = () => {
  const dispatch = useAppDispatch()
  dispatch(setDarkMode(false))

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <LandingPage />
    </>
  )
}

StyleSelectPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelectPage
