import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Checklists from '/imports/api/Checklists'

const MyChecklists = ({checklists, deleteChecklist}) => (
      <div>
        <h1>Your Checklists</h1>
        {checklists.map(
            (checklist) => 
              <div key={checklist._id} className="checklistLink" >
                <Link to={`/checklist/${checklist._id}`}>
                  {checklist.name} 
                </Link>
                <span onClick={()=>deleteChecklist()} className="deleteIcon"> &#10060; </span>
              </div>
        )}
      </div>
)

export default createContainer((props) => {
  Meteor.subscribe('myChecklists')
  return {
    checklists: Checklists.find().fetch()
  }
}, MyChecklists)
