import React from 'react'

const Main = React.createClass({
  render() {
    return (
      <div>
        {this.props.loggedIn ? <h4>Logged in</h4> : <h4>Please login</h4>}
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
        
      </div>
    )
  }
})

export default Main