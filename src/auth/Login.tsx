// import { Field, Form, FormikProps, withFormik } from 'formik'
import { Button, Checkbox, Form, Icon, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import React from 'react'

interface MyFormProps {
    initialEmail: string
    message: string
}

class NormalLoginForm extends React.Component<MyFormProps & FormComponentProps> {
    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div style={{ maxWidth: '20rem', margin: '0 auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <Icon
                        type="fire"
                        theme="twoTone"
                        twoToneColor="#58CCED"
                        style={{ fontSize: '8rem', marginBottom: '2rem' }}
                    />
                </div>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {/* {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)} */}
                        <div>
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </div>

                        <Button block type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <div style={{ textAlign: 'center' }}>
                            <a href="">register now!</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export const Login = Form.create({ name: 'normal_login' })(NormalLoginForm)
