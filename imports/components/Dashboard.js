import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'

import LogIn from '/imports/components/LogIn'
import MyChecklists from '/imports/components/MyChecklists'
import NewChecklistForm from '/imports/components/NewChecklistForm'

const Dashboard = React.createClass({
  render(){
    if(!this.props.loggedIn){
      content=<LogIn />
    }
    else {
      content=(
        <div>
          <Link to="/" onClick={()=>AccountsTemplates.logout()}>Logout</Link>
          <MyChecklists removeChecklist={this.props.removeChecklist} checklists={this.props.checklists}/>
          <NewChecklistForm newChecklist={this.props.newChecklist}/>
        </div>
      )
    }
    return content
  }
})

export default Dashboard
