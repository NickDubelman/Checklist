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
    if ( checklistName === '' 
      || checklistName === null 
      || checklistName.trim() === ''){
      alert("Checklist name cannot be empty")
    }
    else{
      Meteor.call('Checklists.insert', checklistName)
    }
    this.refs.newChecklistForm.reset()
  },
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
          <h1>Your Checklists</h1>
          {this.props.checklists.map(
              (checklist) => 
                <div key={checklist._id} className="checklistLink" >
                  <Link to={`/checklist/${checklist._id}`}>
                    {checklist.name} 
                  </Link>
                  <span onClick={()=>this.handleDelete(checklist._id)} className="deleteIcon"> &#10060; </span>
                </div>
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


let newChecklistForm={paddingTop: 20}