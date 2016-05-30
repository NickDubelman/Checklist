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
          <Link to="/" onClick={()=>this.props.logout()}>Logout</Link>
          <MyChecklists deleteChecklist={()=>this.props.deleteChecklist()} userId={this.props.currUser} />
          <NewChecklistForm />
        </div>
      )
    }
    return content
  }
})

const mapStateToProps = (state) => {
  return{
    loggedIn: state.auth.loggedIn,
    currUser: state.auth.currUser
  }
}

export default connect(mapStateToProps)(Dashboard)

let newChecklistForm={paddingTop: 20}