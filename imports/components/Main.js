import React from 'react'

const Main = (props) => (
  <div>
    {React.cloneElement(props.children, { ...props, key: undefined, ref: undefined })}    
  </div>
)

export default Main