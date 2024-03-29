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
import { getMultipleApi } from '../apis/methods'
import FormMaker from '../Form/FormMaker'

export default function TransactionLogsTable() {
  const { isError, isLoading, getItems, delItems, postItem, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)
  const [nfcCards, setNfcCards] = useState([])
  const [operators, setOperators] = useState([])

  const modalClose = () => {
    setIsModalAdd(null)
    setIsModalDel(null)
  }

  const handleDeleteItems = async () => {
    const item = isModalDel as { id: number | string }
    await delItems({
      ids: [item.id],
      endPoint: 'transaction-log/delete',
      resolve: (res) => {
        notify({ message: res.message })
      },
    })
    setIsModalDel(null)
  }

  const handleFormData = async (formData) => {
    await postItem({
      endPoint: 'transaction-log/add',
      data: formData,
      reject: (error) => {
        console.log(error)
        notify({ message: error.response.data.error })
      },
    })
  }

  const getOptionsData = async () => {
    await getMultipleApi({
      end_points: ['users?user_type_id=3', 'nfc-card/all'],
      resolve: ([operators, nfc]: MultiApiResponse) => {
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
        if (nfc.status) {
          const data = nfc.data as AnyObject[]
          setNfcCards(
            () =>
              data?.map((op) => ({
                label: `${op.nfc_card_no} (${op.id})`,
                value: op.nfc_card_no,
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
    getItems({ endPoint: 'transaction-log/all' })
  }, [getItems])

  const getName = React.useCallback((user: AnyObject) => {
    const { first_name, last_name } = user
    return `${first_name} ${last_name}`
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
              options: [{ label: 'None', value: '0' }, ...operators],
            },
            {
              name: 'nfc_card_no',
              Label: 'Choose nfc card',
              options: [{ label: 'None', value: '0' }, ...nfcCards],
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
            m_name: getName(it),
          }))}
          headers={[
            { key: 'id', label: 'Transaction ID' },
            { key: 'm_name', label: 'User Name' },
            { key: 'mobile_number', label: 'Mobile Number' },
            { key: 'charge_amount', label: 'Charge Amount (tk)' },
            { key: 'ts', label: 'Transaction Time' },
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
