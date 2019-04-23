import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { mapStateToProps } from './login'
import { AuthState } from './login-reducer'
import { AppState } from '../store'

const C = (props: any) => {
    const { component: Component, isAuthenticated, ...rest } = props

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

export const PrivateRoute = connect((state: AppState) => ({ isAuthenticated: state.auth.isAuthenticated }))(C)
