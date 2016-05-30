import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Checklists from '/imports/api/Checklists'
import LogIn from '/imports/components/LogIn'
import MyChecklists from '/imports/components/MyChecklists'
import NewChecklistForm from '/imports/components/NewChecklistForm'

const Dashboard = React.createClass({
  logout(event){
    Meteor.logout()
  },
  handleDelete(checklistId){
    Meteor.call('Checklists.remove', checklistId)
  },
  render(){
    if(!this.props.loggedIn){
      content=<LogIn />
    }
    else {
      content=(
        <div>
          <Link to="/" onClick={()=>Meteor.logout()}>Logout</Link>
          <MyChecklists userId={Meteor.userId()} />
          <NewChecklistForm />
        </div>
      )
    }
    return content
  }
})

export default createContainer(() => {
  return {
    loggedIn: Meteor.userId(),
  }
}, Dashboard)


let newChecklistForm={paddingTop: 20}