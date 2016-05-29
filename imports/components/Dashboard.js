import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Checklists from '/imports/api/Checklists'
import LogIn from '/imports/components/LogIn'

const Dashboard = React.createClass({
  handleSubmit(event){
    event.preventDefault()
    const checklistName = this.refs.checklistName.value
    Meteor.call('Checklists.insert', checklistName)
    this.refs.newChecklistForm.reset()
  },
  logout(event){
    Meteor.logout()
  },
  render(){
    if(!this.props.loggedIn){
      content=<LogIn />
    }
    else {
      content=(
        <div>
          <Link to="/" onClick={()=>Meteor.logout()}>Logout</Link>
          <h1>Your Checklists</h1>
          {this.props.checklists.map(
              (checklist) => <Link style={linkStyle} to={`/checklist/${checklist._id}`} key={checklist._id}>{checklist.name}</Link>
          )}
          <form style={newChecklistForm} ref="newChecklistForm" onSubmit={this.handleSubmit}>
            <input ref="checklistName" type="text" placeholder="Checklist name" />
            <button type="submit">Create</button>
          </form>
        </div>
      )
    }
    return content
  }
})

export default createContainer(() => {
  Meteor.subscribe('myChecklists')
  return {
    loggedIn: Meteor.userId(),
    checklists: Checklists.find().fetch()
  }
}, Dashboard)

let linkStyle={display: "block"}
let newChecklistForm={paddingTop: 20}