import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Login } from '../auth/login'
import { PrivateRoute } from '../auth/private-route'
import Dashboard from '../dashboard/dashboard'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../layout/layout'

/* Main App */
class App extends Component<any> {
    public render(): React.ReactNode {
        return (
            <>
                <CssBaseline />
                <Layout>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/" exact component={Dashboard} />
                    </Switch>
                </Layout>
            </>
        )
    }
}

export default App
