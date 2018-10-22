import React,{ Component } from 'react'
import { Page, CellsTitle, Form, FormCell, CellHeader, Label, CellBody, Input,
  ButtonArea, Button, Agreement,
  Preview, PreviewHeader, PreviewBody, PreviewItem
} from 'react-weui'
import { dateFormat } from '../../utils'

class Order extends Component {
  constructor() {
    super()
    const curr = new Date();
    curr.setDate(curr.getDate()+1);
    this.state = {
      username: '',
      mobile: '',
      inDate: new Date(),
      outDate: curr,
    }
  }

  render() {
    const { inDate, outDate } = this.state
    const inDateShow = dateFormat(inDate)
    const outDateShow = dateFormat(outDate)

    return (
      <Page className="order" ptr={false} infiniteLoader={false}>

        <Preview>
          <PreviewHeader>
            <PreviewItem label="订金" value="100.00"></PreviewItem>
          </PreviewHeader>
          <PreviewBody>
            <PreviewItem label="房型" value="Room Type"></PreviewItem>
            <PreviewItem label="设施" value="Product Facilities"></PreviewItem>
            <PreviewItem label="服务" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. "></PreviewItem>
          </PreviewBody>
        </Preview>
        <br />

        <CellsTitle>联系人</CellsTitle>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>姓名</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请输入姓名" />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>手机</Label>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="请输入联系电话" />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>入住</Label>
            </CellHeader>
            <CellBody>
              <Input type="date"  defaultValue={inDateShow} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>退房</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue={outDateShow} />
            </CellBody>
          </FormCell>

          <Agreement>
            &nbsp;&nbsp;我同意 <a href="javascript:;">养老公寓服务协议</a>
          </Agreement>

          <ButtonArea>
            <Button>
              提交订单
            </Button>
          </ButtonArea>
        </Form>
      </Page>
    )
  }
}

export default Order
