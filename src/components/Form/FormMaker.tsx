import React from 'react'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import { FormFieldType } from './formTpes'
import FormField from './Field'
import Divider from '../Divider'
import Buttons from '../Buttons'
import Button from '../Button'

interface PropsType {
  formFields: FormFieldType[]
  handleFormSubmit: (formValues) => void
  btnLabel?: string
}

export default function FormMaker({ formFields, handleFormSubmit, btnLabel = 'add' }: PropsType) {
  const handleSubmit = (formData) => handleFormSubmit(formData)

  const initialValues = {}
  formFields?.forEach((f) => {
    initialValues[f.name] = f.valueInit || ''
  })

  return (
    <div className="min-w-max lg:w-[400px]">
      <CardBox className="shadow-2xl">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            {formFields?.map((f_item) => (
              <FormField
                key={f_item.name}
                label={`${f_item.Label || ''}`}
                help={`${f_item.helper || ''}`}
              >
                <Field name={`${f_item.name}`} type={`${f_item.type || 'text'}`} />
              </FormField>
            ))}

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
