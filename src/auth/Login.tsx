import { Field, Form, FormikProps, withFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

interface FormValues {
  email: string
  password: string
}
interface MyFormProps {
  initialEmail: string
  message: string
}

const _Login = (props: MyFormProps & FormikProps<FormValues>) => {
  const { message, touched, errors } = props
  /* TODO: replace with and controls */
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" placeholder="your email" />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <button type="submit">Login</button>
    </Form>
  )
}

export const Login = withFormik<MyFormProps, FormValues>({
  mapPropsToValues({ initialEmail }) {
    return {
      email: initialEmail || '',
      newsletter: false,
      password: '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
  }),
  handleSubmit(values) {
    // console.log(values);
  },
})(_Login)
