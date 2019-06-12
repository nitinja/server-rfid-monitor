import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Login } from '../auth/Login'
import { PrivateRoute } from '../auth/Private-route'
import Dashboard from '../dashboard/Dashboard'
import { hot } from 'react-hot-loader/root'
import AppLayout from '../layout/Layout'
// import { setConfig } from 'react-hot-loader'

// setConfig({
//     reloadHooks: false
// })

/* Main App */

class App extends Component<any> {
    // private dummySubmit = async (values: EditorFormValues) => {
    //     console.log(values)
    //     return null
    // }

    public render(): React.ReactNode {
        return (
            <AppLayout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/" exact component={Dashboard} />
                </Switch>
            </AppLayout>
        )
    }
}

export default (process.env.NODE_ENV === 'development' ? hot(App) : App)
