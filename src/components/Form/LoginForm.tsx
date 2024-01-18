import React from 'react'
import Button from '../Button'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import FormField from './Field'
import FormCheckRadio from './CheckRadio'
import Divider from '../Divider'
import Buttons from '../Buttons'
import { loginByToken } from '../apis/native_apis'
import { AnyObject } from '../apis/api_types'

const LoginForm = () => {
  const handleSubmit = async (formValues: AnyObject) => {
    await loginByToken(formValues)
  }

  const initialValues = {
    mobile_number: '0292939233',
    password: '',
    remember: true,
  }

  return (
    <div className="min-w-max lg:w-[400px]">
      <CardBox className="shadow-2xl">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <FormField label="Phone Number" help="Please enter your Phone Number">
              <Field name="mobile_number" />
            </FormField>

            <FormField label="Password" help="Please enter your password">
              <Field name="password" type="password" />
            </FormField>

            <FormCheckRadio type="checkbox" label="Remember">
              <Field type="checkbox" name="remember" />
            </FormCheckRadio>

            <Divider />

            <Buttons>
              <Button type="submit" label="Login" color="info" />
              <Button href="/dashboard" label="Home" color="info" outline />
            </Buttons>
          </Form>
        </Formik>
      </CardBox>
    </div>
  )
}

export default LoginForm
