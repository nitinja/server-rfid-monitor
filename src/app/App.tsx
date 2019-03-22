import React, { Component } from 'react'
import { Editor, EditorFormValues } from '../editor/editor'

/* Main App */
class App extends Component {
  dummySubmit = async (values: EditorFormValues) => {
    console.log(values)
    return null
  }

  public render() {
    return (
      <div>
        <h1>RFID Enabled Server Monitor</h1>
        <h2>Sample form to test Formik and ant-ui</h2>
        <Editor submit={this.dummySubmit} />
      </div>
    )
  }
}

export default App
