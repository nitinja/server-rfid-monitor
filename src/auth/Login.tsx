import { Field, Form, FormikProps, withFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { login } from './login-reducer'

interface FormValues {
    email: string
    password: string
}
interface MyFormProps {
    initialEmail: string
    message: string
    history: any
    login: Function
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

const LoginWithFormik = withFormik<MyFormProps, FormValues>({
    mapPropsToValues({ initialEmail }) {
        return {
            email: initialEmail || '',
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
    handleSubmit({ email, password }, { props, setErrors, setSubmitting }) {
        props.login(email, password)
    },
})(_Login)

export const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export const mapDispatchToProps = (dispatch: Function) => ({
    login: (username: string, password: string) => dispatch(login(username, password)),
})

export const Login = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginWithFormik)
