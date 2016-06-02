import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Checklists from '/imports/api/Checklists'
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
          <NewChecklistForm newChecklist={this.props.newChecklist} currUser={this.props.currUser} />
        </div>
      )
    }
    return content
  }
})

const mapStateToProps = ({auth, checklists}) => {
  return{
    loggedIn: auth.loggedIn,
    currUser: auth.currUser,
    checklists: checklists.checklists, 
  }
}

export default connect(mapStateToProps)(Dashboard)
