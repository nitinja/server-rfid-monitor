import { Button, Form, Input } from 'antd'
import { FormikErrors, FormikProps, withFormik } from 'formik'
import * as React from 'react'
import { FormItemLayout } from '../shared/common-layout'

interface Props {
  submit: (values: EditorFormValues) => Promise<FormikErrors<EditorFormValues> | null>
}

/* Form values */
export interface EditorFormValues {
  color1: string
  color2: string
}

class _Editor extends React.PureComponent<FormikProps<EditorFormValues> & Props> {
  public render() {
    const { handleChange, handleBlur, handleSubmit, values } = this.props
    return (
      <Form
        {...FormItemLayout}
        className="login-form"
        style={{ width: 500 }}
        onSubmit={handleSubmit}
      >
        <Form.Item label="Primary Color 1">
          <Input
            name="color1"
            style={{ backgroundColor: values.color1 }}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.color1}
          />
        </Form.Item>
        <Form.Item label="Primary Color 2">
          <Input
            name="color2"
            style={{ backgroundColor: values.color2 }}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.color2}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export const Editor = withFormik<Props, EditorFormValues>({
  mapPropsToValues: props => {
    return {
      color1: '#BADA55',
      color2: '#A55A55',
    }
  },
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    }
  },
})(_Editor)
