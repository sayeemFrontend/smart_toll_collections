import React, { useState } from 'react'
import Button from '../Button'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import FormField from './Field'
import Divider from '../Divider'
import Buttons from '../Buttons'
import { AnyObject } from '../apis/api_types'
import { postApi } from '../apis/methods'
import { getUserInfo } from '../apis/native_apis'
import { credentials } from '../apis/credentials'

const SignUpForm = () => {
  const [verifyForm, setVerifyForm] = useState<null | AnyObject>(null)
  const initialValues = {
    mobile_number: '',
    password: '',
    first_name: 'Hasan2',
    last_name: 'Khan2',
  }

  const handleSubmit = async (formValues: AnyObject) => {
    await postApi({
      end_point: 'auth/user/signup',
      body: formValues,
      resolve: () => {
        setVerifyForm({ mobile_number: formValues.mobile_number })
      },
      reject: (res) => {
        console.log(res)
      },
      responseAlert: true,
    })
  }

  const handleVerification = async (formData: AnyObject) => {
    const { sms_code } = formData
    await postApi({
      end_point: 'auth/user/sms-verify',
      body: { ...verifyForm, sms_code: Number(sms_code) },
      resolve: async (res) => {
        const { token, refreshToken } = res as { token: string; refreshToken: string }
        await credentials.setTokens({ token, refreshToken })
        await getUserInfo()
      },
      reject: (res) => {
        console.log(res)
      },
      responseAlert: true,
    })
  }

  return (
    <div className="min-w-max lg:w-[400px]">
      {verifyForm ? (
        <CardBox key="verify_form" className="shadow-2xl">
          <Formik initialValues={{ sms_code: '' }} onSubmit={handleVerification}>
            <Form>
              <FormField label="Enter your Code" help="Please enter your code">
                <Field name="sms_code" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" label="Verify" color="info" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      ) : (
        <CardBox className="shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormField label="Mobile Number" help="Please enter your Phone Number">
                <Field name="mobile_number" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>

              <FormField label="First Name" help="Please enter your first name">
                <Field name="first_name" type="text" />
              </FormField>
              <FormField label="Last Name" help="Please enter your last name">
                <Field name="last_name" type="text" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" label="SignUp" color="info" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      )}
    </div>
  )
}

export default SignUpForm
