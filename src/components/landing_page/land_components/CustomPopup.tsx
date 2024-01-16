import { Popover, Transition } from '@headlessui/react'
import React from 'react'

export default function CustomPopup({ header, body, headerClass = '', bodyClass = '' }) {
  return (
    <>
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button className={`${headerClass}`}>{header}</Popover.Button>
            <Transition
              className={`absolute z-50 top-[50px] ${bodyClass}`}
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
            >
              <Popover.Panel>{body}</Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}
