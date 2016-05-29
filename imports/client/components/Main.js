import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'

const LoginComponent = BlazeToReact('atForm');

class Main extends React.Component{
	constructor(props){
		super(props)
	}
	render() {
		if(this.props.loggedIn){
			content=(
				<div>
					<h1>You are logged in.</h1>
					<button onClick={()=>Meteor.logout()}>Logout</button>
				</div>
			)
		}
		else{
			content=(
				<div>
					<h1>Please login to continue.</h1>
					<LoginComponent />
				</div>
			)
		}
		return content
	}
}

export default createContainer(() => {
  return {
    loggedIn: !!Meteor.userId()
  }
}, Main)