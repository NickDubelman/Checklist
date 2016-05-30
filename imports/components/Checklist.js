import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Checklists from '/imports/api/Checklists'

const Checklist = React.createClass({
  render() {
      return(
        <div>
          <Link style={back} to="/">Back</Link>
          <h2>{this.props.name}</h2>
        </div>
      )
  }
})

export default createContainer((props) => {
  Meteor.subscribe('myChecklists')
  curr = Checklists.findOne({_id: props.params.checklistId})
  if(curr){
    name = curr.name
  }
  return {
    name: name
  }
}, Checklist)

let back={
  display: "block"
}