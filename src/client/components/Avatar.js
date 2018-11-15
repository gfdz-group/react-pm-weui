import React from 'react'
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
} from 'react-weui'

const Avatar = (props) => {
  const { user } = props
  return (
    <Panel>
      <PanelBody>
        <MediaBox type="appmsg">
          <MediaBoxHeader>
            <img src={user.headPic} />
          </MediaBoxHeader>
          <MediaBoxBody>
            <MediaBoxTitle>
              {user.name}
            </MediaBoxTitle>
            <MediaBoxDescription>
              普通会员
            </MediaBoxDescription>
          </MediaBoxBody>
        </MediaBox>
      </PanelBody>
    </Panel>
  )
}

export default Avatar
