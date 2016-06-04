import React from 'react'

const LoginComponent = BlazeToReact('atForm');

const LogIn = () => (
  <div>
    <h1>Please login to continue.</h1>
    <LoginComponent />
  </div>
)

export default LogIn