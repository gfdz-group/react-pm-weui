import React, {
  Component
} from 'react'
import {
  Button,
  ButtonArea,
  Page,
  CellsTitle,
  Form,
  FormCell,
  CellHeader,
  CellBody,
  Label,
  Input
} from 'react-weui'
import RoomPicker from './RoomPicker'

class Expense extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Page title="生活缴费">
        <CellsTitle>生活缴费</CellsTitle>
        <Form>
          {/** room number */}
          <RoomPicker />
          {/** fees */}
          <FormCell>
            <CellHeader>
              <Label>上期结余</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" defaultValue={0}/>
            </CellBody>
          </FormCell>
          {/** fees */}
          <FormCell>
            <CellHeader>
              <Label>应缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" defaultValue={0}/>
            </CellBody>
          </FormCell>
          {/** fees */}
          <FormCell>
            <CellHeader>
              <Label>结余抵扣</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" defaultValue={0}/>
            </CellBody>
          </FormCell>
          {/** fees */}
          <FormCell>
            <CellHeader>
              <Label>当前结余</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" defaultValue={0}/>
            </CellBody>
          </FormCell>
          {/** fees */}
          <FormCell>
            <CellHeader>
              <Label>实缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" defaultValue={0}/>
            </CellBody>
          </FormCell>
        </Form>
        {/** button */}
        <ButtonArea>
          <Button>去缴费</Button>
        </ButtonArea>
      </Page>
    )
  }
}

export default Expense
