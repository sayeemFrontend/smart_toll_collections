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

export default function OperatorScannerDeviceTable() {
  const { isError, isLoading, getItems, delItems, postItem, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)
  const [nfcSDevices, setNfcSDevices] = useState([])
  const [operators, setOperators] = useState([])

  const modalClose = () => {
    setIsModalAdd(null)
    setIsModalDel(null)
  }
  const handleDeleteItems = async () => {
    const item = isModalDel as { id: number | string }
    await delItems({
      ids: [item.id],
      endPoint: 'operator-scanner-device/delete',
      resolve: (res) => {
        notify({ message: res.message })
      },
    })
    setIsModalDel(null)
  }

  const handleFormData = async (formData) => {
    await postItem({
      endPoint: 'operator-scanner-device/create',
      data: formData,
      reject: (error) => {
        console.log(error)
        notify({ message: error.response.data.error })
      },
    })
  }

  const getOptionsData = async () => {
    await getMultipleApi({
      end_points: ['users?user_type_id=3', 'nfc-scanner-device/all'],
      resolve: ([operators, nfcs]: MultiApiResponse) => {
        if (operators.status) {
          const data = operators.data as AnyObject[]
          setOperators(
            () =>
              data?.map((op) => ({
                label: `${op.first_name} ${op.last_name}`,
                value: op.id,
              }))
          )
        }
        if (nfcs.status) {
          const data = nfcs.data as AnyObject[]
          setNfcSDevices(
            () =>
              data?.map((op) => ({
                label: `${op.name}`,
                value: op.id,
              }))
          )
        }
      },
    })
  }

  useEffect(() => {
    getOptionsData()
  }, [])

  useEffect(() => {
    getItems({ endPoint: 'operator-scanner-device/all' })
  }, [getItems])

  const getOperatorName = React.useCallback((user: AnyObject) => {
    const { first_name, last_name } = user
    return `${first_name} ${last_name}`
  }, [])

  const getScannerName = React.useCallback((user: AnyObject) => {
    const { name } = user
    return name
  }, [])

  const getModelName = React.useCallback((user: AnyObject) => {
    const { model_name } = user
    return model_name
  }, [])

  return (
    <>
      <CardBoxModal
        title="Add New "
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
            {
              name: 'operator_id',
              Label: 'Choose operator',
              options: [{ label: 'None', value: null }, ...operators],
            },
            {
              name: 'nfc_scanner_device_id',
              Label: 'Choose NFC scanner device',
              options: [{ label: 'None', value: null }, ...nfcSDevices],
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
          }}
          dataList={data?.map((it: AnyObject) => ({
            ...it,
            m_operator_name: getOperatorName(it.operator as AnyObject),
            m_scanner_name: getScannerName(it.nfc_scanner_device as AnyObject),
            m_model_name: getModelName(it.nfc_scanner_device as AnyObject),
          }))}
          headers={[
            { key: 'm_operator_name', label: 'Operator Name' },
            { key: 'm_scanner_name', label: 'Scanner Name' },
            { key: 'm_model_name', label: 'Model Name' },
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
