import React, { useEffect, useState } from 'react'
import CustomTable from './CustomTable'
import { AnyObject } from '../apis/api_types'
import CardBoxModal from '../CardBox/Modal'
import { useApiSlice } from '../../hooks/custom_hooks'
import Suspender from '../suspender/Suspender'
import CardBox from '../CardBox'
import CardBoxComponentEmpty from '../CardBox/Component/Empty'
import { PaginatedItems } from '../pagination/Paginate'

export default function UsersTable() {
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
    getItems({ endPoint: 'users' })
  }, [getItems])

  const getUserType = React.useCallback((user_type: AnyObject) => {
    return user_type.user_type_name
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
            m_last_name: it.last_name || it.first_name,
            m_user_type: getUserType(it.user_type as AnyObject),
          }))}
          headers={[
            { key: 'first_name', label: 'First Name' },
            { key: 'm_last_name', label: 'Last Name' },
            { key: 'mobile_number', label: 'Mobile Number' },
            { key: 'm_user_type', label: 'User Type' },
            { key: 'created', label: 'Created' },
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
