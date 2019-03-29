import React, { Component } from 'react'
import { AppLayout } from '../layout/layout';

/* Main App */

class App extends Component<any> {
    // private dummySubmit = async (values: EditorFormValues) => {
    //     console.log(values)
    //     return null
    // }

    public render(): React.ReactNode {
        return (
          <AppLayout></AppLayout>
        )
    }
}

export default App
