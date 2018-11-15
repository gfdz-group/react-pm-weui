import React from 'react'
import { FlexItem } from 'react-weui'

const IconBox = (props) => {
  return (
    <FlexItem className="icon-box"
      style={props.style}
      onClick={typeof props.onClick === 'function' ? props.onClick : () => {}}>
      {props.icon}
      <span>{props.name}</span>
    </FlexItem>
  )
}

export default IconBox
