import React from 'react'
import {render} from 'react-dom'

import Main from '/imports/client/components/Main'

Meteor.startup(()=>{
	render(<Main loggedIn={!!Meteor.userId()}/>, document.getElementById('app'))
})

