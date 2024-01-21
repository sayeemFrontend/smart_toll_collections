import { mdiEye, mdiEyePlusOutline, mdiTrashCan } from '@mdi/js'
import React from 'react'
import Button from '../Button'
import Buttons from '../Buttons'
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
    add?: () => void
    edit?: (item: AnyObject) => void
    del?: (item: AnyObject) => void
  }
}

export default function CustomTable({ headers, dataList = [], actions }: PropsType) {
  const heads = headers?.map((header) => header.label)
  const keys = headers?.map((header) => header.key)

  return (
    <div className="relative">
      {actions.add && (
        <div className=" w-fit ml-auto absolute right-4 -top-10">
          <Button color="info" icon={mdiEyePlusOutline} onClick={actions.add} small />
        </div>
      )}
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
              {actions && (
                <td className="before:hidden lg:w-1 whitespace-nowrap">
                  <Buttons type="justify-start lg:justify-end" noWrap>
                    {actions.edit && (
                      <Button color="info" icon={mdiEye} onClick={() => actions.edit(item)} small />
                    )}
                    {actions.del && (
                      <Button
                        color="danger"
                        icon={mdiTrashCan}
                        onClick={() => actions.del(item)}
                        small
                      />
                    )}
                  </Buttons>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
