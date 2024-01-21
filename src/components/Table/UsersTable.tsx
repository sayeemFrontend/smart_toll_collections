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

export default function UsersTable() {
  const { isError, isLoading, getItems, postItem, delItems, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)
  const [userTypes, setUserTypes] = useState([])
  const userTypesOptions = userTypes?.map((op) => ({ label: op.type_name, value: op.id }))

  const modalClose = () => {
    setIsModalAdd(null)
    setIsModalDel(null)
  }
  const handleDelete = async () => {
    const item = isModalDel as { id: number | string }
    await delItems({
      ids: [item.id],
      endPoint: 'user/delete',
      resolve: (res) => {
        notify({ message: res.message })
      },
    })
    setIsModalDel(null)
  }
  const handleFormData = async (formData) => {
    await postItem({
      endPoint: 'admin/user/signup-internal',
      data: formData,
      reject: (error) => {
        console.log(error)
        notify({ message: error.response.data.error })
      },
    })
  }

  const getUserTypes = async () => {
    await getApi({
      end_point: 'common-api/user-types',
      resolve: (res: ApiResPonseType) => setUserTypes(res.data as object[]),
    })
  }

  useEffect(() => {
    getUserTypes()
  }, [])

  useEffect(() => {
    getItems({ endPoint: 'users' })
  }, [getItems])

  const getUserType = React.useCallback((user_type: AnyObject) => {
    return user_type.user_type_name
  }, [])

  return (
    <>
      <CardBoxModal
        title="Add New User"
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
            { name: 'first_name', Label: 'First Name', helper: 'Enter your first name' },
            { name: 'last_name', Label: 'Last Name', helper: 'Enter your last name' },
            { name: 'mobile_number', Label: 'Mobile Number', helper: 'Enter your mobile number' },
            { name: 'password', Label: 'Password', helper: 'Enter your password' },
            {
              name: 'user_type_id',
              Label: 'Choose user type',
              helper: 'type',
              options: [{ label: 'Choose user type', value: '0' }, ...userTypesOptions],
            },
          ]}
        />
      </CardBoxModal>

      <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={!!isModalDel}
        onConfirm={handleDelete}
        onCancel={modalClose}
      >
        <p>User are going to remove from data list </p>
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
            m_user_type: getUserType(it.user_type as AnyObject),
          }))}
          headers={[
            { key: 'first_name', label: 'First Name' },
            { key: 'm_last_name', label: 'Last Name' },
            { key: 'mobile_number', label: 'Mobile Number' },
            { key: 'm_user_type', label: 'User Type' },
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
