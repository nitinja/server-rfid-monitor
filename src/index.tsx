import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './app/app'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

/* sample action fired to test redux */
setTimeout(() => {
  store.dispatch({ type: 'SAMPLE_ACTION' })
}, 2000)

if (process.env.NODE_ENV !== 'production') {
  console.log('App is up and running in dev mode!')
}
