import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from "./store"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import AdminLayout from "./layouts/Admin.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/animate.min.css"
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0"
import "./assets/css/demo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import {getDevicesAsync, getRealtimeAsync} from "./features/device/deviceSlice"

const store = configureStore()
store.dispatch(getDevicesAsync())
let interval = setInterval(()=>{
  console.log("getting devices")
  store.dispatch(getDevicesAsync())
}, 5000)

const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <AdminLayout {...props} />}/>
          {/*<Redirect from="/*" to="/admin"/>*/}
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )

renderApp()
