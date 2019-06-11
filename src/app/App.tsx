import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Login } from '../auth/login'
import { PrivateRoute } from '../auth/private-route'
import Dashboard from '../dashboard/dashboard'
import {AppLayout} from '../layout/layout'

/* Main App */

class App extends Component<any> {
    // private dummySubmit = async (values: EditorFormValues) => {
    //     console.log(values)
    //     return null
    // }

    public render(): React.ReactNode {
        return (
            <>
                <AppLayout>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/" exact component={Dashboard} />
                    </Switch>
                </AppLayout>
            </>

        )
    }
}

export default App
