import React, { Component } from 'react'
import {
  Page,
  Cells,
  CellsTitle,
  Cell,
  CellBody,
  CellFooter,
} from 'react-weui'

/** data mocking */
const data = [
  {
    title: '云秀康园常用电话',
    group: [
      { name: '机票预定', phone: '0871-65099999' },
      { name: '火车票预定', phone: '400-656-6605' },
      { name: '奇妙锁业', phone: '0871-65333393' },
      { name: '片区民警', phone: '13888526213' }
    ]
  },
  {
    title: '众和康园服务热线',
    group: [
      { name: '华润燃气', phone: '0871-67474777' },
      { name: '清源自来水公司', phone: '0871-67429135' },
      { name: '城关派出所', phone: '0871-67479948' }
    ]
  },
  {
    title: '腾冲翡翠小区服务热线',
    group: [
      { name: '腾冲城乡供水公司', phone: '0875-5136150' },
      { name: '供电服务热线', phone: '0875-5183505' },
      { name: '社区民警联系卡', phone: '0875-5183994' }
    ]
  }
]

class PhoneNumList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <Page className="phone-num-list">
        {this.state.data.map((item, idx) => {
          return (
            <div key={idx}>
              <CellsTitle>{item.title}</CellsTitle>
              <Cells>
                {item.group.map((grp, idx) => {
                  return (
                    <Cell key={idx}>
                      <CellBody>{grp.name}</CellBody>
                      <CellFooter>{grp.phone}</CellFooter>
                    </Cell>
                  )
                })}
              </Cells>
            </div>
          );
        })}
      </Page>
    )
  }
}

export default PhoneNumList
