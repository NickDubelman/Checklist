import React from 'react'
import {render} from 'react-dom'

import Main from '/imports/client/components/Main'

Meteor.startup(()=>{
	render(<Main loggedIn={!!Meteor.userId()}/>, document.getElementById('app'))
})

/*ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "115846289761-mveqp3kqp2mfn6tnf5k2m3o3iq431omg.apps.googleusercontent.com",
      loginStyle: "redirect",
      secret: "II7vJKDV5qaYUx9hcfawDrgI"
    }
  }
);*/