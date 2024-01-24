import Image from 'next/image'
import React from 'react'
import Container from './Container'
import userOneImg from '../land_components/img/user1.jpg'
import userTwoImg from '../land_components/img/user2.jpg'
import userThreeImg from '../land_components/img/user3.jpg'

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800">
            <p className="text-2xl leading-normal ">
              THiNK-ToLL has transformed my daily commute!{' '}
              <span className="text-indigo-400">The seamless toll transactions</span> make my
              journey much smoother, and I appreciate the reduced wait times at toll booths.
            </p>

            <Avatar image={userOneImg} name="Sarah Steiner" title="VP Sales at Google" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800">
            <p className="text-2xl leading-normal ">
              This <span className="text-indigo-400">real-time monitoring</span> feature is
              fantastic – Kudos to the developers for creating such a user-friendly and impactful
              system!
            </p>

            <Avatar image={userTwoImg} name="Dylan Ambrose" title="Lead marketer at Netflix" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800">
            <p className="text-2xl leading-normal ">
              It like having a <span className="text-indigo-400">personal traffic advisor</span> on
              my phone. I highly recommend it to anyone tired of long waits and unpredictable
              commutes.
            </p>

            <Avatar image={userThreeImg} name="Gabrielle Winn" title="Co-founder of Acme Inc" />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={props.image} width="40" height="40" alt="Avatar" placeholder="blur" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  )
}
