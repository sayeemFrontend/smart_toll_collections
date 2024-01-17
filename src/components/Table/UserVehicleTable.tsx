import React, { useEffect, useState } from 'react'
import CustomTable from './CustomTable'
import { AnyObject } from '../apis/api_types'
import CardBoxModal from '../CardBox/Modal'
import { useApiSlice } from '../../hooks/custom_hooks'
import Suspender from '../suspender/Suspender'
import CardBox from '../CardBox'
import CardBoxComponentEmpty from '../CardBox/Component/Empty'
import { PaginatedItems } from '../pagination/Paginate'

export default function UserVehicleTable() {
  const { isError, isLoading, getItems, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalInfoActive, setIsModalInfoActive] = useState<null | AnyObject>(null)
  const [isModalTrashActive, setIsModalTrashActive] = useState<null | AnyObject>(null)

  const handleModalAction = () => {
    setIsModalInfoActive(null)
    setIsModalTrashActive(null)
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
        isActive={!!isModalInfoActive}
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
        isActive={!!isModalTrashActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>
      <Suspender isLoading={isLoading} isError={isError}>
        <CustomTable
          actions={{
            add: (item) => setIsModalInfoActive(item),
            del: (item) => setIsModalTrashActive(item),
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
