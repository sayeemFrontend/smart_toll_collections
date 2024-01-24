import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import { makeLogout } from '../utils'

export default function login() {
  makeLogout()
  return (
    <div className="p-4 bg-slate-800 h-screen">
      <div className="mx-auto max-w-max">
        <LoginForm />
      </div>
    </div>
  )
}
