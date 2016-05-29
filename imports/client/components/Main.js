import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'

import Checklist from '/imports/client/components/Checklist'

const LoginComponent = BlazeToReact('atForm');

class Main extends React.Component{
  constructor(props){
    super(props)
  } 
  render() {
    if(this.props.loggedIn){
      content=(
        <div>
          <a href="" onClick={()=>Meteor.logout()}>Logout</a>
          <Checklist />
        </div>
      )
    }
    else{
      content=(
        <div>
          <h1>Please login to continue.</h1>
          <LoginComponent />
        </div>
      )
    }
    return content
  }
}

export default createContainer(() => {
  return {
    loggedIn: !!Meteor.userId()
  }
}, Main)