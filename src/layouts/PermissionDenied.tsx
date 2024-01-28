import React from 'react'
import Button from '../components/Button'
import { useRouter } from 'next/router'

export default function PermissionDenied() {
  const router = useRouter()
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-700">
      <div className="text-center max-w-xs m-auto">
        <p className="text-2xl text-yellow-500">Permission denied</p>

        <div className="text-xl text-indigo-400">
          <p>Login Please</p>
          <div className="ml-4 text-indigo-600">
            <Button onClick={() => router.push('/')} small label="Login" />
          </div>
        </div>
      </div>
    </div>
  )
}
