import { useCallback, useState } from 'react'
import { credentials } from '../components/apis/credentials'
import { capitalize, checkEmpty, joinQueryParam, removeNullParams } from '../utils'
import axios from 'axios'
import { AnyObject } from '../components/apis/api_types'
import { CUSTOMER_USER } from '../components/apis/native_apis'
import { useSelector } from 'react-redux'

export interface FormResponseType {
  status: boolean
  data: unknown
}
export interface DefaultProps {
  children?: React.ReactElement | React.ReactElement[]
  className?: string
}

export type FormFieldType = {
  value: unknown
  required?: boolean
  error?: string
  errorLabel?: string
}
export type FormDataType = {
  [key: string]: FormFieldType
}

export function useFormData(initFormData: FormDataType = {}) {
  const [formData, updateFormData] = useState<FormDataType>(initFormData)
  const [error, updateError] = useState({})

  const handleChange = useCallback((fieldName: string, data: FormFieldType) => {
    updateFormData((state: FormDataType) => ({
      ...state,
      [fieldName]: { ...data },
    }))
  }, [])

  const handleSubmit = (
    resolve = (res: FormResponseType) => {
      console.log(res)
    }
  ) => {
    const err: { [key: string]: string | boolean } = {}

    const submittableData = {}

    for (const key in formData) {
      const { value = '', required = false, error = false, errorLabel = '' } = formData[key]
      submittableData[key] = value
      if (checkEmpty(value) && required) {
        const errMsg = `${errorLabel || capitalize(key).split('_').join(' ')} is required`
        err[key] = errMsg
        updateFormData((state) => ({
          ...state,
          [key]: { ...state[key], error: errMsg },
        }))
      } else if (error) {
        err[key] = error
      }
    }

    if (!Object.keys(err).length) {
      resolve({ status: true, data: submittableData })
    } else {
      updateError(err)
      resolve({ status: false, data: err })
    }
  }
  const resetForm = useCallback(() => {
    updateFormData(initFormData)
  }, [initFormData])

  return { formData, error, handleChange, handleSubmit, resetForm }
}

interface ApiResponseTypeDefault {
  data?: unknown
  pagination?: unknown
}
interface ResponseType<RespT> {
  isLoading: boolean
  isError: boolean | string
  result: RespT
}
export function useApiSlice(query: AnyObject) {
  const baseUrl = credentials.baseUrl

  const [queryObject, updateQueryObject] = useState(query)
  const [promise, updatePromise] = useState<ResponseType<ApiResponseTypeDefault>>({
    isLoading: true,
    isError: false,
    result: { data: [], pagination: {} },
  })
  const getItems = useCallback(
    async ({
      endPoint = '',
      query = {},
      resolve,
      reject,
    }: {
      endPoint: string
      query?: object
      resolve?: (res) => void
      reject?: (err) => void
    }) => {
      const options = removeNullParams({ ...queryObject, ...query })
      const makeUrl = `${baseUrl}/${endPoint}?${joinQueryParam(options)}`
      try {
        const response = await axios({
          url: makeUrl,
          method: 'GET',
          headers: await credentials.getHeaders(),
        })
        if (response.status) {
          if (resolve) {
            resolve(response.data)
          }
          const { ...restObject } = response.data
          updatePromise((state) => ({
            ...state,
            isLoading: false,
            isError: false,
            result: { ...restObject },
          }))
        } else {
          throw new Error(JSON.stringify({ err: response.data }))
        }
      } catch (error) {
        if (reject) {
          reject(error)
        }
        updatePromise((state) => ({
          ...state,
          isLoading: false,
          isError: JSON.stringify(error),
        }))
      }
    },
    [queryObject, baseUrl]
  )

  const delItems = useCallback(
    async ({
      ids = [],
      endPoint = '',
      resolve,
      reject,
    }: {
      ids: Array<string | number>
      endPoint: string
      resolve?: (res) => void
      reject?: (err) => void
    }) => {
      const makeUrl = `${baseUrl}/${endPoint}/${ids.join(',')}`
      try {
        const response = await axios({
          url: makeUrl,
          method: 'DELETE',
          headers: await credentials.getHeaders(),
        })
        if (response.status) {
          if (resolve) {
            resolve(response.data)
          }
          // const { status, ...restObject } = response.data;
          const { data: prevData = [], pagination } = promise.result as {
            data: { [key: string]: unknown; id: string | number }[]
            pagination?: object
          }
          const deletedItems = prevData?.filter((it) => (it.id ? !ids.includes(it.id) : true))
          updatePromise((state) => ({
            ...state,
            isLoading: false,
            isError: false,
            result: { data: deletedItems, pagination },
          }))
        } else {
          throw new Error(JSON.stringify({ err: response.data }))
        }
      } catch (error) {
        if (reject) {
          reject(error)
        }

        updatePromise((state) => ({
          ...state,
          isLoading: false,
          isError: JSON.stringify(error),
        }))
      }
    },
    [promise, baseUrl]
  )

  const postItem = useCallback(
    async ({
      endPoint = '',
      data = {},
      reject,
      resolve,
    }: {
      endPoint: string
      data: unknown
      resolve?: (res) => void
      reject?: (err) => void
    }) => {
      const makeUrl = `${baseUrl}/${endPoint}`

      try {
        const response = await axios({
          url: makeUrl,
          method: 'POST',
          data: data,
          headers: await credentials.getHeaders(),
        })
        if (response.status) {
          if (resolve) {
            resolve(resolve)
          }

          // const { status, ...restObject } = response.data;
          const { data: prevData = [], pagination = {} } = promise.result as {
            data: []
            pagination: object
          }
          updatePromise((state) => ({
            ...state,
            isLoading: false,
            isError: false,
            result: { data: [...prevData, data], pagination },
          }))
        } else {
          throw new Error(JSON.stringify({ err: response.data }))
        }
      } catch (error) {
        if (reject) {
          reject(error)
        }

        updatePromise((state) => ({
          ...state,
          isLoading: false,
          isError: JSON.stringify(error),
        }))
      }
    },
    [promise, baseUrl]
  )

  const updateItem = useCallback(
    async ({
      endPoint = '',
      data,
      reject,
      resolve,
    }: {
      endPoint: string
      data: { [key: string]: unknown; id: string | number }
      resolve?: (res) => void
      reject?: (err) => void
    }) => {
      const makeUrl = `${baseUrl}/${endPoint}`
      try {
        const response = await axios({
          url: makeUrl,
          method: 'UPDATE',
          data: data,
          headers: await credentials.getHeaders(),
        })
        if (response.status) {
          if (resolve) {
            resolve(response)
          }

          // .dataconst { status, ...restObject } = response.data;
          const { data: prevData = [], pagination } = promise.result as {
            data: { [key: string]: unknown; id: string | number }[]
            pagination?: object
          }
          const updatedData =
            prevData?.map((it) => (it.id === data.id ? { ...it, ...data } : it)) || data
          updatePromise((state) => ({
            ...state,
            isLoading: false,
            isError: false,
            result: { data: updatedData, pagination },
          }))
        } else {
          throw new Error(JSON.stringify({ err: response.data }))
        }
      } catch (error) {
        if (reject) {
          reject(error)
        }

        updatePromise((state) => ({
          ...state,
          isLoading: false,
          isError: JSON.stringify(error),
        }))
      }
    },
    [promise, baseUrl]
  )
  return {
    query: queryObject,
    updateQuery: updateQueryObject,
    ...promise,
    getItems,
    delItems,
    postItem,
    updateItem,
  }
}

export function useUserInfo() {
  const { user } = useSelector((state: { userInfo: { user: AnyObject } }) => state.userInfo) || {}
  const defaultUser = {
    user_type: CUSTOMER_USER,
    description: '',
    company: {},
    id: '',
    feature: [],
    first_name: '',
    last_name: '',
    email: '',
  }
  const { user_type, company, id, feature, email, first_name, last_name, description } = checkEmpty(
    user
  )
    ? defaultUser
    : user
  const isAuthenticate = () => !!id
  return {
    user_type,
    company,
    id,
    feature,
    email,
    first_name,
    last_name,
    description,
    isAuthenticate,
  }
}
