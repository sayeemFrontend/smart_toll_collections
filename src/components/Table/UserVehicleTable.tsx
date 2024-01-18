import React, { useEffect, useState } from 'react'
import CustomTable from './CustomTable'
import { AnyObject } from '../apis/api_types'
import CardBoxModal from '../CardBox/Modal'
import { useApiSlice } from '../../hooks/custom_hooks'
import Suspender from '../suspender/Suspender'
import CardBox from '../CardBox'
import CardBoxComponentEmpty from '../CardBox/Component/Empty'
import { PaginatedItems } from '../pagination/Paginate'
import { notify } from '../Notify'

export default function UserVehicleTable() {
  const { isError, isLoading, getItems, delItems, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)

  const handleDeleteItems = async () => {
    const item = isModalDel as { id: number | string }
    await delItems({
      ids: [item.id],
      endPoint: 'user-vehicle/delete',
      resolve: (res) => {
        notify({ message: res.message })
      },
    })
    setIsModalDel(null)
  }

  const handleAddItems = () => {
    setIsModalAdd(null)
  }

  useEffect(() => {
    getItems({ endPoint: 'user-vehicle/all' })
  }, [getItems])

  const getVehicleType = React.useCallback((vehicle_type: AnyObject) => {
    return vehicle_type.type_name
  }, [])

  const getUserName = React.useCallback((user: AnyObject) => {
    const { first_name, last_name } = user
    return `${first_name} ${last_name}`
  }, [])

  const getUserMobile = React.useCallback((user: AnyObject) => {
    const { mobile_number } = user
    return mobile_number
  }, [])

  return (
    <>
      <CardBoxModal
        title="Sample modal"
        buttonColor="info"
        buttonLabel="Done"
        isActive={!!isModalAdd}
        onConfirm={handleAddItems}
        onCancel={() => setIsModalAdd(null)}
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
        isActive={!!isModalDel}
        onConfirm={handleDeleteItems}
        onCancel={() => setIsModalDel(null)}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>
      <Suspender isLoading={isLoading} isError={isError}>
        <CustomTable
          actions={{
            add: (item) => setIsModalAdd(item),
            del: (item) => setIsModalDel(item),
          }}
          dataList={data?.map((it: AnyObject) => ({
            ...it,
            m_vehicle_type_type_name: getVehicleType(it.vehicle_type as AnyObject),
            m_user_fullName: getUserName(it.user as AnyObject),
            m_user_mobile_number: getUserMobile(it.user as AnyObject),
          }))}
          headers={[
            { key: 'reg_no', label: 'Reg. Number' },
            { key: 'm_vehicle_type_type_name', label: 'Vehicle Type' },
            { key: 'm_user_fullName', label: 'Owner Name' },
            { key: 'm_user_mobile_number', label: 'Mobile Number' },
            { key: 'nfc_card_no', label: 'NFC Card No' },
          ]}
        />
        {!data.length && (
          <CardBox>
            <CardBoxComponentEmpty />
          </CardBox>
        )}
      </Suspender>
      <div>
        <PaginatedItems
          onClick={(page) => updateQuery((prev) => ({ ...prev, page: page }))}
          itemsPerPage={pagination.per_page as number}
          totalItems={pagination.total as number}
        />
      </div>
    </>
  )
}
