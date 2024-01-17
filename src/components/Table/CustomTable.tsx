import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import { AnyObject } from '../apis/api_types'

export type HeaderType = {
  label: string
  key: string
}
type PropsType = {
  headers: HeaderType[]
  dataList: AnyObject[]
  tableHeading?: string
  valueExtractor?: (op: AnyObject) => void
  tableClass?: {
    headerRow?: string
    headerCell?: string
    bodyRow?: string
    bodyCell?: string
    border?: string
    bgHead?: string
    bgBody?: string
  }
  actions?: {
    add?: (item: AnyObject) => void
    edit?: (item: AnyObject) => void
    del?: (item: AnyObject) => void
  }
}

export default function CustomTable({ headers, dataList = [], actions }: PropsType) {
  const heads = headers?.map((header) => header.label)
  const keys = headers?.map((header) => header.key)

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
  }

  return (
    <>
      <CardBoxModal
        title="Sample modal"
        buttonColor="info"
        buttonLabel="Done"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>

      <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={isModalTrashActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>

      <table>
        <thead>
          <tr>{heads?.map((thead) => <th key={thead}>{thead}</th>)}</tr>
        </thead>
        <tbody>
          {dataList?.map((item: AnyObject & { id: number | string }) => (
            <tr key={item.id}>
              {keys?.map((keyValue, i) => (
                <td key={i} data-label={keyValue}>{`${item[keyValue] || '-'}`}</td>
              ))}
              {actions?.add && (
                <td className="before:hidden lg:w-1 whitespace-nowrap">
                  <Buttons type="justify-start lg:justify-end" noWrap>
                    <Button color="info" icon={mdiEye} onClick={() => actions.add(item)} small />
                    <Button
                      color="danger"
                      icon={mdiTrashCan}
                      onClick={() => actions.del(item)}
                      small
                    />
                  </Buttons>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
