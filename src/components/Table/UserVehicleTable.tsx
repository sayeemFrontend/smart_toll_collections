import React, { useEffect, useState } from 'react'
import CustomTable from './CustomTable'
import { AnyObject, MultiApiResponse } from '../apis/api_types'
import CardBoxModal from '../CardBox/Modal'
import { useApiSlice } from '../../hooks/custom_hooks'
import Suspender from '../suspender/Suspender'
import CardBox from '../CardBox'
import CardBoxComponentEmpty from '../CardBox/Component/Empty'
import { PaginatedItems } from '../pagination/Paginate'
import { notify } from '../Notify'
import FormMaker from '../Form/FormMaker'
import { getMultipleApi } from '../apis/methods'

export default function UserVehicleTable() {
  const { isError, isLoading, getItems, delItems, postItem, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)
  const [isModalUpdate, setIsModalUpdate] = useState<null | AnyObject>(null)
  const [vehicleTypesOptions, setVehicleTypesOptions] = useState([])
  const [userOptions, setUserOptions] = useState([])
  const [nfcCardsOptions, setNfcCardsOptions] = useState([])

  const modalClose = () => {
    setIsModalAdd(null)
    setIsModalDel(null)
    setIsModalUpdate(null)
  }

  const getOptionsData = async () => {
    await getMultipleApi({
      end_points: ['users', 'nfc-card/all', 'common-api/vehicle-types'],
      resolve: ([users, nfcs, vehicles]: MultiApiResponse) => {
        if (users.status) {
          const data = users.data as AnyObject[]
          setUserOptions(
            () => data?.map((op) => ({ label: `${op.first_name} ${op.last_name}`, value: op.id }))
          )
        }
        if (nfcs.status) {
          const data = nfcs.data as AnyObject[]
          setNfcCardsOptions(
            () =>
              data?.map((op) => ({ label: `${op.nfc_card_no} (${op.id})`, value: op.nfc_card_no }))
          )
        }
        if (vehicles.status) {
          const data = vehicles.data as AnyObject[]
          setVehicleTypesOptions(
            () => data?.map((op) => ({ label: `${op.type_name}`, value: op.id }))
          )
        }
      },
    })
  }

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

  const handleFormData = async (formData) => {
    if (isModalUpdate) {
      await postItem({
        endPoint: 'user-vehicle/update',
        data: { ...formData, ...isModalUpdate },
        reject: (error) => {
          console.log(error)
          notify({ message: error.response.data.error })
        },
      })
    } else {
      await postItem({
        endPoint: 'user-vehicle/create',
        data: formData,
        reject: (error) => {
          console.log(error)
          notify({ message: error.response.data.error })
        },
      })
    }
  }

  useEffect(() => {
    getOptionsData()
  }, [])

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
  console.log(isModalUpdate)

  return (
    <>
      <CardBoxModal
        title={`${isModalUpdate ? 'Update User Vehicle' : 'Add New '}`}
        buttonColor="info"
        buttonLabel="Done"
        isActive={!!isModalAdd || !!isModalUpdate}
        onCancel={modalClose}
        actionBar={false}
      >
        <FormMaker
          prevData={isModalUpdate}
          btnLabel={`${isModalUpdate ? 'Update' : 'Add'}`}
          handleFormSubmit={handleFormData}
          formFields={[
            { name: 'reg_no', Label: 'Reg No', helper: 'Enter your reg. no' },
            {
              name: 'user_id',
              Label: 'User',
              options: [{ label: 'Choose', value: 'null' }, ...userOptions],
            },
            {
              name: 'nfc_card_no',
              Label: 'NFC CARD',
              options: [{ label: 'Choose', value: 'null' }, ...nfcCardsOptions],
            },
            {
              name: 'vehicle_type_id',
              Label: 'Vehicle type',
              options: [{ label: 'Choose', value: 'null' }, ...vehicleTypesOptions],
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
        onCancel={() => setIsModalDel(null)}
      >
        <p>You are going to remove from data list </p>
        <p>Confirm if you are sure</p>
      </CardBoxModal>
      <Suspender isLoading={isLoading} isError={isError}>
        <CustomTable
          actions={{
            add: () => setIsModalAdd({}),
            del: (item) => setIsModalDel(item),
            edit: (item) => setIsModalUpdate(item),
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
