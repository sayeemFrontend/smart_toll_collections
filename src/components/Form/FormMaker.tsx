import React from 'react'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import { FormFieldType } from './formTpes'
import FormField from './Field'
import Divider from '../Divider'
import Buttons from '../Buttons'
import Button from '../Button'
import { AnyObject } from '../apis/api_types'

interface PropsType {
  formFields: FormFieldType[]
  handleFormSubmit: (formValues) => void
  btnLabel?: string
  prevData?: AnyObject | null
}

export default function FormMaker({
  prevData,
  formFields,
  handleFormSubmit,
  btnLabel = 'add',
}: PropsType) {
  const handleSubmit = async (formData) => await handleFormSubmit(formData)

  const initialValues = {}
  formFields?.forEach((f) => {
    const { name } = f
    initialValues[name] = prevData && prevData[name] ? prevData[name] : ''
  })

  return (
    <div className="min-w-max lg:w-[400px]">
      <CardBox className="shadow-2xl">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            {formFields?.map((f_item, i) =>
              f_item.options ? (
                <FormField
                  key={`${f_item.name + i}`}
                  label={`${f_item.Label || ''}`}
                  help={`${f_item.helper || ''}`}
                >
                  <Field as="select" name={`${f_item.name}`}>
                    {f_item.options?.map((op, i) => (
                      <option key={`${op.label + i}`} value={op.value}>
                        {op.label}
                      </option>
                    ))}
                  </Field>
                </FormField>
              ) : (
                <FormField
                  key={f_item.name}
                  label={`${f_item.Label || ''}`}
                  help={`${f_item.helper || ''}`}
                >
                  <Field name={`${f_item.name}`} type={`${f_item.type || 'text'}`} />
                </FormField>
              )
            )}

            <Divider />

            <Buttons>
              <Button type="submit" label={`${btnLabel}`} color="info" />
            </Buttons>
          </Form>
        </Formik>
      </CardBox>
    </div>
  )
}
