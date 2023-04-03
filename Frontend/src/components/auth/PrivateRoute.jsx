import React from 'react'
import { isAuthenticated } from '../../helper/helper'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Child}) => {
  return isAuthenticated() ? <Child /> : <Navigate to='/' />
}

export default PrivateRoute