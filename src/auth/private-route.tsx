import React from 'react';
import { Route, Redirect } from 'react-router'
import { auth } from './auth'

export const PrivateRoute = (params: any) => {
    const { component: Component, ...rest } = params

    return (
        <Route
            {...rest}
            render={props =>
                auth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}
