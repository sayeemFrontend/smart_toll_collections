import React, { useEffect, useState } from 'react'
import CustomTable from './CustomTable'
import { AnyObject, ApiResPonseType } from '../apis/api_types'
import CardBoxModal from '../CardBox/Modal'
import { useApiSlice } from '../../hooks/custom_hooks'
import Suspender from '../suspender/Suspender'
import CardBox from '../CardBox'
import CardBoxComponentEmpty from '../CardBox/Component/Empty'
import { PaginatedItems } from '../pagination/Paginate'
import { notify } from '../Notify'
import FormMaker from '../Form/FormMaker'
import { getApi } from '../apis/methods'

export default function AccountBalancesTable() {
  const { isError, isLoading, getItems, postItem, delItems, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)
  const [users, setUsers] = useState([])
  const userOptions = users?.map((op) => ({
    label: `${op.first_name} ${op.last_name}`,
    value: op.id,
  }))

  const modalClose = () => {
    setIsModalAdd(null)
    setIsModalDel(null)
  }
  const handleDeleteItems = async () => {
    const item = isModalDel as { id: number | string }
    await delItems({
      ids: [item.id],
      endPoint: 'user-account-balance/delete',
      resolve: (res) => {
        notify({ message: res.message })
      },
    })
    setIsModalDel(null)
  }

  const handleFormData = async (formData) => {
    await postItem({
      endPoint: 'user-account-balance/add',
      data: formData,
      reject: (error) => {
        console.log(error)
        notify({ message: error.response.data.error })
      },
    })
  }

  const getUserTypes = async () => {
    await getApi({
      end_point: 'users',
      resolve: (res: ApiResPonseType) => setUsers(res.data as object[]),
    })
  }

  useEffect(() => {
    getUserTypes()
  }, [])

  useEffect(() => {
    getItems({ endPoint: 'user-account-balance/all' })
  }, [getItems])

  return (
    <>
      <CardBoxModal
        title="Add New Balance"
        buttonColor="info"
        buttonLabel="Done"
        isActive={!!isModalAdd}
        onCancel={modalClose}
        actionBar={false}
      >
        <FormMaker
          btnLabel="Add"
          handleFormSubmit={handleFormData}
          formFields={[
            { name: 'balance', Label: 'Balance', type: 'number' },
            {
              name: 'user_id',
              Label: 'Choose user',
              options: [{ label: 'Choose user type', value: '0' }, ...userOptions],
            },
          ]}
        />
      </CardBoxModal>

      <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={!!isModalDel}
        onConfirm={handleDeleteItems}
        onCancel={modalClose}
      >
        <p>You are going to remove from data list </p>
        <p>Confirm if you are sure</p>
      </CardBoxModal>
      <Suspender isLoading={isLoading} isError={isError}>
        <CustomTable
          actions={{
            add: () => setIsModalAdd({}),
            del: (item) => setIsModalDel(item),
          }}
          dataList={data?.map((it: AnyObject) => ({
            ...it,
            m_last_name: it.last_name || it.first_name,
          }))}
          headers={[
            { key: 'first_name', label: 'First Name' },
            { key: 'm_last_name', label: 'Last Name' },
            { key: 'mobile_number', label: 'Mobile Number' },
            { key: 'balance', label: 'Balance' },
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
