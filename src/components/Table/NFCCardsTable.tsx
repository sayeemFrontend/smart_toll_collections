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
import FormMaker from '../Form/FormMaker'

export default function NFCCardsTable() {
  const { isError, isLoading, getItems, delItems, postItem, updateQuery, result } = useApiSlice({
    page: 0,
    per_page: 10,
  })
  const { data = [], pagination } = result as { data: []; pagination: AnyObject }
  const [isModalAdd, setIsModalAdd] = useState<null | AnyObject>(null)
  const [isModalDel, setIsModalDel] = useState<null | AnyObject>(null)

  const modalClose = () => {
    setIsModalAdd(null)
    setIsModalDel(null)
  }

  const handleDeleteItems = async () => {
    const item = isModalDel as { id: number | string }
    await delItems({
      ids: [item.id],
      endPoint: 'nfc-card/delete',
      resolve: (res) => {
        notify({ message: res.message })
      },
    })
    setIsModalDel(null)
  }

  const handleFormData = async (formData) => {
    await postItem({
      endPoint: 'nfc-card/create',
      data: formData,
      reject: (error) => {
        console.log(error)
        notify({ message: error.response.data.error })
      },
    })
  }
  useEffect(() => {
    getItems({ endPoint: 'nfc-card/all' })
  }, [getItems])

  return (
    <>
      <CardBoxModal
        title="Add New Card"
        buttonColor="info"
        buttonLabel="Done"
        isActive={!!isModalAdd}
        onCancel={modalClose}
        actionBar={false}
      >
        <FormMaker
          btnLabel="Add"
          handleFormSubmit={handleFormData}
          formFields={[{ name: 'nfc_card_no', Label: 'NFC CARD No' }]}
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
          dataList={data}
          headers={[
            { key: 'id', label: 'NFC ID' },
            { key: 'nfc_card_no', label: 'NFC Card No' },
            { key: 'status', label: 'Status' },
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
