import React, { Component } from 'react'
import {
  Page,
  Form,
  CellsTitle,
  FormCell,
  CellHeader,
  Label,
  CellBody,
  Input,
  ButtonArea,
  Button
} from 'react-weui'
import RoomPicker from './RoomPicker'

const compressionFeeStep = 15 /** 二次加压费 15元/月 */
const pmFeeStep = 1.9 /** 物业费 1.9元/平米/月 */

class PmExpense extends Component {
  constructor(props) {
    super(props)
    this.state = {
      areaAbove: 152.67, /** 地上面积 */
      areaBelow: 0, /** 地下面积 */
      /** 二次加压费 */
      compressionFeeStart: '2019-03-01',
      compressionFeeEnd: '2020-02-29',
      compressionFee: 180,
      compressFeeDeduction: 0,
      compressionFeeDiscount: 1.8,
      /** 物业费 */
      pmFeeStart: '2019-03-01',
      pmFeeEnd: '2020-02-29',
      pmFee: 3480.88,
      pmFeeDeduction: 0,
      pmFeeDiscount: 34.81,
    }
  }

  render() {
    return (
      <Page infiniteLoader={false}>
        <CellsTitle>物业缴费</CellsTitle>
        <Form>
          <RoomPicker />

          <FormCell>
            <CellHeader>
              <Label>地上面积</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.areaAbove} readOnly />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>地下面积</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.areaBelow} readOnly />
            </CellBody>
          </FormCell>

          <CellsTitle>二次加压费: 15元/月</CellsTitle>

          <FormCell>
            <CellHeader>
              <Label>起始日期</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue={this.state.compressionFeeStart}/>
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>截止日期</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue={this.state.compressionFeeEnd} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>应缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.compressionFee} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>减免金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.compressFeeDeduction} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>折扣金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.compressionFeeDiscount} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>实缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.compressionFee - this.state.compressFeeDeduction - this.state.compressionFeeDiscount} />
            </CellBody>
          </FormCell>

          <CellsTitle>物业费: 1.9元/平米/月</CellsTitle>

          <FormCell>
            <CellHeader>
              <Label>起始日期</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue={this.state.pmFeeStart}/>
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>截止日期</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue={this.state.pmFeeEnd} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>地上面积</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.areaAbove} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>地下面积</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.areaBelow} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>应缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.pmFee} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>减免金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.pmFeeDeduction} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>折扣金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.pmFeeDiscount} />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>实缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.pmFee - this.state.pmFeeDeduction - this.state.pmFeeDiscount} />
            </CellBody>
          </FormCell>

          <CellsTitle>合计</CellsTitle>

          <FormCell>
            <CellHeader>
              <Label>应缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={this.state.compressionFee + this.state.pmFee} readonly />
            </CellBody>
          </FormCell>

          <FormCell>
            <CellHeader>
              <Label>实缴金额</Label>
            </CellHeader>
            <CellBody>
              <Input defaultValue={
                this.state.compressionFee + this.state.pmFee -
                this.state.compressFeeDeduction -
                this.state.compressionFeeDiscount -
                this.state.pmFeeDeduction -
                this.state.pmFeeDiscount} readonly />
            </CellBody>
          </FormCell>

          <ButtonArea>
            <Button>去缴费</Button>
          </ButtonArea>

        </Form>
      </Page>
    )
  }
}

export default PmExpense
